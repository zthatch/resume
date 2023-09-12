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
    <h2 className="mt-3 text-2xl font-bold tracking-tighter">
      {title}
    </h2>
    <h3 className="font-bold tracking-tighter text-lg">
      {timespan} 
    </h3>
    <p className="ml-8 ">
        {summary}
    </p>
      <ul className="ml-12 list-disc">
        {achievements.map((element, i) => (
            <li>{element}</li>
        ))}
      </ul>
    </section>
)}

export default WorkExperience

