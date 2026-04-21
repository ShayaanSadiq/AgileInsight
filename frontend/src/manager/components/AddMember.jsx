import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { usePostSignupMemberMutation } from "../../redux/manager/membersApiSlice.js";
import "../css/AddMember.css";

export const AddMember = ({
  setButtonClicked,
  register,
  handleSubmit,
  useSignupMember,
}) => {
  const { projectId } = useParams();
  const [signupMember, { isLoading, isError }] = usePostSignupMemberMutation();
  const inputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "role", label: "Role", type: "text" },
  ];

  const onSubmit = async (data) => {
    const result = await signupMember({ projectId, ...data });
    if (!result.error) {
      toast.success(result.data.message);
      setButtonClicked(false);
    } else {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="overlay">
      <div className="add-member-div">
        <MdArrowBackIos
          style={{ cursor: "pointer", marginTop: "5px" }}
          onClick={() => setButtonClicked((prev) => !prev)}
        />
        <form className="add-member-form" onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => (
            <div className="form-element" key={input.name}>
              <label htmlFor={`${input.name}`}>{input.label}</label>
              <input
                type={`${input.type}`}
                id={`${input.name}`}
                className="member-input"
                {...register(input.name)}
              />
            </div>
          ))}
          <button style={{ alignSelf: "center" }} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
