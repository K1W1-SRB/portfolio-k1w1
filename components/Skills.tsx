import React from "react";
import { motion } from "framer-motion";
import Skillcard from "./Skillcard";
import { Skill } from "../typing";

type Props = {
  skills: Skill[];
};

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:-space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:top-12">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm lg:top-8">
        Hover over a skills for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills?.map((Skill) => {
          return <Skillcard key={Skill?._id} Skill={Skill} />;
        })}
      </div>
    </motion.div>
  );
}
