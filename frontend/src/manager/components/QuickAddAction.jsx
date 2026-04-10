import React from "react";
import { toast } from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import "../css/manager.quickAdd.action.css";

export const QuickAddAction = ({
  inputs,
  setButtonClicked,
  register,
  handleSubmit,
  useAddFunction,
}) => {
  // const [addFunction, { isLoading, isError }] = useAddFunction();
  const onSubmit = async (data) => {
    // const result = await addFunction(data);
    // console.log(result);
    console.log(data);
  };
  return (
    <div className="overlay">
      <div className="quick-add-div">
        <MdArrowBackIos
          style={{ cursor: "pointer", marginTop: "5px" }}
          onClick={setButtonClicked}
        />
        <form className="quick-add-form" onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((input) => {
            if (input.type === "select") {
              return (
                <div className="quick-form-element" key={input.name}>
                  <label htmlFor={`${input.name}`}>{input.label}</label>
                  <select
                    name={`${input.name}`}
                    id={`${input.name}`}
                    className="quick-add-input"
                  >
                    <option value="">Select</option>
                    {input.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              );
            } else {
              return (
                <div className="quick-form-element" key={input.name}>
                  <label htmlFor={`${input.name}`}>{input.label}</label>
                  <input
                    type={`${input.type}`}
                    id={`${input.name}`}
                    className="quick-add-input"
                    {...register(input.name)}
                  />
                </div>
              );
            }
          })}

          <button style={{ alignSelf: "center" }} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
