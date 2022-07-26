import { Math } from './Math';

describe('Testing Math Library', () => {
    test('Should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });
    
    test('Should subtract two numbers correctly', () => {
        const response = Math.sub(10, 5);
        expect(response).toBe(5);
    });
    
    test('Should divide two numbers correctly', () => {
        const response = Math.div(10, 2);
        expect(response).toBe(5);
    });
    
    test('Should multiply two numbers correctly', () => {
        const response = Math.mut(5, 10);
        expect(response).toBe(50);
    
        const response2 = Math.mut(0, 3);
        expect(response2).toBe(0);
    });
});

