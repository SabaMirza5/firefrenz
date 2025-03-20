import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

import Firefrenzhome from "./components/Firefrenzhome";

function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsAOSActive(false);
      } else {
        setIsAOSActive(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAOSActive) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
    } else {
      // Clean up AOS classes to prevent animation effects
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((el) => {
        el.removeAttribute("data-aos");
        el.classList.remove("aos-animate");
      });
    }
  }, [isAOSActive]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Firefrenzhome />} />
      </Routes>
    </>
  );
}

export default App;
