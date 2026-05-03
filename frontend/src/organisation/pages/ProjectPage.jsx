import React, { useEffect } from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../../redux/organisation/orgProjectApiSlice.js";
import { usePatchOrgProjectMutation } from "../../redux/organisation/orgProjectApiSlice.js";
import { useGetAllManagersQuery } from "../../redux/organisation/orgManagersApiSlice.js";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "../css/ProjectPage.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { data, isLoading, isError } = useGetProjectByIdQuery(projectId, {
    skip: !projectId,
  });
  const [updateProject] = usePatchOrgProjectMutation();
  const { data: managers } = useGetAllManagersQuery();
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

  const inputs = [
    { name: "name", type: "text", label: "Name", placeholder: "type here" },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      placeholder: "type here",
    },
    {
      name: "startDate",
      type: "text",
      label: "Start Date",
      placeholder: "dd / mm / yyyy",
    },
    {
      name: "endDate",
      type: "text",
      label: "End Date",
      placeholder: "dd / mm / yyyy",
    },
  ];

  const onUpdate = async (data) => {
    const modifiedData = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = data[key];
      return acc;
    }, {});

    const result = await updateProject({ projectId, modifiedData });
    if (!result.error) {
      toast.success(result.data.message);
    } else {
      toast.error("Something went wrong.");
    }
  };

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  console.log(managers);
  return (
    <OrganisationLayout>
      <div className="org-project-main">
        <form className="org-project-form" onSubmit={handleSubmit(onUpdate)}>
          <div>
            <h4>Project Details</h4>
          </div>
          {inputs.map((input) => {
            if (input.type === "textarea") {
              return (
                <div key={input.name} className="org-form-object">
                  <label htmlFor={`${input.name}`}>{input.label}</label>
                  <textarea
                    id={`${input.name}`}
                    placeholder={`${input.placeholder}`}
                    {...register(input.name)}
                    className="org-form-textarea"
                  />
                </div>
              );
            } else {
              return (
                <div key={input.name} className="org-form-object">
                  <label htmlFor={`${input.name}`}>{input.label}</label>
                  <input
                    type="text"
                    id={`${input.name}`}
                    placeholder={`${input.placeholder}`}
                    {...register(input.name)}
                    className={`org-form-input ${input.placeholder === "dd / mm / yyyy" ? "org-form-date" : ""}`}
                  />
                </div>
              );
            }
          })}
          <button style={{ maxWidth: "100px", alignSelf: "end" }} type="submit">
            update
          </button>
        </form>
        <div>show analytics here</div>
      </div>
    </OrganisationLayout>
  );
};

export default ProjectPage;
