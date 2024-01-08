import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, its ${pageInfo?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<Software Engineer K1W1 />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen scroll-smooth flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width={120}
        height={120}
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Company Image"
        className=" relative rounded-fill h-32 mx-auto object-cover"
      />
      <div className="z-20 ">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f5deb3" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#WorkExperience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#Skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#Projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
