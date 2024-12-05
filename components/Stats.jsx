"use client";

import CountUp from "react-countup";

import ServicePage from "../app/services/page";
import ResumePage from "../app/resume/page";
import WorkPage from "../app/work/page";
import ContactPage from "../app/contact/page";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 5,
    text: "Technologies Maastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mb-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`{
                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Divider */}
      <div className="flex justify-center mt-8">
  <div className="border-t border-accent opacity-50 animate-reversedWidth"></div>
</div>

{/* Service Section */}
<div className="mt-8">
  <h2 className="text-4xl font-bold text-accent mb-6 text-center mt-2">
    My Services
  </h2>
  <ServicePage />
</div>

<div>
  <ResumePage />
</div>


{/* Work Section */}
<div className="mt-8">
  <h2 className="text-4xl font-bold text-accent mb-6 text-center ">
    My Work
  </h2>
  <WorkPage />
</div>

{/* Divider */}
<div className="flex justify-center ">
  <div className="border-t opacity-50 animate-reversedWidth"></div>
</div>

{/* Add a <style> tag for @keyframes */}
<style jsx>{`
  @keyframes reversedWidth {
    0% {
      width: 50%;
    }
    50% {
      width: 40%;
    }
    100% {
      width: 30%;
    }
  }

  .animate-reversedWidth {
    animation: reversedWidth 5s infinite ease-in-out;
  }
`}</style>





{/* Contact Section */}
<div className="mt-8 mb-3">
  <h2 className="text-4xl font-bold text-accent mb-6 text-center ">
    Contact Me
  </h2>
  <ContactPage />
</div>

    </section>
  );
};

export default Stats;
