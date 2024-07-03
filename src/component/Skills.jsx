import '../App.css';
import HTML from '../img/icons8-html-48.png';
import CSS from '../img/icons8-css-48.png';
import JS from '../img/icons8-javascript-48.png';
import REACT from '../img/icons8-react-native-48.png';
import FIREBASE from '../img/icons8-google-firebase-console-48.png';
import NODE from '../img/icons8-node-js-48.png';
import EXPRESS from '../img/icons8-express-js-48.png';
import MONGODB from '../img/icons8-mongo-db-48.png';
import TAILWIND from '../img/icons8-tailwind-css-48.png';
import BOOTSTRAP from '../img/icons8-bootstrap-48.png';
import TOOLS from '../img/icons8-github-64.png';

const Skills = () => {

    const skills = [
        {
            name: "HTML",
            image: HTML,
            description: 'Markup language for creating web pages'
        },
        {
            name: "CSS",
            image: CSS,
            description: 'Stylesheet language for designing web pages'
        },
        {
            name: "JavaScript",
            image: JS,
            description: 'Programming language for web development'
        },
        {
            name: "React.js",
            image: REACT,
            description: 'JavaScript library for building user interfaces'
        },
        {
            name: "Tailwind",
            image: TAILWIND,
            description: 'Utility-first CSS framework for styling'
        },
        {
            name: "Bootstrap",
            image: BOOTSTRAP,
            description: 'CSS framework for responsive web design'
        },
        {
            name: "Firebase",
            image: FIREBASE,
            description: 'Platform for building web and mobile applications'
        },
        {
            name: "Node.js",
            image: NODE,
            description: 'JavaScript runtime for server-side programming'
        },
        {
            name: "Express",
            image: EXPRESS,
            description: 'Web framework for Node.js'
        },
        {
            name: "MongoDB",
            image: MONGODB,
            description: 'NoSQL database for modern applications'
        },
        {
            name: "Tools",
            image: TOOLS,
            description: 'Version control and collaboration using GitHub'
        }
    ];

    return (
        <div className="container mx-auto my-8 relative">
            <h2 className="text-center text-3xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 skill-content relative z-10">
                {skills.map((tech, idx) => (
                    <div className="border text-center bg-transparent rounded-lg p-4 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg" key={idx}>
                        {tech.image && <img src={tech.image} alt={tech.name} className="h-16 mx-auto mb-4" />}
                        <h3 className="text-xl font-semibold mb-2 text-primary">{tech.name}</h3>
                        <p className="text-gray-600">{tech.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
