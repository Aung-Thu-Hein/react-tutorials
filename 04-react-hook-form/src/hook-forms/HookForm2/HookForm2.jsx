import { Input } from "./atoms/Input";
import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "./molecules/FormInput";
import { FormSelectBox } from "./molecules/FormSelectBox";
import { ErrorMessage } from "./molecules/ErrorMessage";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export const HookForm2 = () => {
  const methods = useForm({
    defaultValues: {
      agreePolicy: false,
    },
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData));
    console.log(formData);
  };

  const dataList = [
    { Asia: "Asia" },
    { Europe: "Europe" },
    { America: "America" },
    { Africa: "Africa" },
  ];

  return (
    <>
      <h1>Hook Form 2 (Atomic Design)</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" />
          <FormInput name="lastName" placeholder="Last Name" />
          <div className="radioWrapper">
            <div className="radioInput">
              <label htmlFor="male" className="radioLabel">
                Male
              </label>
              <FormInput id="male" type="radio" value="male" name="gender" />
            </div>
            <div className="radioInput">
              <label htmlFor="female" className="radioLabel">
                Female
              </label>
              <FormInput
                id="female"
                type="radio"
                value="female"
                name="gender"
              />
            </div>
          </div>
          <ErrorMessage name="gender" />
          <FormSelectBox
            name="region"
            placeholderText="Choose Region"
            dataList={dataList}
          />
          <ErrorMessage name="region" />
          <div className="radioInput">
            <label htmlFor="agreePolicy" className="radioLabel">
              Agree term of services and policy
            </label>
            <FormInput id="agreePolicy" type="checkbox" name="agreePolicy" />
          </div>
          <ErrorMessage name="agreePolicy" />
          <Input type="submit" />
        </form>
      </FormProvider>
      <button className="goToBtn">
        <Link to="/hook-form-3">Go to Hook Form 3</Link>
      </button>
    </>
  );
};
