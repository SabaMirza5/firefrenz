import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutfire from "../assets/imgs/aboutfire.gif";

import firefrenzvideo from "../assets/imgs/firefrenzvideo.mp4";
import logo from "../assets/imgs/logo.png";
import logo2 from "../assets/imgs/logo2.png";
import { FaPlay, FaPause } from "react-icons/fa"; // Import play & pause icons
import CardLayout from "./CardGrid";

function Firefrenzhome() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-black">
      {/* <div className="relative w-full flex justify-center items-center">
       
        <div className="absolute md:top-6 top-3 left-0 w-full flex justify-between items-center lg:px-[100px] px-2  z-10">
          <div>
            <img src={logo} alt="Logo 1" className="md:w-[100%] w-8" />
          </div>
          <div>
            <img src={logo2} alt="Logo 2" className="md:w-[100%] w-8" />
          </div>
        </div>

        <video
          ref={videoRef}
          width="100%"
          height="500"
          className="rounded-lg"
          loop
        >
          <source src={firefrenzvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        
        <button
          onClick={togglePlay}
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-black bg-opacity-70 hover:bg-opacity-90 text-white text-3xl transition-all duration-300"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div> */}
      <div className="relative w-full flex justify-center items-center md:h-[700px] h-60 opacity-75">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={firefrenzvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content Overlay */}
        <div className="absolute md:top-6 top-3 left-0 w-full flex justify-between items-center lg:px-[100px] px-2 z-10">
          <div>
            <img src={logo} alt="Logo 1" className="md:w-[100%] w-8" />
          </div>
          <div>
            <img src={logo2} alt="Logo 2" className="md:w-[100%] w-8" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className=" lg:py-28 flex justify-between lg:flex-row flex-col-reverse gap-10">
        <div className="lg:w-1/2 w-full lg:pl-20 pl-0">
          <img
            src={aboutfire}
            alt=""
            className="w-full"
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div className=" lg:w-1/2 w-full katibeh  lg:text-start text-center lg:pr-20 p-6 ">
          <h2
            className="text-[#ffb560] gothic font-semibold md:text-[86px] text-4xl leading-[100%] lg:-mt-10 -mt-0"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            About Us
          </h2>
          <p
            className="text-gradient2 gothic lg:pt-10 pt-5 font-semibold md:text-[30px] text-base md:leading-9 leading-5"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            FireFrenz, A High-Intensity, Iconic And Stunning Art Inspired By
            Anime Style With A Mix Of Cyberpunk & Futuristic Aesthetics. With A
            Engaging & Vibrant Community <br />
            <br />
            FireFrenz Goes Back To The Roots. It's The Resurgence Of Digital Art
            In Web3, No Roadmap, No False Promises, Just Clean Artwork.
            FireFrenz Is Here To Push The Boundaries Of Design And Storytelling
            In The NFT Space.
          </p>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="lg:px-20 lg:pb-28 p-6 flex justify-center items-center text-center ">
        <div className="  katibeh  ">
          <h2
            className="  gothic text-[#ffb560] font-normal md:text-[86px] text-4xl leading-[100%]"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            FireFrenz
          </h2>
          <p
            className=" gothic text-gradient2 lg:pt-10 pt-5 font-normal md:text-[40px] text-base md:leading-10 leading-5"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            FireFrenz, A What Makes FireFrenz More Special? It's The Masterful
            Art by Masheriyanto : A <br className="md:block hidden" /> legendary
            Digital Artist known For His Anime Style Artwork, Creating bold &{" "}
            <br className="md:block hidden" /> Contrast, High-Energy Art That
            Capture The Essence Of FireFrenz.
          </p>
        </div>
      </section>

      {/* <div className="">
        <img src={firefrenz2} alt=""  className="w-full"/>
    </div> */}
      <CardLayout />
    </div>
  );
}

export default Firefrenzhome;
