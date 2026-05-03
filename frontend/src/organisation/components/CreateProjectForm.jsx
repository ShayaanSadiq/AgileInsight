import React from "react";
import { toast } from "react-hot-toast";

export const CreateProjectForm = ({
  register,
  handleSubmit,
  managerId,
  organisationId,
  usePostCreateProjectMutation,
}) => {
  const [createProject, { isLoading, isError }] =
    usePostCreateProjectMutation();
  const onSubmit = async (data) => {
    let payload = {
      ...data,
      managerId: managerId,
      organisationId: organisationId,
    };
    console.log(payload);
    const result = await createProject(payload);
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        type="text"
        placeholder="Enter the project name"
        {...register("name")}
        className="input"
      />
      <input
        type="text"
        placeholder="Enter the project description"
        {...register("description")}
        className="input"
      />
      <input
        type="text"
        placeholder="Enter the project start date (DD-MM-YYYY)"
        {...register("startDate")}
        className="input"
      />
      <input
        type="text"
        placeholder="Enter the project end date (DD-MM-YYYY)"
        {...register("endDate")}
        className="input"
      />
      <input
        type="number"
        placeholder="Enter the number of expected sprints"
        {...register("expectedSprints")}
        className="input"
      />
      <button type="submit" className="submit-button">
        Create
      </button>
    </form>
  );
};
