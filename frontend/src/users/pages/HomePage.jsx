import React, { useState } from "react";
import { SideBar } from "../../globalComponents/SideBar.jsx";
import "../css/HomePage.css";

// Import all task components
import CurrentTask from "../components/CurrentTask.jsx";
import UpcomingTask from "../components/UpcomingTask.jsx";
import CompletedTask from "../components/CompletedTask.jsx";
import UnderReviewTask from "../components/UnderReviewTask.jsx";

// Icons

import { FaTasks } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { SiGoogletasks } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

const HomePage = () => {
  // 🔥 MAIN STATE
  const [activeOption, setActiveOption] = useState("Current Task");

  // Sidebar options
  const upperDivOptions = [
    { text: "Current Task", icon: FaTasks },
    { text: "Upcoming Tasks", icon: GrTasks },
    { text: "Completed Tasks", icon: SiGoogletasks },
    { text: "Under Review Tasks", icon: MdPreview }
  ];

  const downDivOptions = [
    { text: "Profile", icon: LuCircleUser },
    { text: "Logout", icon: MdLogout }
  ];

  return (
    <div className="user-home-page">
      <div className="user-home-body">

        {/* Sidebar */}
        <SideBar
          upperDivOptions={upperDivOptions}
          downDivOptions={downDivOptions}
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />

        {/* Dynamic Content */}
          { activeOption === "Current Task" && < CurrentTask />}
          { activeOption === "Upcoming Tasks" && < UpcomingTask />}
          { activeOption === "Completed Tasks" && < CompletedTask />}
          { activeOption === "Under Review Tasks" && < UnderReviewTask />}

      </div>
    </div>
  );
};

export default HomePage;