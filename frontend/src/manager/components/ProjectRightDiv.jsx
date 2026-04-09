import React from "react";
import "../css/ProjectRightDiv.css";
import { MdOutlineGroups } from "react-icons/md";

export const ProjectRightDiv = ({
  members = [
    { id: 1, name: "muqeet" },
    { id: 2, name: "kuchbhi" },
  ],
}) => {
  return (
    <div className="right-div-main">
      <section className="right-head">
        <span
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "23%",
          }}
        >
          <MdOutlineGroups size={21} />
          <span>Members</span>
        </span>
        <button>Add member</button>
      </section>
      <section style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        {members?.map((member) => (
          <div className="member" key={member.id}>
            <span>{member.name}</span>
          </div>
        ))}
      </section>
    </div>
  );
};
