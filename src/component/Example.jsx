/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Example = ({ number, images, text, title, feature = [], github, link }) => {
  const isEven = number % 2 === 0;
  console.log(github);

  return (
    <div className="relative">
      <div className="flex flex-col feature-content md:flex-row justify-center items-center my-8 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
          className={`mx-4 ${isEven ? "md:order-1" : "md:order-2"}`}
        >
          <motion.div
            className={`relative rounded-lg p-6 bg-transparent shadow-lg hover:shadow-2xl transition-shadow duration-300 ${isEven ? "md:left-28" : "md:right-28"}`}
            whileHover={{ translateY: -10 }}
            whileTap={{ translateY: 0 }}
          >
            <div className={`${isEven ? "md:text-start text-start" : "md:text-end text-start"}`}>
              <h3 className="text-2xl font-bold mb-2 text-primary">Featured Project</h3>
              <h2 className="text-3xl font-bold mb-4">
                {title} <a href={github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              </h2>
              <div className="bg-white bg-opacity-50  backdrop-blur-md p-4 rounded-lg shadow-inner">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    About <a className="text-blue-200" href={link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLink} /></a>
                  </h2>
                  <p className="text-start text-gray-800">{text}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Features</h3>
                  <ul className="list-disc pl-5">
                    {feature.map((txt, idx) => {
                      const parts = txt.split(":");
                      const key = parts[0].trim();
                      const value = parts[1].trim();

                      return (
                        <li className="text-start text-gray-700" key={idx}>
                          <span className="font-semibold">{key}: </span>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <div className={`max-w-lg mx-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
          <motion.div
            className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              className="w-full"
              src={images}
              alt="Project"
              initial={{ opacity: 0, x: isEven ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Example;
