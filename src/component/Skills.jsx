import React from 'react';
import HTMLIcon from '../img/icons8-html-48.png';
import CSSIcon from '../img/icons8-css-48.png';
import JSIcon from '../img/icons8-javascript-48.png';
import ReactIcon from '../img/icons8-react-native-48.png';
import FirebaseIcon from '../img/icons8-google-firebase-console-48.png';
import NodeIcon from '../img/icons8-node-js-48.png';
import ExpressIcon from '../img/icons8-express-js-48.png';
import MongoDBIcon from '../img/icons8-mongo-db-48.png';
import TailwindIcon from '../img/icons8-tailwind-css-48.png';
import BootstrapIcon from '../img/icons8-bootstrap-48.png';
import GitHubIcon from '../img/icons8-github-64.png';
import NPMIcon from '../img/icons8-npm-48.png';

const Skills = () => {
    const skills = [
        { name: 'HTML', image: HTMLIcon },
        { name: 'CSS', image: CSSIcon },
        { name: 'JavaScript', image: JSIcon },
        { name: 'React', image: ReactIcon },
        { name: 'Firebase', image: FirebaseIcon },
        { name: 'Node.js', image: NodeIcon },
        { name: 'Express.js', image: ExpressIcon },
        { name: 'MongoDB', image: MongoDBIcon },
        { name: 'Tailwind CSS', image: TailwindIcon },
        { name: 'Bootstrap', image: BootstrapIcon },
        { name: 'GitHub', image: GitHubIcon },
        { name: 'NPM', image: NPMIcon },
    ];

    return (
        <div className="container mx-auto my-20 skill-content relative">
            <h2 className="text-center text-3xl text-primary uppercase font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
                {skills.map((tech, idx) => (
                    <div
                        key={idx}
                        className="rounded-lg overflow-hidden   shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="skill  p-4">
                            <img src={tech.image} alt={tech.name} className="h-16 mx-auto mb-4" />
                            <p className="text-center">{tech.name}</p>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Skills;
