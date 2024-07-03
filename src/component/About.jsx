const About = () => {
    return (
        <div className="flex flex-col gap-4 md:flex-row justify-center items-center  p-8 rounded-lg shadow-lg">
            <div className="">
                <img 
                    className="rounded-lg border-purple-300 shadow-md"
                    src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/437724625_1156279595805124_4055183988395131037_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG67Dx7mnmNInY-UzhpRWjZSFaSSRnkrW5IVpJJGeStbh3KwFEWCTyb0udySJddlfg4eRnoTk2JCm4crlUooBxC&_nc_ohc=ZfCvMGrjbpsQ7kNvgFFuTR3&_nc_ht=scontent.fdac138-1.fna&oh=00_AYCgHtyW9zjOwkORQcdIaOdmqSvHnYK76VKQnTsZOvYuVA&oe=668A925F" 
                    alt="Faysal Sarker" 
                />
            </div>
            <div className="max-w-xl">
                <h3 className="text-3xl font-bold mb-4 text-purple-500">About Me</h3>
                <p className="text-lg mb-6 text-gray-700">
                    Hey, I&apos;m Faysal Sarker, a passionate junior front-end and MERN stack developer with a deep love for coding and modern technology. As a student, I&apos;m continually expanding my knowledge and honing my skills in the ever-evolving tech landscape.
                </p>
                <h5 className="text-2xl font-semibold mb-3 text-purple-500">What I&apos;m Doing Right Now</h5>
                <p className="text-lg text-gray-700">
                    Currently, I&apos;m dedicated to mastering complex coding techniques and advancing my expertise in full-stack development. My focus is on creating dynamic user interfaces with React.js and building complex back-end solutions using Node.js, Express, and MongoDB.
                </p>
                <h5 className="text-2xl font-semibold mb-3 text-purple-500">
                My Goal
                </h5>
                <p className="text-lg text-gray-700">
               

My ultimate goal is to make modern technology accessible and easier for everyone to use. I believe in the power of technology to transform lives and strive to contribute to innovative solutions that make a difference.
                </p>
            </div>
        </div>
    );
};

export default About;
