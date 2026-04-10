import React, { useState } from "react";
import { AddMember } from "./AddMember";
import { useForm } from "react-hook-form";
import { MdOutlineGroups } from "react-icons/md";
import "../css/ProjectRightDiv.css";

export const ProjectRightDiv = ({
  members = [
    { id: 1, name: "muqeet" },
    { id: 2, name: "kuchbhi" },
  ],
}) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const { register, handleSubmit } = useForm();
  return (
    <>
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
          <button onClick={() => setButtonClicked((prev) => !prev)}>
            Add member
          </button>
        </section>
        <section
          style={{ flex: "1", display: "flex", flexDirection: "column" }}
        >
          {members?.map((member) => (
            <div className="member" key={member.id}>
              <span>{member.name}</span>
            </div>
          ))}
        </section>
      </div>
      {buttonClicked && (
        <AddMember
          register={register}
          handleSubmit={handleSubmit}
          setButtonClicked={setButtonClicked}
        />
      )}
    </>
  );
};
