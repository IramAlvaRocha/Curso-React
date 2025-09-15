import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", ()=>{
    test('should render with default values', ()=>{

        const name = "Test item";

        render(<ItemCounter name={name}/>)

        screen.debug();

        expect( screen.getByText(name) ).toBeDefined();
        expect( screen.getByText(name) ).not.toBeNull();

    })
    
    test('should render with custom quantity', ()=>{

        const name = "Test item";
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity}/>)

        screen.debug();

        expect( screen.getByText(quantity) ).toBeDefined();
        // expect( screen.getByText(name) ).not.toBeNull();

    })

    test('Should increase count when +1 button is pressed', ()=>{
        render(<ItemCounter name={'Test item'} quantity={1}/>)

        const [buttonAdd] = screen.getAllByRole("button");

        fireEvent.click(buttonAdd);

        expect( screen.getByText("2") ).toBeDefined();
    })
    
    test('Should decrease count when -1 button is pressed', ()=>{
        render(<ItemCounter name={'Test item'} quantity={5}/>)

        const [, buttonSubstract] = screen.getAllByRole("button");

        fireEvent.click(buttonSubstract);

        expect( screen.getByText("4") ).toBeDefined();
    })

    test('Should not  decrease count when -1 button is pressed and quantity is 1', ()=>{
        render(<ItemCounter name={'Test item'} quantity={1}/>)

        const [, buttonSubstract] = screen.getAllByRole("button");

        fireEvent.click(buttonSubstract);

        expect( screen.getByText("1") ).toBeDefined();
    })
   
    test('Should change to red when count is 1', ()=>{

        const quantity = 1;
        const name = 'Test item';

        render(<ItemCounter name={name} quantity={quantity}/>)

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
        
        
    })
   
    test('Should change to white when count is greater than 1', ()=>{

        const quantity = 2;
        const name = 'Test item';

        render(<ItemCounter name={name} quantity={quantity}/>)

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('white');
        
        
    })
})