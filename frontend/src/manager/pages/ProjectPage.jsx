import React from "react";
import { ProjectPageMainDiv } from "../components/ProjectPageMainDiv";
import { useParams } from "react-router-dom";
import { useGetManagerProjectByIdQuery } from "../../redux/manager/managerProjectApiSlice";
import "../css/ProjectPage.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const { data, isLoading, isError } = useGetManagerProjectByIdQuery(
    projectId,
    {
      skip: !projectId,
    },
  );
  const project = data ? data : {};
  return (
    <div className="project-page-body">
      <ProjectPageMainDiv projectId={projectId} project={project} />
    </div>
  );
};

export default ProjectPage;
