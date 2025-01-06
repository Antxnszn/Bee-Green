import { Routes, Route, Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-t from-[#F2DFA2] via-[#F2DFA2] to-[#F2DFA2]">
      <div className="lg:px-44 lg:py-10 flex flex-col lg:flex-row gap-10 lg:gap-[10em]">
        {/* Contact Card for Itziar */}
        <div className="flex flex-col items-center">
          <img className="w-[150px] h-[150px] mb-4 rounded-full" src="itzi.jpg" alt="Itziar image" />
          <h5 className="mb-2 text-[2rem] font-bold text-[#1E1F21]">Itziar Segura</h5>
          <span className="text-md text-[#4B4D50]">AI Engineering Student</span>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://github.com/koriand-33"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/itziar-segura-68526b208/"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Mi perfil
            </a>
          </div>
        </div>

        {/* Contact Card for Antonio */}
        <div className="flex flex-col items-center">
          <img className="w-[150px] h-[150px] mb-4 rounded-full" src="roberto.webp" alt="Antonio image" />
          <h5 className="mb-2 text-[2rem] font-bold text-[#1E1F21]">Antonio Estrada</h5>
          <span className="text-md text-[#4B4D50]">AI Engineering Student</span>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://github.com/Antxnszn"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/antonioestrada02/"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-full text-sm font-semibold text-white transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              Mi perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
