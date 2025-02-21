"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaFire,
  FaAws,
  FaPython,
  FaDocker,
  FaLinux,
  FaJenkins,
  FaJira,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiKubernetes,
  SiSpringboot,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiExpress, SiGooglecloud } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BiLogoGoLang } from "react-icons/bi";

// about data
const about = {
  title: "About me",
  description:
    "I am a software engineering student with a focus on full-stack web development and DevOps. Passionate about building scalable and efficient digital solutions, I am dedicated to continuous learning and applying modern technologies to create impactful web applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Chamath Upeka",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 71 48 22 623",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Linkedin",
      fieldValue: "chamat upeka",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldValue: "ChamathUpeka@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Bridging software engineering, web development, and DevOps to deliver scalable, secure, and efficient digital solutions.",
  items: [
    {
      company: "Fiverr",
      position: "Full Stack Developer",
      duration: "2020 - Present",
    },
    {
      company: "Tech Design",
      position: "Front End Developer",
      duration: "2021 - 2022",
    },
    {
      company: "E-commerce Startup",
      position: "Backend Developer",
      duration: "2020-2021",
    },
    {
      company: "FOT-USJP",
      position: "UI/UX Designer",
      duration: "2023-2024",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Building a strong foundation in software engineering, web development, and DevOps through continuous learning and hands-on experience.",
  items: [
    {
      institution: "FOT-USJP",
      degree: "SOftware Engineer Undergraduate",
      duration: "2022-present",
    },
    {
      institution: "DP Education",
      degree: "Full-Stack Developer",
      duration: "2022-2023",
    },
    {
      institution: "Kodekloud",
      degree: "Kubernetes for Developers",
      duration: "2025",
    },
    {
      institution: "University of Moratuwa",
      degree: "Python Programming",
      duration: "2022-2023",
    },
    {
      institution: "Canonical",
      degree: "Linux Administration",
      duration: "2024",
    },
    {
      institution: "Coursera",
      degree: "Java",
      duration: "2025-present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Technical expertise in software engineering, web development, and DevOps automation to build scalable and efficient solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <TbBrandReactNative />,
      name: "React Native",
    },
    {
      icon: <BiLogoGoLang />,
      name: "Golang",
    },
    {
      icon: <FaFire />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud",
    },
    {
      icon: <VscAzure />,
      name: "Azure",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 xl:gap-[30px] mt-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
