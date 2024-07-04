import  './../App.css'

const AboutMe = () => {
  return (
    <section className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto hero-content">
        <h2 className="text-3xl font-bold  mb-6">About Me</h2>
        <p className="text-lg  mb-4">
          Hey, I'm Faysal Sarker, a passionate junior front-end and MERN stack developer with a deep love for coding and modern technology. As a student, I'm continually expanding my knowledge and honing my skills in the ever-evolving tech landscape.
        </p>
        <p className="text-lg  mb-4">
          Currently, I am preparing for my Secondary School Certificate (SSC) exam in 2025, continuing my studies at Sreepur Rohmaniya Kamil Madrasa. I am dedicated to excelling in my studies and achieving excellent results.
        </p>
        <p className="text-lg  mb-4">
          I completed a 6-month web development course on the Programming Hero platform, enhancing my skills in modern web technologies. This course provided me with a solid foundation in front-end and back-end development, enabling me to build dynamic and responsive web applications.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold  mb-2">Skills</h3>
          <ul className="list-disc list-inside text-lg ">
            <li>Front-End Development: React.js</li>
            <li>Back-End Development: Node.js, Express.js</li>
            <li>Database Management: MongoDB</li>
          </ul>
        </div>
        <p className="text-lg  mb-4">
          My ultimate goal is to make modern technology accessible and easier for everyone to use. I believe in the power of technology to transform lives and strive to contribute to innovative solutions that make a difference.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold  mb-2">Contact Info</h3>
          <ul className="list-disc list-inside text-lg ">
            <li>Email: faysalsarker.dev@gmail.com</li>
            <li>Phone: 01884570877</li>
          </ul>
        </div>
        <p className="text-lg">
          Let's connect and create something awesome together!{' '}
          <span className="font-semibold">Front-End Developer || React Developer || MERN stack Developer || Educator || Programming Enthusiast</span>
        </p>
        <div className="mt-6">
          <a href="https://www.linkedin.com/in/faysalsarker-dev/" className="text-blue-600 font-semibold hover:underline mr-4">LinkedIn</a>
          <a href="https://web.facebook.com/faysal.sharker.140?_rdc=1&_rdr" className="text-blue-600 font-semibold hover:underline mr-4">Facebook</a>
          <a href="https://www.instagram.com/faysal_sarker_" className="text-blue-600 font-semibold hover:underline mr-4">Instagram</a>
          <a href="https://github.com/faysalsarker-dev" className="text-blue-600 font-semibold hover:underline">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
