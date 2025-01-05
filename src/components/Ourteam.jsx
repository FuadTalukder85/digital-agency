"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
const Ourteam = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      name: "E-commerce",
      caseStudy: {
        title: "Alveena Casa",
        description: "Latest Case Study",
        image: "https://i.postimg.cc/90zLgbRx/img.png",
        link: "/case-study/alveena-casa",
      },
    },
    {
      name: "Website Design",
      caseStudy: {
        title: "Digital Hub",
        description: "Featured Project",
        image: "https://i.postimg.cc/90zLgbRx/img.png",
        link: "/case-study/digital-hub",
      },
    },
    {
      name: "Digital Products",
      caseStudy: {
        title: "Tech Solutions",
        description: "Recent Work",
        image: "https://i.postimg.cc/90zLgbRx/img.png",
        link: "/case-study/tech-solutions",
      },
    },
    {
      name: "Brand Identities",
      caseStudy: {
        title: "Brand Studio",
        description: "Brand Case Study",
        image: "https://i.postimg.cc/90zLgbRx/img.png",
        link: "/case-study/brand-studio",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const caseStudyVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <main className="min-h-screen bg-black text-white p-8 lg:p-16">
      <Container className="max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-2xl lg:text-3xl mb-8"
        >
          Our team of experts can help you with...
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex items-center justify-between">
                <Link href={`#${service.name.toLowerCase()}`}>
                  <h3 className="text-4xl lg:text-6xl xl:text-7xl font-medium tracking-tight group-hover:text-[70px] transition-all py-5">
                    {service.name}
                  </h3>
                </Link>
                <AnimatePresence>
                  {hoveredService === service.name && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={caseStudyVariants}
                      className="hidden lg:flex items-center justify-center gap-4 min-w-[350px]"
                    >
                      <Link
                        href={service.caseStudy.link}
                        className="w-full group flex items-center gap-4 hover:opacity-80 transition-opacity"
                      >
                        <div className="text-right">
                          <p className="text-sm text-neutral-400">
                            {service.caseStudy.description}
                          </p>
                          <h4 className="text-xl font-medium">
                            {service.caseStudy.title}
                          </h4>
                        </div>
                        <div className="flex justify-between relative">
                          <div className="w-20 rounded-full">
                            <Image
                              src={service.caseStudy.image}
                              alt={service.caseStudy.title}
                              width={65}
                              height={65}
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="w-full text-7xl ">
                            <FaArrowRightLong className="absolute -right-8 top-1/2 -translate-y-1/2 transform group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </main>
  );
};

export default Ourteam;
