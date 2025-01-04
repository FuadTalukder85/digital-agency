"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "./Container";
import Buttonprimary from "./ReusableBtn/Buttonprimary";

const Banner = () => {
  return (
    <Container>
      <main className="min-h-screen bg-white mt-48">
        <div className="">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight">
              Crafting <span className="text-[#6366F1]">Digital</span>
              <br />
              Experiences
            </h1>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 justify-between mt-48"
          >
            {/* Awards */}
            {/* <div className="flex justify-between"> */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-medium">15</span>
              </div>
              <span className="text-xl text-neutral-600">Website Awards</span>
            </div>
            <div className="flex justify-between">
              {/* Description */}
              <div className="pr-8">
                <p className="text-2xl md:text-3xl text-neutral-900">
                  We build engaging websites, brands & innovative e-commerce
                  solutions.
                </p>
              </div>

              {/* CTA Button */}
              <div className="w-72">
                <Buttonprimary>Case Studies</Buttonprimary>
              </div>
            </div>
            {/* </div> */}
          </motion.div>
        </div>
      </main>
    </Container>
  );
};

export default Banner;
