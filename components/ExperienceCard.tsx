import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col max-w-[300px] h-fit rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:max-w-[600px] xl:max-w-[800px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px]  object-center"
        src={urlFor(experience.companyImage).url()}
        key={experience._id}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 ">
          {experience.technologies.map((technology) => {
            return (
              <Image
                alt=""
                width={40}
                height={40}
                key={technology._id}
                className="w-10 h-10 rounded-full"
                src={urlFor(technology.Image).url()}
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scroll-bar-thumb-[#3baf3c]/80">
          {experience.points.map(
            (
              point:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined,
              i: React.Key | null | undefined
            ) => {
              return <li key={i}>{point}</li>;
            }
          )}
        </ul>
      </div>
    </article>
  );
}
