import { Input } from "antd";
import { Controller } from "react-hook-form";

const PHinput = ({ type, name }: Record<string, string>) => {
  return (
    <Controller
      name={name}
      render={({ field }) => <Input type={type} id={name} {...field} />}
    />
  );
};

export default PHinput;
