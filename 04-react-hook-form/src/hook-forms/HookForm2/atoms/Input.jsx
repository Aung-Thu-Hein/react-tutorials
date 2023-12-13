import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const InnerInput = (props, ref) => {
  const { isError, type, ...rest } = props;

  return (
    <input
      type={type ?? "text"}
      ref={ref}
      className={isError ? "errorInput" : ""}
      {...rest}
    />
  );
};

export const Input = forwardRef(InnerInput);
