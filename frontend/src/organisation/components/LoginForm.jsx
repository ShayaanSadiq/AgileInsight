import "../css/LoginForm.css";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../redux/organisation/authApiSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrOrg } from "../../redux/organisation/currOrg.js";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const [loginUser, { isLoading }] = usePostLoginMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await loginUser(data);
    if (result?.data?.message == "Login successful") {
      dispatch(setCurrOrg({ email: data.email }));
      toast.success("Login Successfull");
      navigate("/org/home");
    } else {
      console.log(result);
      toast.error(result.error.data.error);
    }
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
