import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import profile from './../img/profile.png';
import cv from './../img/cartificate.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
    return (
        <div className="container relative flex md:flex-row flex-col-reverse justify-center items-center gap-8 mt-20 ">
            <motion.div
                className='flex-1 hero-content'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0 }}
            >
                <div className='text-white flex flex-col justify-center'>
                    <motion.h3
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className='text-2xl font-semibold'
                    >
                        Hi, it's Me <span className="secondary">Faysal Sarker</span>
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        className='text-5xl font-extrabold gradient'
                    >
                        Web Developer
                    </motion.h2>
                    <motion.h4
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className='text-2xl font-semibold'
                    >
                        <Typewriter
                            words={[
                                "Creating seamless web for the modern world!",
                                "Bringing ideas to life with code.",
                                "Let's build something amazing together!"
                            ]}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={20}
                            delaySpeed={1200}
                        />
                    </motion.h4>
                    <div className='my-4 flex gap-4 items-center'>
                        <a href={cv} download='cv' className='py-2 px-4 gradient-border text-primary font-semibold'>
                            Download CV
                        </a>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="glow"
                        >
                            <a href="https://www.linkedin.com/in/faysalsarker-dev/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='gradient text-4xl' icon={faLinkedin} />
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.7 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="glow"
                        >
                            <a href="https://www.facebook.com/faysal.sharker.140/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='gradient text-4xl' icon={faFacebook} />
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.9 }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="glow"
                        >
                            <a href="https://www.instagram.com/faysal_sarker_/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='gradient text-4xl' icon={faInstagram} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className='flex-1 flex justify-center hero-content-image'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className='hero-content-div'>
                   
                </div>
                <motion.img 
                    className='profile-img rounded-full w-2/3' 
                    src={profile} 
                    alt="Profile" 
                   
                />
            </motion.div>
        </div>
    );
};

export default Banner;
