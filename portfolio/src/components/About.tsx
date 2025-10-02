import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, skills, education } from '../data/portfolio';

const About: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-16 section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm mr-3">👋</span>
                  Get to know me!
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  I'm a dedicated Java Full Stack Developer with hands-on experience in building scalable 
                  web applications using Spring Boot, React, and cloud technologies. During my internships 
                  at Orange Mantra and Lucenta Solutions, I've worked on diverse projects including OTT 
                  streaming platforms, carpooling applications, and data scraping solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Currently pursuing my Master's in Computer Applications with a specialization in AI-ML, 
                  I'm passionate about combining traditional software development with modern AI technologies. 
                  I enjoy tackling complex problems and building solutions that make a real impact in people's lives.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full border border-cyan-200">
                    <span className="text-cyan-700 font-medium">📍 {personalInfo.location}</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-full border border-green-200">
                    <span className="text-green-700 font-medium">🟢 Open to opportunities</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm mr-3">🚀</span>
                  My Skills
                </h3>
                {skills.map((skillCategory, index) => (
                  <motion.div
                    key={skillCategory.category}
                    variants={itemVariants}
                    className="mb-6 last:mb-0"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {skillCategory.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                          className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:from-cyan-100 hover:to-blue-100 hover:text-cyan-700 transition-all duration-200 border border-gray-200 hover:border-cyan-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm mr-3">🎓</span>
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-cyan-600 font-medium">{edu.field}</p>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-gray-700 font-medium">{edu.duration}</p>
                      {edu.gpa && edu.gpa !== "Ongoing" && (
                        <p className="text-cyan-600 font-semibold">CGPA: {edu.gpa}</p>
                      )}
                      {edu.gpa === "Ongoing" && (
                        <p className="text-green-600 font-semibold">In Progress</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;