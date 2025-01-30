"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";
import { useEffect, useState } from "react";

export default function Home() {

  const[darkMode,setDarkMode]=useState(true)


  useEffect(()=>{
    if(localStorage.theme==='dark'|| (!('theme' in localStorage) && window.matchMedia ('(prefer-color-scheme:dark)').matches) ){
      setDarkMode(true)

    }else{
      setDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme='dark'
    }
    else{
      document.documentElement.classList.remove('dark')
      localStorage.theme=''
    }

  },[darkMode])
  return (
    <>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
    
    <Header darkMode={darkMode}/>
    <About darkMode={darkMode}/>
    <Services darkMode={darkMode}/>
    <Work darkMode={darkMode}/>
    <Contact darkMode={darkMode}/>
    <Footer darkMode={darkMode}/>
    </>
  );
}
