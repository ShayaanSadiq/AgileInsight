import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "../css/manager.leftDetails.css";

export const ShowDetails = ({
  Icon,
  title,
  status,
  inputs,
  defaultValues,
  usePatchMutation,
  projectId,
  sprintId,
  taskId,
}) => {
  const [updateProject, { isLoading, isError }] = usePatchMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  });

  const onSubmit = async (data) => {
    const modifiedData = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = data[key];
      return acc;
    }, {});

    const result = await updateProject({
      projectId,
      sprintId,
      taskId,
      modifiedData,
    });
    if (!result.error) {
      toast.success(result.data.message);
    } else {
      toast.error("Something went wrong.");
    }
  };
  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);
  return (
    <>
      <div className="manager-left-details">
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Icon />
          <span>{title}</span>
        </span>
        <section
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="manager-left-details-form"
          >
            {inputs.map((input) => {
              if (input.type === "textarea") {
                return (
                  <div key={input.name} className="manager-form-object">
                    <label htmlFor={`${input.name}`}>{input.label}</label>
                    <textarea
                      type="text"
                      id={`${input.name}`}
                      placeholder={`${input.placeholder}`}
                      {...register(input.name)}
                      className="manager-form-input manager-textarea"
                    />
                  </div>
                );
              } else if (input.type === "text") {
                return (
                  <div key={input.name} className="manager-form-object">
                    <label htmlFor={`${input.name}`}>{input.label}</label>
                    <input
                      type="text"
                      id={`${input.name}`}
                      placeholder={`${input.placeholder}`}
                      {...register(input.name)}
                      className="manager-form-input"
                    />
                  </div>
                );
              }
            })}

            <div className="manager-status-date">
              {inputs.map((input) => {
                if (input.type === "date") {
                  return (
                    <div key={input.name} className="manager-form-object">
                      <label htmlFor={`${input.name}`}>{input.label}</label>
                      <input
                        type="text"
                        id={`${input.name}`}
                        placeholder={`${input.placeholder}`}
                        {...register(input.name)}
                        className="manager-date-input"
                      />
                    </div>
                  );
                }
              })}
            </div>
            <span>Status </span>
            <section>{status}</section>

            <button style={{ alignSelf: "end" }} type="submit">
              Update
            </button>
          </form>
        </section>
      </div>
    </>
  );
};
