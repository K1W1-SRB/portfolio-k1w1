import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3baf3c]/80">
      <Head>
        <title>k1w1 portfolio-2.0</title>
      </Head>
      <Header />
      7o
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="WorkExperience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="Skills" className="snap-center">
        <Skills />
      </section>
      <section id="Projects" className="snap-center">
        <Project />
      </section>
      <section id="contacts" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="k1w1 logo illustator.svg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
