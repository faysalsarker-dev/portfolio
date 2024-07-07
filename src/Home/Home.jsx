// Home.js
import About from "../component/About";
import Banner from "../component/Banner";
import Education from "../component/Education";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Featuerd from "../component/Featuerd";

const Home = () => {
  return (
    <>
      <div id="home">
        <Banner />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="featured">
        <Featuerd />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
