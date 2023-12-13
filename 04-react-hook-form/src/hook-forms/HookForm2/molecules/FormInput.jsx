/* eslint-disable react/prop-types */
import { get, useFormContext } from "react-hook-form";
import { Input } from "../atoms/Input";

export const FormInput = (props) => {
  const { register, formState } = useFormContext();
  const methods = register(props.name);
  const { errors } = formState;

  return (
    <Input
      name={methods.name}
      ref={(el) => methods.ref(el)}
      onChange={(e) => methods.onChange(e)}
      onBlur={(e) => methods.onBlur(e)}
      isError={get(errors, props.name)}
      {...props}
    />
  );
};
