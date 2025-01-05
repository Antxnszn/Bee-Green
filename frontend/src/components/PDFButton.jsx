import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { obtenerPlantas } from '../../../backend/PlantsData'; // Importamos la función desde otro archivo


function PDFButton() {

const [plantas, setPlantas] = useState([]);

  const generarPDF = () => {
    const temporadaSeleccionada = 'invierno'; // Ejemplo de temporada
    const tipoCompra = 'mayoreo'; // Ejemplo de tipo de compra

    // Llamar a la función que filtra las plantas
    const plantasDisponibles = obtenerPlantas(temporadaSeleccionada, tipoCompra);

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Plantas disponibles para ' + temporadaSeleccionada, 10, 10);

    let yOffset = 20;
    plantasDisponibles.forEach(planta => {
      doc.text(`${planta.nombre}: $${planta.precio.toFixed(2)}`, 10, yOffset);
      yOffset += 10;  // Espacio entre cada planta
    });

    // Descargar el PDF generado
    doc.save('plantas_disponibles.pdf');
  };
  return (
    <div>
      <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900" onClick={generarPDF}>Generar PDF</button>
    </div>
  );
}
export default PDFButton;