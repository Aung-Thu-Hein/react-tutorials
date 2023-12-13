/* eslint-disable react/prop-types */
import { get, useFormContext } from "react-hook-form";

export const ErrorMessage = (props) => {
  const { formState } = useFormContext();
  const { errors } = formState;

  const error = get(errors, props.name, {});

  return error && <p className="errorMsg">{error.message}</p>;
};
