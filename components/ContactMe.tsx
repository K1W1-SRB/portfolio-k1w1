"use client";
import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { PageInfo } from "../typing";
import Mail from "../pages/api/Captcha";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const [captcha, setCaptcha] = useState<string | null>();

  const onSubmit = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    recaptcha: string | null;
  }) => {
    try {
      if (!formData.recaptcha) {
        alert("Please complete the reCAPTCHA.");
        return;
      }
      const response = await fetch("/api/Captcha", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen container flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="hidden md:inline-block absolute top-10 p-7 uppercase tracking-[20px] text-gray-500 text-2xl md:top-28 before:lg:top-0 ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 lg:mt-16">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#3baf3c]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#3baf3c] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-[#3baf3c] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput my-2 md:my-0"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            onChange={(token) => setValue("recaptcha", token)}
            className="my-4 mx-auto"
          />
          <button
            type="submit"
            className="bg-[#3baf3c] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
