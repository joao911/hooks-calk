import React from 'react';
import ReactDom from 'react-dom';
import calculadoraService from './calculadora.service'

describe('teste do calculadora service', () => {

    const [calcular,concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = calculadoraService();

    it('deve garantir que 1 + 4 = 5.', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    it('deve garatir que 1 -4 = -3.', () => {
        let subtracao = calcular(1, 4, SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });

    it('deve garantir que 1/4 = 0.25.', () => {
        let divisao = calcular(1, 4, DIVISAO);
        expect(divisao).toEqual(0.25);
    });

    it('deve garantir que 2 * 5 = 10.', () => {
        let multiplicacao = calcular(2, 5, MULTIPLICACAO);
        expect(multiplicacao).toEqual(10);
    });

    it('deve retornar operação invalida',()=>{
        let operacaoInvalida = calcular(1, 4, '%');
        expect(operacaoInvalida).toEqual(0);
    })
});