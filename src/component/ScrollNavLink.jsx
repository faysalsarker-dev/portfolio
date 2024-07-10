/* eslint-disable react/prop-types */
// ScrollNavLink.js

import { Link } from 'react-scroll';


const ScrollNavLink = ({ to, children, ...props }) => {


    return (
     
            <Link
            className='cursor-pointer'
            activeClass="text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" 
                to={to}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                {...props}
            >
                {children}
            </Link>
      
    );
};

export default ScrollNavLink;
