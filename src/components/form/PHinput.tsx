import React from "react";
import { useFormContext } from "react-hook-form";

const PHinput = ({ type, name }) => {
  const { register } = useFormContext();
  return <input type={type} id="name" {...register(name)} />;
};

export default PHinput;
