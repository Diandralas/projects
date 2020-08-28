import React from 'react';
import './Calculator.css';

const Calculator = () => {
  return (
    <section>
      <h1>Calculadora</h1>
      <div className="container">
        <div>
          <button>C</button>
          <input type='text'></input>
        </div>
        <div className="line">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="operator">/</button>
        </div>
        <div className="line">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className="operator">*</button>
        </div>
        <div className="line">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="operator">-</button>
        </div>
        <div className="line">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button className="operator">+</button>
        </div>
      </div>
    </section>
  )
};

export default Calculator;
