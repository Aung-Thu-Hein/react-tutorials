/* eslint-disable react/prop-types */
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";

export const UncontrolledDate = (props) => {
  const { register, control } = useFormContext();
  const methods = register(props.name);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={methods.name}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            label="Uncontrolled picker"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </LocalizationProvider>
  );
};
