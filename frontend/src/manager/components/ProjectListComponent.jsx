import React from "react";
import { ProjectComponent } from "./ProjectComponent.jsx";
import { useGetProjectsByIdQuery } from "../../redux/manager/ProjectApiSlice.js";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../css/ProjectList.css";

export const ProjectListComponent = () => {
  const id = useSelector((state) => state.currOrg.id);
  const { data, isLoading, isError } = useGetProjectsByIdQuery(id);

  return (
    <div className="project-headings">
      <table>
        <tr>
          <th>Name</th>
          <th>Due-Date</th>
          <th>Completed</th>
          <th></th>
        </tr>

        {data?.map((project) => (
          <tr key={project.id}>
            <ProjectComponent project={project} />
          </tr>
        ))}
      </table>
    </div>
  );
};
