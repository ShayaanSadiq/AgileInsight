import "../css/LoginForm.css";
import { usePostLoginMutation } from "../../redux/manager/authApiSlice.js";
import { useForm } from "react-hook-form";
import { setCurrManager } from "../../redux/manager/currManagerSlice.js";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [loginManager, { isLoading }] = usePostLoginMutation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const result = await loginManager(data);
    console.log(result);
    if (result.data?.message && result.data.message == "Login successful") {
      let payload = { id: result.data.id };
      dispatch(setCurrManager(payload));
      toast.success("Login successfull.");
      navigate("/manager/home");
    } else {
      toast.error("Login unsuccessfull.");
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
