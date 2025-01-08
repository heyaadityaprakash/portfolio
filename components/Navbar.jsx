import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

function Navbar({darkMode,setDarkMode}) {
  const sideMenuRef = useRef(); // Reference for the sidebar
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        closeMenu(); // Close the menu if clicked outside
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener when the menu is closed or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="w-11/12 -z-10 fixed top-0 right-0 translate-y-[-80%] dark:hidden">
        <Image className="w-full" src={ assets.header_bg_color} alt="" />
      </div>

      <nav className="flex items-center justify-between z-50 w-full fixed px-5 lg:px-8 xl:px-[8%] py-4">
        
        <a href="#top">
          <Image
            src={darkMode?assets.logo_dark : assets.logo}
            alt="logo"
            className="w-28 scale-110 cursor-pointer mr-10"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="md:flex gap-6 lg:gap-10 justify-between rounded-full px-12 py-2 hidden bg-white shadow-sm bg-opacity-45 backdrop-blur-lg bg-gradient-to-r from-transparent via-white/50 to-transparent dark:bg-gradient-to-b dark:from-black/70 dark:to-black/90 dark:backdrop-blur-lg dark:bg-opacity-40 dark:text-gray-50">
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">My Projects</a></li>
          <li><a className="font-Ovo" href="#about">About me</a></li>
          <li><a className="font-Ovo" href="#contact">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-6">
          <button onClick={()=>setDarkMode(prev=>!prev)} className="px-2 py-2 rounded-full border-none bg-white backdrop-blur-lg bg-gradient-to-r from-transparent via-white/50 to-transparent dark:bg-gradient-to-b dark:from-black/70 dark:to-black/90 dark:backdrop-blur-lg dark:bg-opacity-40 dark:text-gray-50 ">
            <Image className="w-6" src={ darkMode?assets.sun_icon : assets.moon_icon} alt="Moon" />
          </button>

          <a className="font-Ovo hidden lg:flex items-center gap-4 px-8 py-1.5 border border-gray-500 rounded-full backdrop-blur-lg bg-gradient-to-r from-transparent via-white/40 to-transparent dark:bg-gradient-to-b dark:from-black/70 dark:to-black/90 dark:backdrop-blur-lg dark:bg-opacity-40 dark:text-gray-50 bg-white" href="#contact">
            Contact{" "}
            <Image className="w-4" src={ darkMode?assets.arrow_icon_dark: assets.arrow_icon} alt="contact-img" />
          </a>

          <button onClick={openMenu} className="block md:hidden">
            <Image className="w-6" src={darkMode?assets.menu_white :  assets.menu_black} alt="Menu" />
          </button>
        </div>


        {/* Sidebar (Mobile Menu) */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 z-40" />
        )}

        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-full flex justify-center items-center z-50">
            <ul ref={sideMenuRef} className="w-64 p-4  flex flex-col items-center bg-gray-300 bg-opacity-90 shadow-md rounded-xl space-y-4  backdrop-blur-lg bg-gradient-to-r from-transparent via-white/50 to-transparent dark:bg-gradient-to-b dark:from-black/70 dark:to-black/90 dark:backdrop-blur-lg dark:bg-opacity-40 dark:text-gray-50">
              <li><a onClick={closeMenu} className="font-Ovo" href="#top">Home</a></li>
              <li><a onClick={closeMenu} className="font-Ovo" href="#services">Services</a></li>
              <li><a onClick={closeMenu} className="font-Ovo" href="#work">My Projects</a></li>
              <li><a onClick={closeMenu} className="font-Ovo" href="#about">About me</a></li>
              <li><a onClick={closeMenu} className="font-Ovo" href="#contact">Contact me</a></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
