import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdArrowBackIos } from "react-icons/md";
import { toast } from "react-hot-toast";
import moment from "moment";
import "../css/ShowList.css";

export const ShowList = ({
  title,
  buttonTxt,
  array,
  useAddFunction,
  inputs,
  noListMessage,
  ProjectId,
  SprintId,
}) => {
  const [addFunction, { isLoading, isError }] = useAddFunction();
  const [btnClicked, setBtnClicked] = useState(false);

  const { register, handleSubmit } = useForm();
  const handleClick = async (data) => {
    if (data?.startDate || data?.endDate) {
      data.startDate = moment(data.startDate).format("DD-MM-YYYY");
      data.endDate = moment(data.endDate).format("DD-MM-YYYY");
    }
    const projectId = ProjectId ? ProjectId : null;
    const sprintId = SprintId ? SprintId : null;
    const payload = { ...data, projectId, sprintId };
    const result = await addFunction(payload);
    console.log(result, projectId);
    if (!result.error) {
      toast.success(result.data.message);
      setBtnClicked(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  const useBack = () => {
    return setBtnClicked((prev) => !prev);
  };
  return (
    <>
      <div className="show-lsit">
        <section className="show-list-header">
          <span>{title}</span>
          <button onClick={useBack}>{buttonTxt}</button>
        </section>
        {array?.length !== 0 && (
          <section className="show-list-section">
            {array?.map((obj) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid black",
                }}
              >
                <span>{obj.name}</span>
                <span>{obj.description}</span>
              </div>
            ))}
          </section>
        )}
        {array?.length === 0 && <p>{noListMessage}</p>}
      </div>

      {btnClicked && (
        <div className="overlay">
          <div className="overlay-inner-div">
            <MdArrowBackIos
              style={{ cursor: "pointer", marginTop: "5px" }}
              onClick={useBack}
            />
            <form className="add-form" onSubmit={handleSubmit(handleClick)}>
              {inputs.map((input) => {
                if (input.type === "select") {
                  return (
                    <div className="form-element" key={input.name}>
                      <label htmlFor={`${input.name}`}>{input.label}</label>
                      <select
                        name={`${input.name}`}
                        id={`${input.name}`}
                        className="add-input"
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
                    <div className="form-element" key={input.name}>
                      <label htmlFor={`${input.name}`}>{input.label}</label>
                      <input
                        type={`${input.type}`}
                        id={`${input.name}`}
                        className="add-input"
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
      )}
    </>
  );
};
