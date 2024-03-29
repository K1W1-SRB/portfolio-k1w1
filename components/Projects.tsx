import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";


type Props = {
  projects: Project[]
};

export default function projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:top-12">
        Projects
      </h3>
  
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3baf3c]/80">
        {projects?.map((project, i) => (
          <div key={project?._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-h-64"
              key={project?._id}
              src={urlFor(project?.Image).url()}
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#3baf3c]/50">
                  Case study {i + 1} of {projects?.length}{" "}
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.technologies.map((Technology) => {
                  return <Image key={Technology?._id} width={40} height={40} className="w-10 h-10 " alt="image of technologies" src={urlFor(Technology?.Image).url()} />
                })}
              </div>

              <p className="text-lg text-center ">
                {project?.summary}
              </p>
              <a className="underline flex  justify-center  text-[#3baf3c] decoration-[#3baf3c]/50" href={project?.linkToBuild}>Link to build</a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#3baf3c]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
