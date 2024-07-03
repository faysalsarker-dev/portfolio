import About from "../component/About";
import Banner from "../component/Banner";
import Example from "../component/Example";
import Skills from "../component/Skills";
import img from '../img/project1.png'
import img2 from '../img/project2.png'
import img3 from '../img/project3.png'

const Home = () => {
    return (
        <>
           <Banner/> 
           <Skills/>
           <About/>
           <Example number={2} images={img} text={'Pattee is a full-stack project utilizing React, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and Stripe. Our platform aims to connect potential pet adopters with pets in need, facilitate donations for pet welfare, and manage pet-related campaigns seamlessly.'} title={'Pattee'}/>
           <Example number={3} images={img2} text={'The client-side of Foodient is built using modern web technologies including HTML, CSS, JavaScript, and React.js for the frontend framework.'} title={'Foodeint'}/>
          
           <Example number={4} images={img3} text={'Pattee is a full-stack project utilizing React, Node.js, Express, MongoDB, Firebase, Tailwind CSS, and Stripe. Our platform aims to connect potential pet adopters with pets in need, facilitate donations for pet welfare, and manage pet-related campaigns seamlessly.'} title={'Pattee'}/>
          
           
        </>
    );
};

export default Home;