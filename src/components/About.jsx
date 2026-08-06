'use client'
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services, technologies } from "../constants/constants"
import { SectionWrapper } from "./hoc";
import { fadeIn, slideIn } from "../utils/motion";
import Image from "next/image";
import heroImg from "../assets/user.svg";

const ServiceCard = ({ index, title, icon: Icon }) => (
  <Tilt className='xs:w-[250px] w-full'
    glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px"
    tiltMaxAngleX={30} tiltMaxAngleY={30} tiltEnable={true} perspective={1000}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Icon className='w-16 h-16 object-contain text-white' />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className='relative overflow-hidden lg:overflow-visible'>
        <div
          aria-hidden="true"
          className="absolute -z-10 left-4 top-2 h-48 w-64 rounded-full bg-[#8b5cf6]/25 blur-[45px]"
        />

        <div className='flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16'>
          <motion.div
            variants={slideIn("left", "spring", 0.1, 1)}
            className='-rotate-1 flex-[1.1] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 shadow-card font-mono'
          >
            <span className='inline-flex items-center gap-2 rounded-full border border-secondary/40 px-4 py-1.5 text-xs text-secondary'>
              <span className='relative flex h-2 w-2'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
              </span>
              Available for freelance projects
            </span>

            <h2 className='mt-6 text-white font-bold text-[32px] sm:text-[40px] leading-tight'>
              Hello, I am{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                Nguyen Anh Tuan
              </span>
            </h2>

            <p className='mt-6 border-l-2 border-[#915EFF] pl-4 text-white text-[15px] leading-relaxed'>
              Laravel &amp; PHP Developer | Backend &amp; API Architecture |
              Laravel, MySQL, Docker, Nginx, Redis
            </p>

            <p className='mt-6 text-secondary text-[15px] leading-relaxed'>
              I design and build websites end to end — from the layout, type,
              and motion someone actually sees, down to the Laravel backend
              running underneath it. I care about interfaces that feel
              considered rather than templated, and about code that's still
              easy to work with long after launch.
            </p>

            <div className='mt-8 flex flex-wrap items-center justify-between gap-6'>
              <a
                href='#contact'
                className='inline-block border border-white/60 text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-tertiary transition-colors duration-200'
              >
                Contact me!!
              </a>

              <div className='flex flex-wrap content-start gap-x-4 gap-y-3 max-w-[260px]'>
                {technologies.map((tech) => (
                  <tech.icon
                    key={tech.name}
                    title={tech.name}
                    aria-label={tech.name}
                    style={{ color: tech.color }}
                    className='w-5 h-5 shrink-0'
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideIn("right", "spring", 0.2, 1)}
            className='rotate-1 flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-card min-h-[360px] flex items-center justify-center relative'
          >
            <Image
              src={heroImg}
              alt='Nguyen Anh Tuan'
              className='w-2/3 max-w-[260px] opacity-90'
            />
          </motion.div>
        </div>
      </div>

      <div className='mt-20 flex-wrap justify-center gap-10 hidden md:flex'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
