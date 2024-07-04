import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
const Contact = () => {
    return (
<div className="relative">
            <div className="contact-content flex flex-col md:flex-row justify-center items-center gap-8 py-8 px-4 rounded-lg shadow-md bg-white bg-opacity-10 backdrop-blur-md">
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className=" text-purple-600  md:text-3xl text-2xl mr-2" />
                    <p className="text-lg md:text-base font-medium">faysalsarker.dev@gmail.com</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <FontAwesomeIcon icon={faPhone} className="text-purple-600 md:text-3xl text-2xl mr-2" />
                    <p className="text-lg md:text-base font-medium">01884570877</p>
                </div>
                <div className="flex items-center mt-4 md:mt-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600 md:text-3xl text-2xl mr-2" />
                    <p className="text-lg md:text-base font-medium">Dhaka, Gazipur/Sreepur</p>
                </div>
            </div>
</div>
    );
};

export default Contact;
