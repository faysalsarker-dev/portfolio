/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "../App.css";

const Example = ({ number, images, text, title, feature = [] }) => {
  const isEven = number % 2 === 0;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={true}
    >
      <div className="flex flex-col feature-content md:flex-row justify-center items-center my-8 gap-8">
        <div className={` mx-4 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <motion.div
            className={`relative rounded-lg p-6 bg-transparent shadow-lg hover:shadow-2xl transition-shadow duration-300 ${isEven ? 'md:left-28' : 'md:right-28'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={`${isEven ? 'md:text-start text-start' : 'md:text-end text-start'}`}>
              <h3 className="text-2xl font-bold mb-2 text-primary">Featured Project</h3>
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-inner">
                <div>
                  <h2 className="text-3xl font-bold mb-4">About</h2>
                  <p className="text-start">{text}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Features</h3>
                  <ul className="list-disc pl-5">
                    {feature.map((txt, idx) => {
                      const parts = txt.split(':');
                      const key = parts[0].trim();
                      const value = parts[1].trim();
  
                      return (
                        <li className="text-start" key={idx}>
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
        </div>
        <div className={`max-w-lg mx-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <motion.div
            className="rounded-lg shadow-lg  overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              className="w-full"
              src={images}
              alt="Project"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Example;
