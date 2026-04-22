import React, { useState } from "react";
import { ProjectPageHeader } from "./ProjectPageHeader";
import "../css/AnalyticsBox.css";

export const AnalyticsBox = () => {
  const [activeOption, setActiveOption] = useState("project");

  return (
    <div className="analytics-box-body">
      <ProjectPageHeader
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
      <h3>Analytics</h3>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus
        ipsum atque ea nobis nihil nostrum itaque minus? Inventore optio labore
        praesentium, quaerat odit possimus quis. Repellat accusantium cum optio?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nam
        saepe voluptatum quos iste! Laudantium culpa placeat saepe beatae, modi
        non obcaecati libero esse necessitatibus, explicabo natus consectetur
        perspiciatis veritatis? Totam recusandae, quisquam similique libero
        maiores sapiente modi repellat in autem nobis blanditiis saepe optio rem
        repellendus accusantium cum enim omnis tempora, molestiae minus ipsa
        aliquid pariatur sequi? Impedit, soluta. Quidem ipsam repellat mollitia
        perferendis a exercitationem quisquam, dolorem velit inventore odio
        rerum nobis blanditiis necessitatibus! Labore neque voluptatibus, earum
        veniam voluptatem, dicta sint assumenda minus modi reprehenderit,
        explicabo cumque? Iste placeat, voluptatibus repudiandae itaque
        consequuntur accusantium cum neque omnis quasi quibusdam illo hic
        adipisci, commodi fugit minima molestias laudantium! Quibusdam aliquam
        modi quia necessitatibus dignissimos. Itaque nemo veniam dolor! Ad
        corporis laboriosam repudiandae ducimus est eum amet esse quae rerum eos
        temporibus, ab debitis facilis magnam nulla, hic enim natus odit iusto
        vitae itaque. A praesentium ipsum mollitia fugit?
      </div>
    </div>
  );
};
