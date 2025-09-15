import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {

    test('should render search bar correctly', () => { 
        
        const { container } = render(<SearchBar onQuery={()=>{}} />)
        
        expect(container).toMatchSnapshot();

        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();

     })

     test('should call onQuery with the correct value after 700ms', async() => {

        const onQuery = vi.fn()

        render(<SearchBar onQuery={onQuery} />)

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: 'test'}})

        // await new Promise((resolve) => setTimeout(resolve, 701))

        //Siempre debe de ir el await para que el codigo haya sido evaluado, sino se pone
        // es como si  no se ejecutara los de adentro y la prueba va a pasar sin comprobar realmente lo de dentro
        await waitFor(()=>{
            expect(onQuery).toHaveBeenCalled();
            expect(onQuery).toHaveBeenCalledWith('test');
        })

     })

     test('should call only once with the last value (debounce)', async () => {

        const onQuery = vi.fn()

        render(<SearchBar onQuery={onQuery} />)

        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: 't'}})
        fireEvent.change(input, {target: {value: 'te'}})
        fireEvent.change(input, {target: {value: 'tes'}})
        fireEvent.change(input, {target: {value: 'test'}})


        await waitFor(()=>{
            expect(onQuery).toHaveBeenCalledTimes(1);     
            expect(onQuery).toHaveBeenCalledWith('test');
        })

     })

     test('should call onQuery wheen button clicked with the input value', () => {

        const onQuery = vi.fn()

        render(<SearchBar onQuery={onQuery} />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'test'}})

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onQuery).toHaveBeenCalledTimes(1);
        expect(onQuery).toHaveBeenCalledWith('test')

     })


     test('should the input has the correct placeholder value', () => {
        render(<SearchBar onQuery={()=>{}} placeHolderText="Buscar" />)
        expect(screen.getByPlaceholderText('Buscar')).toBeDefined()
        screen.debug()
     })

})