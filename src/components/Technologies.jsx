import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostgresql } from "react-icons/si";
import { FaJs, FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa"; 
import { SiTypescript } from "react-icons/si"; 
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const skills = [
    { name: "React.js", icon: <RiReactjsFill className="text-6xl text-cyan-400" />, duration: 2.5 },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl text-green-500" />, duration: 3 },
    { name: "Express.js", icon: <SiExpress className="text-6xl text-gray-600" />, duration: 5 },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-400" />, duration: 2 },
    { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-400" />, duration: 6 },
    { name: "TypeScript", icon: <SiTypescript className="text-6xl text-blue-500" />, duration: 4 },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-6xl text-blue-600" />, duration: 2.5 },
    { name: "Bootstrap", icon: <FaBootstrap className="text-6xl text-purple-600" />, duration: 5 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-6xl text-blue-400" />, duration: 3 },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              variants={iconVariants(skill.duration)} 
              initial="initial"
              animate="animate"
            >
              {skill.icon}
            </motion.div>
            {/* <p className="mt-2 text-lg font-medium text-center">{skill.name}</p> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
