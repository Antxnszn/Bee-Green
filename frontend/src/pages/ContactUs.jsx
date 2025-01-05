import { Routes, Route, Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#FFF6B7]">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 p-6">
        {/* Contact Card for Itziar */}
        <div className="flex flex-col items-center mb-12">
          <img className="w-28 h-28 mb-4 rounded-full shadow-xl" src="itzi.jpg" alt="Itziar image" />
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Itziar Segura</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">AI Engineering Student</span>
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
          <img className="w-28 h-28 mb-4 rounded-full shadow-xl" src="roberto.webp" alt="Antonio image" />
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Antonio Estrada</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">AI Engineering Student</span>
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
