import "../css/LoginForm.css";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../redux/organisation/authApiSlice.js";

export const LoginForm = () => {
  const [loginUser, { isLoading }] = usePostLoginMutation();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const result = await loginUser(data);
    console.log(result);
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email Id"
          className="input-field"
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          {...register("password")}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
