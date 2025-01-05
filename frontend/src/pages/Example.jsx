import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/styles-app.css";

function PlantsApp() {
  const [formData, setFormData] = useState({
    seasons: [],
    purchaseType: "",
    plantTypes: [],
    budget: "",
  });

  const [dataToSend, setDataToSend] = useState(null); // Almacenar los datos JSON
  const [optimizationResult, setOptimizationResult] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "seasons" || name === "plantTypes") {
      setFormData((prevData) => {
        const updatedArray = checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value);
        return { ...prevData, [name]: updatedArray };
      });
    } else {
      setFormData({ ...formData, [name]: type === "number" ? +value : value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    alert("handleSubmit ejecutado"); // ALERT para verificar que funciona.
    console.log("handleSubmit ejecutado"); // Mensaje en consola.
    
    const preparedData = {
      selected_plants: formData.plantTypes,
      budget: formData.budget,
    };
  
    setDataToSend(preparedData); // Intentamos actualizar el estado
  
    console.log("Datos preparados para enviar:", preparedData); // Revisamos en consola
  };
  useEffect(() => {
    console.log("Estado actualizado: dataToSend:", dataToSend);
  }, [dataToSend]);
  
  
  return (
    <div className="plants-app">
      <h1>Optimización de Selección de Plantas</h1>

      <form onSubmit={handleSubmit}>
        {/* Selección de estaciones */}
        <div className="form-section">
          <h2>Selecciona las estaciones del año</h2>
          {["Primavera", "Verano", "Otoño", "Invierno"].map((season) => (
            <label key={season}>
              <input
                type="checkbox"
                name="seasons"
                value={season}
                checked={formData.seasons.includes(season)}
                onChange={handleInputChange}
              />
              {season}
            </label>
          ))}
        </div>

        {/* Tipo de compra */}
        <div className="form-section">
          <h2>Tipo de compra</h2>
          {["Menudeo", "Consumo Normal"].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="purchaseType"
                value={type}
                checked={formData.purchaseType === type}
                onChange={handleInputChange}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Tipos de plantas */}
        <div className="form-section">
          <h2>Tipos de plantas</h2>
          {["Rosas", "Tulipanes", "Orquídeas", "Girasoles"].map((plant) => (
            <label key={plant}>
              <input
                type="checkbox"
                name="plantTypes"
                value={plant}
                checked={formData.plantTypes.includes(plant)}
                onChange={handleInputChange}
              />
              {plant}
            </label>
          ))}
        </div>

        {/* Presupuesto */}
        <div className="form-section">
          <h2>Presupuesto</h2>
          <label>
            Ingresa tu presupuesto:
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        {/* Botón de envío */}
        <button type="submit">Optimizar</button>
      </form>

      {/* Mostrar los datos que se enviarán */}
      {dataToSend && (
        <div className="data-preview">
          <h2>Datos que se enviarán (JSON):</h2>
          <pre>{JSON.stringify(dataToSend, null, 2)}</pre>
        </div>
      )}

      {/* Mostrar el mensaje de estado */}
      {statusMessage && <p className="status-message">{statusMessage}</p>}

      {/* Mostrar los resultados */}
      {optimizationResult && (
        <div className="results">
          <h2>Resultado de la optimización</h2>
          <pre>{JSON.stringify(optimizationResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PlantsApp;
