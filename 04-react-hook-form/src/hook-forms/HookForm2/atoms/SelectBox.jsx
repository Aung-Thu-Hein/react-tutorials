/* eslint-disable react/prop-types */
import { forwardRef } from "react";

const InnerSelectBox = (props, ref) => {
  const { isError, dataList, placeholderText, ...rest } = props;

  return (
    <select ref={ref} {...rest} className={isError ? "errorInput" : ""}>
      <option value="">{placeholderText}</option>
      {dataList.map((data, index) => (
        <option key={index} value={Object.keys(data)}>
          {data[Object.keys(data)]}
        </option>
      ))}
    </select>
  );
};

export const SelectBox = forwardRef(InnerSelectBox);
