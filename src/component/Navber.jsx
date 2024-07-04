import { useState, useEffect } from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.drawer') && !event.target.closest('.drawer-btn')) {
            setDrawerOpen(false);
        }
    };

    useEffect(() => {
        if (drawerOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [drawerOpen]);

    return (
        <div className="container text-white backdrop-blur-md py-4  sticky top-0 z-50 bg-transparent">
            <div className="flex justify-between items-center blur-0 ">
                <div className='text-3xl font-extrabold text-white'>
                    Faysal<span className="text-primary"> Sarker</span>
                </div>
                <div className="hidden md:flex items-center gap-6 ">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : "text-white hover:text-primary"
                        }
                    >Home</NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : "text-white hover:text-primary"
                        }
                    >About Me</NavLink>
                    <NavLink
                        to='/projects'
                        className={({ isActive }) =>
                            isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : "text-white hover:text-primary"
                        }
                    >Projects</NavLink>
                    <NavLink
                        to='/blog'
                        className={({ isActive }) =>
                            isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : "text-white hover:text-primary"
                        }
                    >Blog</NavLink>
                </div>
                <button className="drawer-btn block md:hidden" onClick={toggleDrawer}>
                    <span className={`${drawerOpen ? 'rotate' : ''} drawer-icon transition duration-300`}>☰</span>
                </button>
            </div>
            <div
                className={`drawer fixed top-0 z-50 left-0 h-screen bg-white opacity-40 backdrop-blur-lg shadow-md transform border w-2/3 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="p-4">
                    <div className="flex flex-col gap-4  text-white">
                        <NavLink
                            to='/'
                            onClick={toggleDrawer}
                            className={({ isActive }) =>
                                isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : ""
                            }
                        >Home</NavLink>
                        <NavLink
                            to='/about'
                            onClick={toggleDrawer}
                            className={({ isActive }) =>
                                isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : ""
                            }
                        >About Me</NavLink>
                        <NavLink
                            to='/projects'
                            onClick={toggleDrawer}
                            className={({ isActive }) =>
                                isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : ""
                            }
                        >Projects</NavLink>
                        <NavLink
                            to='/blog'
                            onClick={toggleDrawer}
                            className={({ isActive }) =>
                                isActive ? "text-primary border-b-2 gradient-border-b transform transition-all duration-300 pb-1" : ""
                            }
                        >Blog</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
