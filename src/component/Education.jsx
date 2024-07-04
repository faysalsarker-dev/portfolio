import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLaptopCode, faSchool, faCertificate } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Education = () => {
    return (
        <div className="container mx-auto p-8">
            <h3 className="text-3xl font-bold text-center mb-8 gradient">
                <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h3>
            <div className="relative border-l border-gray-200">
                <div className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-200 rounded-full -left-3 ring-8 ring-white">
                        <FontAwesomeIcon icon={faCertificate} className="text-purple-600" />
                    </span>
      <div className='ml-5'>
                        <h4 className="flex items-center mb-1 text-lg font-semibold text-primary ">SSC</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2025</time>
                        <p className="text-base font-normal text-gray-500">
                            Currently, I am preparing for my Secondary School Certificate (SSC) exam in 2025, continuing my studies at <strong>Sreepur Rohmaniya Kamil Madrasa</strong>. I am dedicated to excelling in my studies and achieving excellent results.
                        </p>
      </div>
                </div>
                <div className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
                        <FontAwesomeIcon icon={faLaptopCode} className="text-blue-600" />
                    </span>
          <div className='ml-5'>
                        <h4 className="flex items-center mb-1 text-lg font-semibold text-primary ">Programming</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">May 8, 2023</time>
                        <p className="mb-4 text-base font-normal text-gray-500">
                            I'm a self-learner and I completed a 6-month web development course on the <strong>Programming Hero</strong> platform, enhancing my skills in modern web technologies. This course provided me with a solid foundation in front-end and back-end development, enabling me to build dynamic and responsive web applications.
                        </p>
          </div>
                </div>
                <div className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-8 ring-white">
                        <FontAwesomeIcon icon={faSchool} className="text-green-600" />
                    </span>
              <div className='ml-5'>
                        <h4 className="flex items-center mb-1 text-lg font-semibold text-primary ">JSC</h4>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">2022</time>
                        <p className="text-base font-normal text-gray-500">
                            I completed my Junior School Certificate (JSC) exam in 2022 at <strong>Sreepur Rohmaniya Kamil Madrasa</strong>, where I developed a strong academic foundation. This experience taught me the importance of hard work and dedication in achieving academic success.
                        </p>
              </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
