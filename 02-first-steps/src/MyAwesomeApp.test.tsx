import { describe, expect, test } from "vitest";
import {render, screen} from "@testing-library/react"
import { MyAwesomeApp } from "./MyAwesomeApp";

describe("MyAwesomeApp", ()=>{
    test('Should render first name and last name', ()=>{       
        const { container } = render(<MyAwesomeApp />);
        // console.log(container.innerHTML);
        // screen.debug();

        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');

        //ESTAS SON LAS PRUEBAS UTILIZANDO CONTAINER QUE DESESTRUCTURAMOS DEL RENDER()
        //Que contenga en este caso se ignoran los espacios que estan en el componente, para buscar solamente la palabra Fernando 
        //y la prueba no falle porque hacen falta los espacios del elemento
        expect(h1?.innerHTML).toContain('Fernando');
        expect(h3?.innerHTML).toContain('Herrera');

    })
    
    test('Should render first name and last name - SCREEN', ()=>{       
        render(<MyAwesomeApp />);
        // console.log(container.innerHTML);
        screen.debug();

        // const h1 = screen.getByRole('heading', {
        //     level: 1
        // });

        const h1 = screen.getByTestId("first-name-test");

        expect(h1.innerHTML).toContain("Fernando")
    })


    test('should match snapshot', ()=>{
        const {container} = render(<MyAwesomeApp />);

        expect(container).toMatchSnapshot()
    })
   
    test('should match snapshot', ()=>{
         render(<MyAwesomeApp />);
         expect(screen.getByTestId("div-app")).toMatchSnapshot()
    })

})
