import { FC } from "react";

interface Props {
  value: string;
  handleClick?: () => void;
}
const Button: FC<Props> = ({ value, handleClick }): JSX.Element => {
  return (
    <button onClick={handleClick} className="calc-btn">
      {value}
    </button>
  );
};

export default Button;
