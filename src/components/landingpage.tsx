"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { TextGenerateEffect } from "./ui/text-generate-effect";


export function ImagesSliderDemo() {
   const words = `The Araku escape you need\ncoffee caves clouds`;
  const images = [
    "https://i.pinimg.com/736x/aa/ff/09/aaff09161980da504b8b1cc7d1baa60e.jpg",
    "https://i.pinimg.com/736x/67/dc/55/67dc55ba208950ec7e0831fcbbb10679.jpg",
    "https://i.pinimg.com/1200x/b2/d6/d6/b2d6d623f357f937f5d354df58458b4e.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                  <TextGenerateEffect words={words} className="text-inherit" />
                </motion.p>
      </motion.div>
    </ImagesSlider>
  );
}
