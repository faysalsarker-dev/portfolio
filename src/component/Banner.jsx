import { Typewriter } from 'react-simple-typewriter';
import '../App.css';
import profile from './../img/profile.png'
import Linkedin from './../img/icons8-linkedin-48.png'
import fb from './../img/icons8-facebook-48.png'
import insta from './../img/icons8-instagram-48.png'


const Banner = () => {
    return (
        <div className="container flex md:flex-row flex-col justify-center items-center gap-4 relative mt-20">
            <div className='flex-1 hero-content text-white'>
                <h3 className='text-2xl font-semibold'>Hi, it&apos;s Me <span className="secondary">Faysal Sarker</span></h3>
                <h2 className='text-5xl font-extrabold gradient-color'>Web Developer</h2>
              
       <h4 className='text-2xl font-semibold'>
                    <Typewriter
                        className='z-10'
                        words={["Let's create something awesome together!"]}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
       </h4>
   

       <div className='my-4 flex gap-2 items-center'><a href={profile} download='cv' className='py-2 px-2 bg-white my-6 text-black rounded-lg font-semibold'>Download CV</a>
       
       <div><img src={Linkedin} alt="" /></div>
       <div><img src={fb} alt="" /></div>
       <div><img src={insta} alt="" /></div>
       </div>
            </div>
            <div className='flex-1 flex justify-center'>
                <img className='rounded-lg w-2/3' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Banner;
