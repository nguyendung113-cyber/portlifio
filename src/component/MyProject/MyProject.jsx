
import React from 'react';
import { ProjectCard } from "./ProjectCard";
import projects from "../../data/Project.json";
export const  MyProject = () => {
    return(
        <section id="MyProject">
                 <div className=" tw-text-center tw-w-full">
                <div className=" tw-flex">
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                    <h1 className="tw-text-4xl tw-w-[500px] tw-my-4 tw-text-white">Dự án</h1>
                    <div className=" tw-border-solid tw-m-auto  tw-border-l tw-w-full ">
                        <div className="border-solid border-1 tw-flex tw-items-center tw-border-yellow-200"></div>
                    </div>
                </div>
            </div>
                <div className="container-fluid tw-flex tw-flex-wrap tw-gap-5 tw-justify-center " style={{ maxWidth: 1280}}>
                    {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                    })}
                </div>
        </section>            
);
}




