import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill"
import Projects from "../components/Projects"
import Cirtifications from "../components/Cirtifications"
import Experience from "../components/Experience"
import Contact from "../components/Contact"
import Footer from "../components/Footer";




export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Skill/>
      <Projects/>
      <Cirtifications/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
}
