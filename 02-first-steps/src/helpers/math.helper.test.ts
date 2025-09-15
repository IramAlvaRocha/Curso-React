import {describe, expect, test} from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('Add', ()=>{
    
    test( 'Should add two positive numbers', ()=>{
    
        // 1. Arrange
        const a = 1;
        const b = 2;
    
        // 2. Act
        const result = add(a, b);
        
        // 3. Assert
        expect(result).toBe( a + b );   
    });

    test( 'Should add two negative numbers', ()=>{
    
        // 1. Arrange
        const a = -2;
        const b = -4;
    
        // 2. Act
        const result = add(a, b);
        
        // 3. Assert
        expect(result).toBe( a + b );   
    });

});

describe('Subtract', ()=>{
    test("Should substract two positive numbers", ()=>{
        // 1. Arrange
        const a = 10;
        const b = 5;

        // 2. Act
        const result = subtract(a, b);

        // 3. Assert
        expect(result).toBe(a - b);
    })

    test("Should add two negative numbers", ()=>{
        // 1. Arrange
        const a = -10;
        const b = -5;

        // 2. Act
        const result = subtract(a, b);

        // 3. Assert
        expect(result).toBe(a - b);
    })
});


describe('Multiply', ()=>{
    test("Should multiply two positive numbers", ()=>{
        // 1. Arrange
        const a = 4;
        const b = 5;

        // 2. Act
        const result = multiply(a, b);

        // 3. Assert
        expect(result).toBe(a * b);
    });

    test("Should multiply two negative numbers", ()=>{
        // 1. Arrange
        const a = -4;
        const b = -5;

        // 2. Act
        const result = multiply(a, b);

        // 3. Assert
        expect(result).toBe(a * b);
    })

    
})