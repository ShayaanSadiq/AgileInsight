import React from "react";
import { toast } from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import { useForm } from "react-hook-form";
import moment from "moment";
import "./css/quickAddAction.css";

export const QuickAddAction = ({ inputs, useBack, useAddFunction }) => {
  const [addFunction, { isLoading, isError }] = useAddFunction();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.startDate && data.endDate) {
      data.startDate = moment(data.startDate).format("DD-MM-YYYY");
      data.endDate = moment(data.endDate).format("DD-MM-YYYY");
    }
    const result = await addFunction(data);
    if (!result.error) {
      toast.success("successful.");
      useBack();
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="overlay">
      <div className="quick-add-div">
        <MdArrowBackIos
          style={{ cursor: "pointer", marginTop: "5px" }}
          onClick={useBack}
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
                    {...register("projectId")}
                  >
                    <option value="">Select</option>
                    {input.options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
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
