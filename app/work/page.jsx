"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "project 1",
    description:
      "Vibeflix is a dynamic streaming app offering personalized content, seamless navigation, and an engaging user experience.",
    stack: [
      { name: "Next Js" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://vibeflix-mu.vercel.app/",
    github: "https://github.com/chamath09/React-movie-app.git",
  },
  {
    num: "02",
    category: "full-stack",
    title: "project 2",
    description:
      "AI-Travel-Planner is an intelligent app that personalizes travel itineraries, offering smart suggestions and efficient planning.",
    stack: [
      { name: "Nerxt Js" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
      { name: "Gemini AI" },
      { name: "Firebase" },
    ],
    image: "/assets/work/landing.png",
    live: "https://ai-travel-p-lanner.vercel.app/",
    github: "https://github.com/chamath09/AI-Travel-PLanner.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "Restaura is a user-friendly app that allows easy restaurant bookings, menu browsing, and seamless order management.",
    stack: [
      { name: "React Js" },
      { name: "Tailwind CSS" },
      { name: "Javascript" },
    ],
    image: "/assets/work/image.png",
    live: "https://restaura-blue.vercel.app/",
    github: "https://github.com/chamath09/Restaura-React-landing-page.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 3",
    description:
      "BookFair is an interactive app that allows users to explore, discover, and purchase books at virtual fairs.",
    stack: [{ name: "HTML 05" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/image2.png",
    live: "https://book-fair-eta.vercel.app/",
    github: "https://github.com/chamath09/Book-search-app.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (Swiper) => {
    //get current slide index
    const currentIndex = Swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full p-2">
                  <div className="h-[460px] relative group overflow-hidden rounded-2xl shadow-2xl">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-accent/10 to-blue-500/20 animate-gradient-xy" />

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/40 to-purple-600/40 blur-2xl" />
                    </div>

                    {/* Image container with hover effect */}
                    <div className="relative w-full h-full rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

                      {/* Main image */}
                      <Image
                        src={project.image}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                        alt={project.title}
                        quality={90}
                      />

                      {/* Project info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Enhanced slider buttons */}
              <div className="absolute bottom-6 right-6 z-30 flex gap-3">
                <WorkSliderBtns
                  containerStyles="flex gap-3"
                  btnStyles="bg-white/10 backdrop-blur-md hover:bg-accent/90 text-white w-12 h-12 rounded-full flex justify-center items-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
