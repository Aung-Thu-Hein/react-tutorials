/* eslint-disable react/prop-types */
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";

export const ControlledDate = (props) => {
  const { control, register } = useFormContext();
  const methods = register(props.name);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={methods.name}
        render={({ field }) => (
          <DatePicker
            label="Controlled picker"
            onChange={(date) => field.onChange(date)}
          />
        )}
      />
    </LocalizationProvider>
  );
};
