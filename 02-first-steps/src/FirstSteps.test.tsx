import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import FirstSteps from "./FirstSteps";

const mockItemCounter = vi.fn( (_props: unknown) => {
    return( <div data-testid="ItemCounter" />)
} )


vi.mock('./shopping-cart/ItemCounter', ()=>({
    ItemCounter: (props: unknown)=> mockItemCounter(props)
}))
    
    
describe("FirstSteps", () => {

    afterEach(()=>{
        vi.clearAllMocks()
    })

    test('Should match snapshots', ()=>{
        const {container} = render(<FirstSteps />);

        expect(container).matchSnapshot();
    })

    test('Should render the correct number of ItemCounter componentes', ()=>{
        render(<FirstSteps />)

        const counterComponents = screen.getAllByTestId('ItemCounter'); 
        
        expect(counterComponents.length).toBe(4);
        
        screen.debug()
    });

    test('should render ItemCounter with correct props', ()=>{
        render(<FirstSteps />);

        expect(mockItemCounter).toHaveBeenCalledTimes(4);

        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Nintendo Switch 2", 
            quantity: 3, 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Pro Controller", 
            quantity: 2, 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "PlayStation 5 Pro", 
            quantity: 1, 
        });
        expect(mockItemCounter).toHaveBeenCalledWith({ 
            name: "Super Mario Maker 3", 
            quantity: 4, 
        });
    })
})