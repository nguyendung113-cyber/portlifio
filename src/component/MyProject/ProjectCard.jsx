import React from "react";


export const ProjectCard = ({
  project: { title,  skills ,description, source },
}) => {
  return (
    <div data-bs-theme="dark">
    <div class="card tw-gap-5" style={{height: 390, width:500}}>
        <div class="card-body tw-my-5">
            <h5 class="card-title tw-text-2xl tw-font-bold tw-text-center">{title}</h5>
            <p class="card-text tw-px-2 tw-py-2 tw-text-xl tw-text-white tw-mt-3"style={{height: 140}}>{description}</p>
            <ul className="tw-flex tw-flex-rows tw-flex-wrap tw-items-center tw-my-4 tw-gap-3">
                {skills.map((skill, id) => {
                return (
                    <li className="tw-border-solid tw-border-2 tw-text-2xl tw-rounded-full tw-text-center tw-border-indigo-600 tw-px-7" key={id}>
                    {skill}
                    </li>
                );
                })}
            </ul>
            <div className="tw-flex tw-my-4 tw-gap-3">
              <a className="tw-border-solid tw-border-2 tw-text-3xl tw-rounded-full tw-px-4 tw-bg-indigo-600 tw-border-indigo-600 tw-px-7" href={source}>
                  Source
              </a>
            </div>
            
        </div>
    </div>
    </div>
  );
};