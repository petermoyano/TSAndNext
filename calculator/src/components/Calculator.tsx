import { FC } from "react";
import Button from "./Button";
import ButtonWrapper from "./ButtonWrapper";

const Calculator: FC = (): JSX.Element => {
  const handleClick = () => {
    console.log("Hellouu!");
  };
  return (
    <div className="border padding-10">
      <div className="calculator-screen border">
        <span>0</span>
        <span className="result"></span>
      </div>
      <ButtonWrapper>
        <Button value={"1"} handleClick={handleClick} />
        <Button value={"2"} handleClick={handleClick} />
        <Button value={"3"} handleClick={handleClick} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value={"4"} handleClick={handleClick} />
        <Button value={"5"} handleClick={handleClick} />
        <Button value={"6"} handleClick={handleClick} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value={"7"} handleClick={handleClick} />
        <Button value={"8"} handleClick={handleClick} />
        <Button value={"9"} handleClick={handleClick} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value={"0"} handleClick={handleClick} />
        <Button value={"+"} handleClick={handleClick} />
        <Button value={"-"} handleClick={handleClick} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button value={"/"} handleClick={handleClick} />
        <Button value={"*"} handleClick={handleClick} />
        <Button value={"="} handleClick={handleClick} />
      </ButtonWrapper>
    </div>
  );
};

export default Calculator;
