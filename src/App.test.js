import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import ReactDOM from 'react-dom'

describe('Calculadora', () => {

  it(' deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve limpar campo de numeros.', () => {
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('C'));
    expect(getByTestId('textnumber')).toHaveValue('0');
  });
  
  it('deve ferificar se o botaão soma está funcionando.',()=>{
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textnumber')).toHaveValue('4');
  })

  it('deve ferificar se o botaão subtração está funcionando.',()=>{
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textnumber')).toHaveValue('0');
  })

  it('deve ferificar se o botaão multiplicação está funcionando.',()=>{
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textnumber')).toHaveValue('4');
  })

  it('deve ferificar se o botaão multiplicação está funcionando.',()=>{
    const { getByTestId, getByText } = render(<App />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('textnumber')).toHaveValue('1');
  })

})


