import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const HookForm1 = () => {
  const defaultValues = {
    firstName: "",
    lastName: "",
  };

  const form = useForm({ defaultValues });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  // console.log("er:: ", errors);			// get errors object in form
  // console.log("wt:: ", watch()); 		//subscribe what you type

  const lastName = watch("lastName");

  return (
    <div className="HookForm1Wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", {
            required: "First Name is required!",
            minLength: {
              value: 4,
              message: "Minimun length is 4",
            },
            maxLength: {
              value: 10,
              message: "Maximun length is 10",
            },
          })}
          placeholder="First Name"
        />
        <p className="errorMsg">{errors.firstName?.message}</p>
        <input {...register("lastName")} placeholder="Last Name" />
        <p>{lastName}</p>
        <div className="radioWrapper">
          <div className="radioInput">
            <label htmlFor="male" className="radioLabel">
              Male
            </label>
            <input
              id="male"
              type="radio"
              value="male"
              {...register("gender", { required: "Gender is required!" })}
            />
          </div>
          <div className="radioInput">
            <label htmlFor="female" className="radioLabel">
              Female
            </label>
            <input
              id="female"
              type="radio"
              value="female"
              {...register("gender")}
            />
          </div>
        </div>
        <p className="errorMsg">{errors.gender?.message}</p>

        <select {...register("region", { required: "Choose Region" })}>
          <option value="" defaultChecked>
            Choose Region
          </option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
          <option value="Australia">Australia</option>
        </select>
        <p className="errorMsg">{errors.region?.message}</p>

        <div className="radioInput">
          <label htmlFor="agreePolicy">Agree term of services and policy</label>
          <input
            type="checkbox"
            {...register("agreePolicy", { required: "Do you agree?" })}
          />
        </div>
        <p className="errorMsg">{errors.agreePolicy?.message}</p>

        <input type="submit" value="Submit" />
      </form>
      <div className="formWatch">{JSON.stringify(form.watch(), null, 2)}</div>
      <button className="goToBtn">
        <Link to="/hook-form-2">Go to Hook Form 2</Link>
      </button>
    </div>
  );
};
