import React from "react";
import { OrganisationLayout } from "../components/OrganisationLayout.jsx";
import { useParams } from "react-router-dom";
import { useGetProjectByIdQuery } from "../../redux/organisation/projectApiSlice.js";
import { useForm } from "react-hook-form";
import "../css/ProjectPage.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { data, isLoading, isError } = useGetProjectByIdQuery(projectId, {
    skip: !projectId,
  });
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "hello",
      description: "hi",
      startDate: "12/12/2025",
      endDate: "12/01/2026",
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

  return (
    <OrganisationLayout>
      <div className="org-project-main">
        <form className="org-project-form">
          {inputs.map((input) => {
            if (input.type === "textarea") {
              return (
                <div className="org-form-object">
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
                <div className="org-form-object">
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
        </form>
      </div>
    </OrganisationLayout>
  );
};

export default ProjectPage;
