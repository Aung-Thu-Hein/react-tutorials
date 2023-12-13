import { Link } from "react-router-dom";
import { UncontrolledDate } from "./UncontrolledDate";
import { ControlledDate } from "./ControlledDate";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";

export const HookForm3 = () => {
  const methods = useForm({
    defaultValues: {
      uncontrolledDate: dayjs(),
    },
  });
  const { handleSubmit } = methods;

  const onSubmit = (formData) => alert(JSON.stringify(formData));
  return (
    <>
      <h1>Hook Form 3 (Integrating with MUI)</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formWrapper">
            <div className="formWatch">
              <UncontrolledDate name="uncontrolledDate" />
            </div>
            <div className="formWatch">
              <ControlledDate name="controlledDate" />
            </div>
          </div>
          <input type="submit" className="goToBtn" />
        </form>
      </FormProvider>
      <button className="goToBtn">
        <Link to="/">Go to Hook Form 1</Link>
      </button>
    </>
  );
};
