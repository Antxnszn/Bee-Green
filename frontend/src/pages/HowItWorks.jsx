import { Routes, Route , Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-r from-green-100 via-yellow-100 to-orange-100">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-4xl font-extrabold text-[#1F1F1F] tracking-tight sm:text-5xl mb-6 text-center">
         Enjambre de abejas
        </h2>

        <p className="text-lg text-[#453C20] text-justify leading-relaxed font-medium">
        El algoritmo de enjambre de abejas es una técnica 
        de optimización que se inspira en el comportamiento 
        de las abejas al buscar fuentes de alimento. En nuestra 
        aplicación, las "abejas" son soluciones posibles, y las 
        "fuentes de alimento" son las plantas disponibles en el 
        inventario. El objetivo es seleccionar el conjunto de plantas 
        cuya combinación maximice el valor total dentro de las
         restricciones del presupuesto del cliente, sin excederlo.
          A través de la exploración de diversas combinaciones, 
          el algoritmo encuentra las mejores opciones de plantas
           que optimizan el valor entregado al cliente, ajustándose
            a sus necesidades y presupuesto.        </p>
      </div>
    </div>
  );
}
export default HowItWorks;
