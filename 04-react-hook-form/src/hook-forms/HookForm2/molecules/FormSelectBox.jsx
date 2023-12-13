/* eslint-disable react/prop-types */
import { get, useFormContext } from "react-hook-form";
import { SelectBox } from "../atoms/SelectBox";

export const FormSelectBox = (props) => {
  const { register, formState } = useFormContext();
  const methods = register(props.name);
  const { errors } = formState;
  return (
    <SelectBox
      name={methods.name}
      ref={(el) => methods.ref(el)}
      onChange={(e) => methods.onChange(e)}
      onBlur={(e) => methods.onBlur(e)}
      placeholderText={props.placeholderText}
      dataList={props.dataList}
      isError={get(errors, props.name)}
    />
  );
};
