import { FC } from "react";

const Calculator: FC = (): JSX.Element => {
  return (
    <div className="border padding-10">
      <div className="calculator-screen border">
        <span>0</span>
        <span className="result"></span>
      </div>
      <div className="btn-wrapper">
        <button className="calc-btn">1</button>
        <button className="calc-btn">2</button>
        <button className="calc-btn">3</button>
      </div>
      <div className="btn-wrapper">
        <button className="calc-btn">4</button>
        <button className="calc-btn">5</button>
        <button className="calc-btn">6</button>
      </div>
      <div className="btn-wrapper">
        <button className="calc-btn">7</button>
        <button className="calc-btn">8</button>
        <button className="calc-btn">9</button>
      </div>
      <div className="btn-wrapper">
        <button className="calc-btn">0</button>
        <button className="calc-btn">+</button>
        <button className="calc-btn">-</button>
      </div>
      <div className="btn-wrapper">
        <button className="calc-btn">/</button>
        <button className="calc-btn">*</button>
        <button className="calc-btn">=</button>
      </div>
    </div>
  );
};

export default Calculator;
