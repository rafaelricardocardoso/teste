const { describe, expect, it } = require('@jest/globals')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        let resultado = calculadora.sum(1, 2);
        expect(resultado).toEqual(3);
        resultado = calculadora.sum(-1, 2);
        expect(resultado).toEqual(1);
        resultado = () => calculadora.sum("a", 2);
        expect(resultado).toThrow("Não é um número");
        resultado = () => calculadora.sum(2, "a");
        expect(resultado).toThrow("Não é um número");
        resultado = calculadora.sum(5,-3);
        expect(resultado).toEqual(2);
    });

    it('Operação de subtração', () => {
        let resultado = calculadora.sub(1, 2);
        expect(resultado).toEqual(-1);
        resultado = calculadora.sub(4, 2);
        expect(resultado).toEqual(2);
        resultado = calculadora.sub(9, 6);
        expect(resultado).toEqual(3);
        resultado = () => calculadora.sub("a", -2);
        expect(resultado).toThrow("Não é um número");
        resultado = () => calculadora.sub(-2, "a");
        expect(resultado).toThrow("Não é um número");
        
    });

    it('Operação de multiplicação', () => {
        let resultado = calculadora.mult(1, 2);
        expect(resultado).toEqual(2);
         resultado = calculadora.mult(4, 2);
        expect(resultado).toEqual(8);
         resultado = calculadora.mult(8, 3);
        expect(resultado).toEqual(24);
         resultado = calculadora.mult(5, 3);
        expect(resultado).toEqual(15);
         resultado = calculadora.mult(-3, 3);
        expect(resultado).toEqual(-9);
         resultado = calculadora.mult(1, 0);
        expect(resultado).toEqual(0);
         resultado = calculadora.mult(0, 8);
        expect(resultado).toEqual(0);
         resultado = calculadora.mult(6, 2);
        expect(resultado).toEqual(12);

    });

    it('Operação de divisão', () => {
        let resultado = calculadora.div(1, 2);
        expect(resultado).toEqual(0.5);
         resultado = calculadora.div(5, 10);
        expect(resultado).toEqual(0.5);
         resultado = calculadora.div(6, 4);
        expect(resultado).toEqual(1.5);
         resultado = calculadora.div(7, 4);
        expect(resultado).toEqual(1.75);
         resultado = calculadora.div(9, 2);
        expect(resultado).toEqual(4.5);
         resultado = calculadora.div(0, 4);
        expect(resultado).toEqual(0);
         resultado = calculadora.div(-12, -4);
        expect(resultado).toEqual(3);
         resultado = calculadora.div(10, -4);
        expect(resultado).toEqual(-2.5);
         resultado = calculadora.div(6, 3);
        expect(resultado).toEqual(2);
        
    });
    it('Operação de Raiz', () => {
        let resultado = calculadora.raiz(9, (1/2));
        expect(resultado).toEqual(3);
         resultado = calculadora.raiz(64, (1/2));
        expect(resultado).toEqual(8);
         resultado = calculadora.raiz(36, (1/2));
        expect(resultado).toEqual(6);
         resultado = calculadora.raiz(49, (1/2));
        expect(resultado).toEqual(7);
         resultado = calculadora.raiz(81, (1/2));
        expect(resultado).toEqual(9);
         resultado = calculadora.raiz(121, (1/2));
        expect(resultado).toEqual(11);
         resultado = calculadora.raiz(1, (1/2));
        expect(resultado).toEqual(1);
         resultado = calculadora.raiz(4, (1/2));
        expect(resultado).toEqual(2);
         resultado = calculadora.raiz(25, (1/2));
        expect(resultado).toEqual(5);
        
    });
    it('Operação de Potencia', () => {
        let resultado = calculadora.pot(3,2);
        expect(resultado).toEqual(9);
         resultado = calculadora.pot(8,2);
        expect(resultado).toEqual(64);
         resultado = calculadora.pot(7,3);
        expect(resultado).toEqual(343);
         resultado = calculadora.pot(3,4);
        expect(resultado).toEqual(81);
         resultado = calculadora.pot(0,6);
        expect(resultado).toEqual(0);
         resultado = calculadora.pot(2,9);
        expect(resultado).toEqual(512);
         resultado = calculadora.pot(6,7);
        expect(resultado).toEqual(279936);
         resultado = calculadora.pot(5,3);
        expect(resultado).toEqual(125);
         resultado = calculadora.pot(25,4);
        expect(resultado).toEqual(390625);

    });


// Math.sqrt raiz
// Math.pow potencia
})



16 ** (1/3)
16 ** 8