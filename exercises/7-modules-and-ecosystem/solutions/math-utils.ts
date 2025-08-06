// Math utilities module
// This file contains mathematical functions that can be imported by other files

export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

export function squareRoot(value: number): number {
    if (value < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(value);
} 