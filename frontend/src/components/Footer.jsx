import { useState } from "react";
import { Link } from "react-router-dom";
import BeeIcon from "../icons/BeeIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <footer className="bg-[#D5B444]">
      <div className="w-full max-w-screen-xl p-4 py-6 lg:py-8">
       <div className="grid grid-rows-3 gap-5 items-center justify-center">
       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse justify-center">
          <BeeIcon />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#453B1E]">Bee-Green</span>

        </Link>
        
       <div className="flex flex-row gap-10">
       <ul className="flex flex-row gap-5">
            <li className="text-[#453B1E] font-semibold">Navegación</li>
            <li><Link to="/PlantsApp" className="text-[#453B1E] hover:text-[#ECD99C]">Home</Link></li>
            <li><Link to="/AboutUs" className="text-[#453B1E] hover:text-[#ECD99C]">Nosotros</Link></li>
            <li><Link to="/Funcionamiento" className="text-[#453B1E] hover:text-[#ECD99C]">¿Cómo funciona?</Link></li>

            <li><Link to="/ContactUs" className="text-[#453B1E] hover:text-[#ECD99C]">Contáctanos</Link></li>
       </ul>
       </div>

        <div className="grid grid-cols-1 gap-3">
        <div className="flex justify-center">
            <a 
              href="https://github.com/Antxnszn/PlantsProjects" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-[#453B1E] hover:text-[#ECD99C] justify-center"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              <span className="font-semibold ">GitHub</span>
            </a>
          </div>
        </div>

      
        
        </div>
        <p className="text-center text-sm text-[#636363] border-t border-[#453C20] mt-4 pt-2 sm:mt-6 sm:text-base">
        © 2024 All rights reserved.
        </p>
      </div>
    </footer>
  ); 
}

export default Footer;