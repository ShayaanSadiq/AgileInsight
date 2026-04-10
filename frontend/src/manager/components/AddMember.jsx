import React from "react";
import "../css/AddMember.css";
import { MdArrowBackIos } from "react-icons/md";

export const AddMember = ({ setButtonClicked, register, handleSubmit }) => {
  const inputs = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "role", label: "Role", type: "text" },
  ];

  const onSubmit = (data) => {
    console.log(data);
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
