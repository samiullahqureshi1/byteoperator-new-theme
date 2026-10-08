'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, allWorkCategories, Project } from '@/data/projects';
import { WorkCard } from '@/components/work/WorkCard';
import { CaseStudyModal } from '@/components/home/CaseStudyModal';
import { useSound } from '@/components/layout/SoundProvider';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playClick, playHover } = useSound();

  // Filter projects by active category
  const filteredProjects =
    activeCategory === 'Featured'
      ? projects
      : projects.filter((p) => {
          const matchCategory = p.category.toLowerCase() === activeCategory.toLowerCase();
          const matchTags = p.tags.some(
            (t) => t.toLowerCase() === activeCategory.toLowerCase() ||
                   t.toLowerCase().includes(activeCategory.toLowerCase())
          );
          return matchCategory || matchTags;
        });

  return (
    <div className="relative min-h-screen bg-[#f3f2eb] text-[rgb(15,29,7)] selection:bg-[rgb(15,29,7)] selection:text-[#f3f2eb]">
      {/* Hero Header Section */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-medium tracking-[-0.035em] leading-[0.98] text-[rgb(15,29,7)] max-w-[1400px]"
          style={{
            fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
          }}
        >
          World-class digital
          <br />
          products, idea to execution.
        </motion.h1>

        {/* Filter Pills Matching Reference Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-10 sm:mt-14"
        >
          {allWorkCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  playClick();
                  setActiveCategory(category);
                }}
                onMouseEnter={playHover}
                style={{
                  fontFamily: 'neueMontreal, "neueMontreal Fallback", sans-serif',
                }}
                className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-[rgb(15,29,7)] text-white shadow-sm'
                    : 'bg-white text-[rgb(15,29,7)] hover:bg-black/5 border border-black/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 mb-28 sm:mb-40">
        {activeCategory === 'Featured' ? (
          /* Alternating rhythmic grid layout matching Humaan structure */
          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-14">
            {/* Row 0: Full width Landscape -> Pharmacy 777 */}
            {filteredProjects[0] && (
              <WorkCard
                project={filteredProjects[0]}
                onSelect={setSelectedProject}
                priority
              />
            )}

            {/* Row 1: 2 Portrait Cards side by side -> NBCF & Talk N Walk */}
            {filteredProjects.slice(1, 3).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {filteredProjects.slice(1, 3).map((p) => (
                  <WorkCard
                    key={p.id}
                    project={p}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

            {/* Row 2: Full width Landscape -> Exposing Surveillance */}
            {filteredProjects[3] && (
              <WorkCard
                project={filteredProjects[3]}
                onSelect={setSelectedProject}
              />
            )}

            {/* Row 3: 2 Portrait Cards side by side -> Sussex Taps & Chaleit */}
            {filteredProjects.slice(4, 6).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {filteredProjects.slice(4, 6).map((p) => (
                  <WorkCard
                    key={p.id}
                    project={p}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

            {/* Row 4: Full width Landscape -> Marvell Tile & Stone */}
            {filteredProjects[6] && (
              <WorkCard
                project={filteredProjects[6]}
                onSelect={setSelectedProject}
              />
            )}

            {/* Row 5: 2 Portrait Cards side by side -> Cancer Council WA & Loam */}
            {filteredProjects.slice(7, 9).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {filteredProjects.slice(7, 9).map((p) => (
                  <WorkCard
                    key={p.id}
                    project={p}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

            {/* Row 6: Full width Landscape -> Scotch College Melbourne */}
            {filteredProjects[9] && (
              <WorkCard
                project={filteredProjects[9]}
                onSelect={setSelectedProject}
              />
            )}

            {/* Row 7: 2 Portrait Cards side by side -> Pentanet & TrailsWA */}
            {filteredProjects.slice(10, 12).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {filteredProjects.slice(10, 12).map((p) => (
                  <WorkCard
                    key={p.id}
                    project={p}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

            {/* Row 8: Full width Landscape -> PIQUE */}
            {filteredProjects[12] && (
              <WorkCard
                project={filteredProjects[12]}
                onSelect={setSelectedProject}
              />
            )}

            {/* Row 9: 2 Portrait Cards side by side -> Fair Go Finance & Ferox */}
            {filteredProjects.slice(13, 15).length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                {filteredProjects.slice(13, 15).map((p) => (
                  <WorkCard
                    key={p.id}
                    project={p}
                    onSelect={setSelectedProject}
                  />
                ))}
              </div>
            )}

            {/* Row 10: Full width Landscape -> Fluidity */}
            {filteredProjects[15] && (
              <WorkCard
                project={filteredProjects[15]}
                onSelect={setSelectedProject}
              />
            )}
          </div>
        ) : (
          /* Filtered Category Grid */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          >
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <WorkCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  priority={idx < 2}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>


      {/* Case Study Modal View */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
