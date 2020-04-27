import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, Button, Form } from 'react-bootstrap'
import calculadoraService from './calculadora.service'
import './App.css';

function App() {

  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = calculadoraService();

  const [textnumber, setTxtNumber] = useState('0');
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function addNumber(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNumero(number1, numero);
      setNumber1(resultado)
    } else {
      resultado = concatenarNumero(number2, numero);
      setNumber2(resultado);
    }
    setTxtNumber(resultado);
  }

  function addOperation(op) {

  
    // apenas define a operação caso elanão exista
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    // caso operação operação estiver definoda e o numero 2 estiver selecionado, realiza o calculo da operação
    if (number1 !== null) {
      const resultado = calcular(parseFloat(number1), parseFloat(number2), operacao);
      setOperacao(op);
      setNumber1(resultado.toString());
      setNumber2(null);
      setTxtNumber(resultado.toString());
    }
  }

  function acaoCalcular() {
    if (number2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(number1), parseFloat(number2), operacao);
    setTxtNumber(resultado);
  }
  function clear(){
    setTxtNumber('0');
    setNumber1('0');
    setNumber2(null);
    setOperacao(null);

  }

  return (
    <Jumbotron
      style={{
        background: 'transparent !importante',
        backgroundColor: 'purple',
        padding: '5px',
        margin: '5px',
        width: '400px'
      }}
    >

      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger"
            onClick={clear}
            >C</Button>

          </Col>
          <Col xs="9">
            <Form.Control type="text"
              name="txtNumber"
              className="text-right"
              readOnly="readOnly"
              value={textnumber}
              data-testid ="textnumber"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('7')}
            >7</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('8')}
            >8</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('9')}
            >9</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => addOperation(DIVISAO)}
            >/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('4')}
            >4</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('5')}
            >5</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('6')}
            >6</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => addOperation(MULTIPLICACAO)}
            >*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('1')}
            >1</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('2')}
            >2</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('3')}
            >3</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => addOperation(SUBTRACAO)}
            >-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('0')}
            >0</Button>
          </Col>
          <Col>
            <Button variant="light"
              onClick={() => addNumber('.')}
            >.</Button>
          </Col>
          <Col>
            <Button variant="success"
            onClick={acaoCalcular}
            >=</Button>
          </Col>
          <Col>
            <Button variant="warning"
              onClick={() => addOperation(SOMA)}
            >+</Button>
          </Col>
        </Row>

      </Container>
    </Jumbotron>
  );
}

export default App;
