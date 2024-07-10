// Navbar.js
import { useState, useEffect } from "react";
import "../App.css";
import ScrollNavLink from "./ScrollNavLink";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const nav = (
    <>
      <ScrollNavLink to="home">Home</ScrollNavLink>
      <ScrollNavLink to="skills">Skills</ScrollNavLink>
      <ScrollNavLink to="about">About Me</ScrollNavLink>
      <ScrollNavLink to="featured">Featured</ScrollNavLink>
      <ScrollNavLink to="education">Education</ScrollNavLink>
      <ScrollNavLink to="contact">Contact</ScrollNavLink>
    </>
  );

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".drawer") &&
      !event.target.closest(".drawer-btn")
    ) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    if (drawerOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [drawerOpen]);

  return (
    <div className="container text-white backdrop-blur-md py-4 sticky top-0 z-50 bg-transparent">
      <div className="flex justify-between items-center blur-0 ">
        <div className="text-3xl font-extrabold text-white">
          Faysal<span className="text-primary"> Sarker</span>
        </div>
        <div className="hidden md:flex items-center gap-6 ">{nav}</div>
        <button className="drawer-btn block md:hidden" onClick={toggleDrawer}>
          <span className={`drawer-icon transition duration-300`}>☰</span>
        </button>
      </div>
      <div
        className={`drawer fixed top-0 z-50 -left-5 h-screen drower  opacity-80 backdrop-blur-lg shadow-md transform border w-2/3 ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <div className="flex flex-col gap-4 text-white">
            <ScrollNavLink to="home" onClick={toggleDrawer}>
              Home
            </ScrollNavLink>
            <ScrollNavLink to="about" onClick={toggleDrawer}>
              About Me
            </ScrollNavLink>
            <ScrollNavLink to="skills" onClick={toggleDrawer}>
              Skills
            </ScrollNavLink>
            <ScrollNavLink to="featured" onClick={toggleDrawer}>
              Featured
            </ScrollNavLink>
            <ScrollNavLink to="education" onClick={toggleDrawer}>
              Education
            </ScrollNavLink>
            <ScrollNavLink to="contact" onClick={toggleDrawer}>
              Contact
            </ScrollNavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
