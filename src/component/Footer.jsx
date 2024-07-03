import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                <div className="flex gap-6">
                    <a href="https://www.facebook.com/faysal.sharker.140" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/faysal_sarker_" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/faysalsarker-dev/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/faysalsarker-dev" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-purple-400">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <p className="mt-4">&copy; {currentYear} Faysal Sarker. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
