import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe('MyCounterApp', () => {

    test('should render the component', ()=>{
        render(<MyCounterApp />)
        screen.debug();
        expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain('Counter 10')
        expect(screen.getByRole('button', { name: '+1'}).innerHTML).toBeDefined();
        expect(screen.getByRole('button', { name: '-1'}).innerHTML).toBeDefined();
        expect(screen.getByRole('button', { name: 'reset'}).innerHTML).toBeDefined();
    });

    test('should incremente the counter value', ()=>{
        render(<MyCounterApp/>)
        
        const labelH1 = screen.getByRole('heading', { level: 1});
        const button = screen.getByRole('button', { name: '+1'});

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain('Counter 11');
    });
    
    test('should decrement the counter value', ()=>{
        render(<MyCounterApp/>)
        
        const labelH1 = screen.getByRole('heading', { level: 1});
        const button = screen.getByRole('button', { name: '-1'});

        fireEvent.click(button)

        expect(labelH1.innerHTML).toContain('Counter 9');
    });

})