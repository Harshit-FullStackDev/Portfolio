import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              My journey through various roles and projects, showcasing growth, learning, and the impact I've made 
              in Java development, Python automation, and cutting-edge technologies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-300 to-purple-300"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                className="relative mb-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:flex md:items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-effect p-6 rounded-xl hover:shadow-xl transition-all duration-300 relative border border-gray-100"
                    >
                      {/* Arrow pointing to timeline */}
                      <div className={`absolute top-6 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100 ${
                        index % 2 === 0 
                          ? 'md:-right-2 hidden md:block' 
                          : 'md:-left-2 hidden md:block'
                      }`}></div>

                      {/* Company & Position */}
                      <div className="flex items-center mb-3">
                        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-2 rounded-lg mr-3">
                          <Briefcase className="text-cyan-600" size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 leading-tight">{experience.position}</h3>
                          <h4 className="text-lg font-semibold text-cyan-600">{experience.company}</h4>
                        </div>
                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                          <Calendar size={14} className="mr-2 text-gray-500" />
                          <span className="text-gray-700 font-medium">{experience.duration}</span>
                        </div>
                        <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                          <MapPin size={14} className="mr-2 text-gray-500" />
                          <span className="text-gray-700 font-medium">{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-6">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start text-sm leading-relaxed">
                            <span className="text-cyan-500 mr-3 mt-1 text-lg">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium border border-cyan-200 hover:from-cyan-100 hover:to-blue-100 transition-colors duration-200"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;