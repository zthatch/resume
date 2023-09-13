import React, { FC } from "react";

interface WorkExperienceProps {
    title: string;
    timespan: string;
    summary: string;
    achievements: string[]
}

const WorkExperience: FC<WorkExperienceProps> = ({title, timespan, summary, achievements}) => {
    return (
    <section>
    <h2 className="">
      {title}
    </h2>
    <h3 className="">
      {timespan} 
    </h3>
    <p className="">
        {summary}
    </p>
      <ul className="">
        {achievements.map((element, idx) => (
            <li key={idx}>{element} </li>
        ))}
      </ul>
    </section>
)}

export default WorkExperience

