import React from "react";
import img1 from "../assets/imgs/img1.png";
import img2 from "../assets/imgs/img2.png";
import img3 from "../assets/imgs/img3.png";
import img4 from "../assets/imgs/img4.png";
import img5 from "../assets/imgs/img5.png";
import img6 from "../assets/imgs/img6.png";
import firefrenz2 from "../assets/imgs/firefrenz2.png";
import { motion } from "framer-motion";


 const images = [firefrenz2, firefrenz2, firefrenz2, firefrenz2];

const CardLayout = () => {
  return (
    <div className="relative flex items-center justify-center lg:min-h-screen md:min-h-[80vh] min-h-[25vh] bg-black overflow-hidden" data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
    {images.map((src, index) => {
      const randomX = Math.random() * 200 - 100; // Random horizontal positioning
      const randomY = Math.random() * 200 - 100; // Random vertical positioning
      const randomRotate = Math.random() * 30 - 15; // Random rotation angle

      return (
        <motion.div
          key={index}
          className="absolute   rounded-xl shadow-lg overflow-hidden"
          initial={{ x: randomX, y: randomY, rotate: randomRotate, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
        >
          <img src={src} alt={`Card ${index + 1}`} className="w-full h-full object-cover" />
        </motion.div>
      );
    })}
  </div>
  );
};

export default CardLayout;
