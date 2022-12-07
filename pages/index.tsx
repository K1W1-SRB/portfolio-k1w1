import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({
  pageInfo,
  experiences,
  skills,
  socials,
  projects,
}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3baf3c]/80">
      <Head>
        <title>k1w1 portfolio-2.0</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="WorkExperience" className="snap-center">
        <WorkExperience experience={experiences}/>
      </section>
      <section id="Skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="Projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="contacts" className="snap-center">
        <ContactMe pageInfo={pageInfo}/>
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
      projects,
    },

    revalidate: 10,
  };
};
