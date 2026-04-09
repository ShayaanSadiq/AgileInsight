import React, { useState } from "react";
import "../css/EditPage.css";
import { SideBarOption } from "../components/SideBarOption.jsx";
import { BottomDiv } from "../components/BottomDiv.jsx";
import { LuFileCode } from "react-icons/lu";
import { MdCalendarToday } from "react-icons/md";
import { BiSolidFlag } from "react-icons/bi";
import { LuListTodo } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LuIterationCcw } from "react-icons/lu";
import { useForm } from "react-hook-form";

const EditPage = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Kill Muqeet",
      description: "Please kill muqeet",
      startDate: "10-04-2026",
      endDate: "15-04-2026",
    },
  });
  const [activeOption, setActiveOption] = useState("Project");
  const sideBarOptions = [
    { text: "Project", icon: LuFileCode },
    { text: "Sprints", icon: LuIterationCcw },
    { text: "Tasks", icon: LuListTodo },
  ];
  const headingStyles = {
    fontSize: "larger",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  return (
    <div className="edit-page">
      <div className="edit-body">
        <div className="side-bar">
          {sideBarOptions.map((option) => (
            <SideBarOption
              Icon={option.icon}
              text={option.text}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
            />
          ))}
        </div>
        <div className="main-div">
          <span style={headingStyles}>{activeOption}</span>
          <div className="description-div">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              unde velit delectus quam perferendis,
            </span>
            <span>latest updated</span>
          </div>
          <BottomDiv register={register} />
        </div>
      </div>
    </div>
  );
};

export default EditPage;
