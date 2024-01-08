import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typing";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:softwaredeveloper.k1w1@gmail,com?subject=${formData?.subject}&body=Hi, my name is ${formData?.name}, ${formData?.message} (${formData?.email})`;
  // };
  const onSubmit = (formData) => {
    const subject = encodeURIComponent(formData.subject || "");
    const name = encodeURIComponent(formData.name || "");
    const message = encodeURIComponent(formData.message || "");
    const email = encodeURIComponent(formData.email || "");

    const mailtoLink = `mailto:softwaredeveloper.k1w1@gmail.com?subject=${subject}&body=Hi, my name is ${name}, ${message} (${email})`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="h-screen container flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:top-0 ">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 lg:mt-16">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{""}
          <span className="decoration-[#3baf3c]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#3baf3c] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>

          <div className="flex items-center space-x-4 justify-center ">
            <EnvelopeIcon className="text-[#3baf3c] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.email}</p>
          </div>

          <div className="flex items-center space-x-4 justify-center">
            <MapPinIcon className="text-[#3baf3c] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
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
