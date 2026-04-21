import "./css/authForm.css";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthForm = ({
  title,
  inputs,
  useAuthMutation,
  register,
  handleSubmit,
  setCurrData,
  navigateLink,
}) => {
  const [authFunction, { isLoading }] = useAuthMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await authFunction(data);
    if (result.data?.message && result.data.message == `${title} successful`) {
      let payload = { id: result.data.id };
      dispatch(setCurrData(payload));
      toast.success(`${title} successful.`);
      navigate(navigateLink);
    } else {
      toast.error(`${title} unsuccessful.`);
    }
  };
  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        {inputs.map((input) => (
          <div key={input.name} className="auth-inputs-div">
            <label
              style={{ alignSelf: "start", marginLeft: "45px" }}
              htmlFor={`${input.name}`}
            >
              {input.label}
            </label>
            <input
              id={`${input.name}`}
              type={`${input.type}`}
              placeholder={`${input.placeholder}`}
              className="input-field"
              {...register(input.name)}
            />
          </div>
        ))}
        <button className="auth-button" type="submit">
          {title}
        </button>
      </form>
    </>
  );
};
