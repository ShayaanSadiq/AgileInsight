import "../css/LoginForm.css";
import { useForm } from "react-hook-form";
import { usePostLoginMutation } from "../../redux/user/authApiSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrUser } from "../../redux/user/currUserSlice.js";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const [loginUser, { isLoading }] = usePostLoginMutation();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const result = await loginUser(data);
    if (result?.data?.message == "Login successful") {
      dispatch(setCurrUser({ id: data.id }));
      toast.success("Login Successfull");
      navigate("/user/home");
    } else {
      toast.error(result.data.message);
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
