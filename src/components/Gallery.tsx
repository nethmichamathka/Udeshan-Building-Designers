import React from 'react';
import { motion } from 'motion/react';

const PROJECTS = [
  { id: 1, title: "Modern Villa", category: "Architectural", img: `${import.meta.env.BASE_URL}images/project-1.jpg` },
  { id: 2, title: "Luxury Apartment", category: "3D Design", img: `${import.meta.env.BASE_URL}images/project-2.jpg` },
  { id: 3, title: "Commercial Complex", category: "Construction", img: `${import.meta.env.BASE_URL}images/project-3.jpg` },
  { id: 4, title: "Residential Project", category: "Residential", img: `${import.meta.env.BASE_URL}images/project-4.jpg` },
  { id: 5, title: "Structural Design", category: "Engineering", img: `${import.meta.env.BASE_URL}images/project-5.jpg` },
  { id: 6, title: "Building Project", category: "Construction", img: `${import.meta.env.BASE_URL}images/project-6.jpg` },
];

export const Gallery: React.FC = () => {
  return (
    <div className="py-16 px-4" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Project Gallery</h2>
            <p className="text-gray-500">Showcasing our finest architectural and construction works.</p>
          </div>
          <button className="text-orange-600 font-semibold hover:underline">View All Projects</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
