import "../css/LoginForm.css";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
