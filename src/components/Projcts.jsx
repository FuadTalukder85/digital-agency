"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Romans & Partners",
    image: "https://i.postimg.cc/htsvNtmT/slider01.png",
    tags: ["UI/UX Design", "Property Portal"],
    isLatest: true,
  },
  {
    id: 2,
    title: "Alveena C",
    image: "https://i.postimg.cc/htsvNtmT/slider01.png",
    tags: ["UI/UX Design", "E-Commerce"],
  },
  {
    id: 3,
    title: "Digital Hub",
    image: "https://i.postimg.cc/htsvNtmT/slider01.png",
    tags: ["Web Design", "Branding"],
  },
  {
    id: 4,
    title: "Tech Solutions",
    image: "https://i.postimg.cc/htsvNtmT/slider01.png",
    tags: ["UI/UX Design", "SaaS"],
  },
];

const Projects = () => {
  return (
    <main className="min-h-screen mt-28">
      <div className="">
        <div className="overflow-x-auto overflow-y-hidden flex gap-12 p-8 lg:p-5 items-stretch scrollbar-hide">
          <div className="w-full lg:w-[700px] flex-shrink-0 p-8 lg:px-16 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-7xl font-medium">Work</h1>
              <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center text-xl">
                13
              </div>
            </div>
            <p className="text-3xl text-[#111111] mb-8 max-w-[400px]">
              A selection of our crafted work, built from scratch by our
              talented in-house team.
            </p>
            <div className="mt-56">
              <Link href="#case-studies">
                <button className="py-4 px-12 border border-blue-600 rounded-full text-2xl text-[#111111]">
                  Case Studies
                </button>
              </Link>
            </div>
          </div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative flex-shrink-0 w-[80vw] lg:w-[800px] group cursor-pointer text-white border-4 border-white hover:border-4 hover:border-blue-600 hover:bg-blue-600 transition-all duration-700 ease-in-out rounded-[35px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent rounded-[35px]"></div>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={700}
                className="object-cover rounded-[35px]"
              />
              <div className="absolute inset-0 p-14 flex flex-col justify-between">
                <div className="flex justify-end">
                  {project.isLatest && (
                    <span className="bg-blue-600 px-6 py-2 rounded-3xl">
                      Latest
                    </span>
                  )}
                </div>
                <div>
                  <h2 className="text-5xl font-medium mb-4">{project.title}</h2>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 border border-gray-400 rounded-full backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
