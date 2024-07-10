import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Toaster, toast } from 'react-hot-toast';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9908vav',
      'template_xdj1ylx',
      formData,
      'rB0X5Rl-ljhGJ9eOV'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success('Thank you! Your email has been sent successfully. I will get back to you soon.');
    }).catch((err) => {
      console.error('FAILED...', err);
      toast.error('Sorry, there was an issue sending your email. Please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
   <div className='relative'>
      <div className="container p-4 contact-content">
      
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2 p-8 shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-blur-md">
            <h4 className="text-lg font-semibold mb-4">Let&apos;s connect and create something awesome together!</h4>
            <p className="mb-6 text-sm text-gray-200">
              Whether you have a question, want to start a project, or just want to say hi, feel free to drop me a message. I'll try my best to get back to you as soon as possible!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-purple-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-4 py-2 border border-purple-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-8 shadow-lg space-y-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-md">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-purple-600 text-2xl mr-4" />
              <p className="text-lg font-medium text-white">faysalsarker.dev@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-purple-600 text-2xl mr-4" />
              <p className="text-lg font-medium text-white">01884570877</p>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600 text-2xl mr-4" />
              <p className="text-lg font-medium text-white">Dhaka, Gazipur/Sreepur</p>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Contact;
