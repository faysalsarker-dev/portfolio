/* eslint-disable react/prop-types */


const Example = ({ number, images, text, title }) => {
  const isEven = number % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-8 gap-8">
      <div className={`max-w-lg mx-4 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <div className={`relative border rounded-lg p-6 bg-transparent shadow-lg hover:shadow-2xl transition-shadow duration-300 ${isEven ? 'md:left-28' : 'md:right-28'}`}>
          <div className={`${isEven ? 'md:text-start text-start' : 'md:text-end text-start'}`}>
            <h3 className="text-2xl font-bold mb-2 text-purple-300">Featured Project</h3>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-4 rounded-lg shadow-inner">
              <p className="text-black text-start">{text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`max-w-lg mx-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <img className="w-full" src={images} alt="Project" />
        </div>
      </div>
    </div>
  );
};

export default Example;
