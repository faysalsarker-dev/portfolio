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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0 }}
            >
                <div className='text-white space-y-1 flex flex-col justify-center'>
                    <motion.h3
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className='text-3xl font-semibold'
                    >
                        Hi, it&apos;s Me <span className="gradient">Faysal Sarker</span>
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.3 }}
                        className='text-5xl font-extrabold gradient'
                    >
                        Web Developer
                    </motion.h2>
                    <motion.h4
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.4 }}
                        className='md:text-3xl text-xl mb-4 font-semibold'
                    >
                        
                        <Typewriter
                        words={[
                            "Making innovative web experiences.",
                            "Transforming ideas into reality.",
                            "Building the future of the web."
                        ]}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    </motion.h4>


              
                </div>
                <div className='my-5'>
                        <div className=' flex gap-4 items-center'>
                            <a href={cv} download='Faysal sarker Cartificate' className='py-2 px-4 gradient-border text-primary font-semibold'>
                                Download CV
                            </a>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
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
                                initial={{ opacity: 0, y: 50 }}
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
                                initial={{ opacity: 0, y: 50 }}
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
                initial={{ opacity: 0, x: 50 }}
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
