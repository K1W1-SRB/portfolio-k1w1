import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";

type Props = {
  experience: Experience[];
};

export default function WorkExperience({ experience }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-center text-gray-500 text-2xl lg:top-12">
        Work Experience
      </h3>

      <div className="w-full container mt-32 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3baf3c]/80 lg:max-h-[600px]">
        {experience?.map((experience) => {
          return (
            <ExperienceCard key={experience?._id} experience={experience} />
          );
        })}
      </div>
    </motion.div>
  );
}
