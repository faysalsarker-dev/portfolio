import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import profile from './../img/profile.png';
import Linkedin from './../img/icons8-linkedin-48.png';
import fb from './../img/icons8-facebook-48.png';
import insta from './../img/icons8-instagram-48.png';

const Banner = () => {
    return (
        <div className="container flex md:flex-row flex-col-reverse justify-center items-center gap-4 relative mt-20">
       <motion.div
       className='hero-content flex-1'
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 1.0 }}
       >
                <motion.div 
                    className=' hero-content text-white flex flex-col justify-center'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.1 }}
                >
                    <h3 className='text-2xl font-semibold'>Hi, it&apos;s Me <span className="secondary">Faysal Sarker</span></h3>
                    <motion.h2
                       initial={{ opacity: 0, x: -50 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ duration: 1.2 }}
                    className='text-5xl font-extrabold gradient'>Web Developer</motion.h2>
                  
                    <h4 className='text-2xl font-semibold'>
                        <Typewriter
                            className='z-10'
                            words={["Let's create something awesome together!"]}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={90}
                            deleteSpeed={80}
                            delaySpeed={1000}
                        />
                    </h4>
       
                    <div className='my-4 flex gap-2 items-center'>
                        <a href={profile} download='cv' className='py-2 px-2 gradient-border   text-primary  font-semibold '>Download CV</a>
                        <motion.div 
                        
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1 }}
                        whileHover={{ scale: 2.1 }} whileTap={{ scale: 0.9 }}>
                            <img src={Linkedin} alt="" />
                        </motion.div>
                        <motion.div 
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 2.2 }}
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <img src={fb} alt="" />
                        </motion.div>
                        <motion.div 
                           initial={{ opacity: 0, y: 50 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 2.3 }}
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <img src={insta} alt="" />
                        </motion.div>
                    </div>
                </motion.div>
       </motion.div>
            <motion.div 
                className='flex-1 flex   justify-center'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
            >
                <img className='rounded-lg w-2/3 -mt-8' src={profile} alt="" />
            </motion.div>
        </div>
    );
};

export default Banner;
