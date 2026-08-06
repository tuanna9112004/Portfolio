"use client";
import { memo, useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import heroImg from "../assets/user.svg";
import { useIntro } from "./IntroWrapper";

const Hero = memo(function Hero() {
  const { introComplete } = useIntro();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      className={`relative z-[-1] w-full h-screen mx-auto banner overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={introComplete ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`absolute inset-0 top-[150px] right-40 z-[-1] animation max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ scale: 0 }}
            animate={introComplete ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-5 h-5 rounded-full bg-[#915EFF]"
          />
          <motion.div
            initial={{ height: 0 }}
            animate={introComplete ? { height: "auto" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-1 sm:h-80 h-40 violet-gradient"
          />
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={introComplete ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}
          >
            Hi, I'm{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={introComplete ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[60px] lg:text-[110px] block"
            >
              Tuan
            </motion.span>
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete && imageLoaded ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Image
          fetchPriority="high"
          src={heroImg}
          alt="hero"
          className="z-[-2] absolute bottom-24 right-0 animation"
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={introComplete ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1 }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 cursor-pointer"
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
});

export default Hero;
