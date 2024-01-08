import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col mb-5 relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center scroll-smooth"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:tracking-[20px]">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 1.2,
        }}
        className="-mb-24 hidden md:mb-0 flex-shrink-0 h-48 w-48 pt-2 md:w-64 md:h-96 md:inline"
        src={urlFor(pageInfo?.profilePic).url()}
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className=" text-4xl font-semibold">
          Here is a <span>little</span> Background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
