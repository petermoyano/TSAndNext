import { FC, useState, ChangeEventHandler, FormEventHandler } from "react";
import Button from "./Button";

interface Props {}

const Form: FC<Props> = (): JSX.Element => {
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col">
      <input
        className="border padding-10"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div className="padding-10">
        <Button value="Submit" />
      </div>
    </form>
  );
};

export default Form;
