import React from "react";
import { BottomDiv } from "./BottomDiv.jsx";
import { HeadingDescription } from "./HeadingDescription.jsx";
import { useForm } from "react-hook-form";

export const ProjectEdit = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "Kill Muqeet",
      description: "Please kill muqeet",
      startDate: "10-04-2026",
      endDate: "15-04-2026",
    },
  });
  return (
    <>
      <HeadingDescription
        title={"Project"}
        description={"please kill bad people"}
        lastUpdated={"today"}
      />
      <BottomDiv register={register} />
    </>
  );
};
