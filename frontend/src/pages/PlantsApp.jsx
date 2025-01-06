import React, { useState } from "react";
import { Leaf, Sun, Wind, Snowflake, ShoppingCart, Store } from "lucide-react";
import axios from "axios";



const PlantsApp = () => {

  
  const [formData, setFormData] = useState({
    seasons: [],
    purchaseType: "",
    plantTypes: [],
    budget: "",
  });
  const plantas = {
    "Rosas": {costo: 102.21},
    "Tulipanes": {costo: 164.67},
    "Orquídeas": {costo: 210.39},
    "Girasoles": {costo: 150.24},
    "Clavel": {costo: 233.30},
    "Margaritas": {costo: 133.73},
    "Lirios": {costo: 134.99},
    "Hortensias": {costo: 196.83},
    "Dalias": {costo: 84.57},
    "Gardenias": {costo: 173.04},
    "Camelias": {costo: 103.13},
    "Jazmín": {costo: 135.74},
    "Amapolas": {costo: 194.79},
    "Violetas": {costo: 226.71},
    "Azaleas": {costo: 148.64},
    "Geranios": {costo: 200.86},
    "Cactus": {costo: 125.20},
    "Suculentas": {costo: 180.26},
    "Bonsáis": {costo: 178.84},
    "Begonias": {costo: 78.43},
    "Lavandas": {costo: 69.18},
    "Helechos": {costo: 154.78},
    "Crisantemos": {costo: 203.26},
    "Petunias": {costo: 192.72},
    "Buganvillas": {costo: 138.49},
    "Lirios del Valle": {costo: 204.78},
    "Ciclamen": {costo: 81.56},
    "Aloe Vera": {costo: 78.19},
    "Romero": {costo: 208.88},
    "Albahaca": {costo: 230.35},
    "Menta": {costo: 113.55},
    "Eucalipto": {costo: 204.52},
    "Ficus": {costo: 114.90},
    "Croto": {costo: 161.11},
    "Bromelia": {costo: 211.15},
    "Dracaena": {costo: 237.18},
    "Palma Areca": {costo: 205.66},
    "Espatifilo": {costo: 179.23},
    "Cuna de Moisés": {costo: 183.40},
    "Impatiens": {costo: 225.93},
    "Lantanas": {costo: 197.52},
    "Malvón": {costo: 225.28},
    "Fucsia": {costo: 201.18},
    "Calanchoe": {costo: 169.32},
    "Diefembaquia": {costo: 144.03},
    "Zamioculca": {costo: 185.75},
    "Filodendro": {costo: 122.53},
    "Sansevieria": {costo: 149.66},
    "Pothos": {costo: 118.00},
    "Aglaonema": {costo: 124.97},
    "Calatea": {costo: 75.00},
    "Maranta": {costo: 102.21},
    "Belen": {costo: 164.47}
  };

  const [optimizationResult, setOptimizationResult] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const seasonIcons = {
    Primavera: <Leaf className="w-5 h-5" />,
    Verano: <Sun className="w-5 h-5" />,
    Otoño: <Wind className="w-5 h-5" />,
    Invierno: <Snowflake className="w-5 h-5" />,
  };

  const purchaseTypeIcons = {
    Menudeo: <ShoppingCart className="w-5 h-5" />,
    Mayoreo: <Store className="w-5 h-5" />,
  };

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
    try {
      const response = await axios.post(
        "https://bee-green.onrender.com",
        {
          selected_plants: formData.plantTypes,
          budget: formData.budget,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setOptimizationResult(response.data);
    } catch (error) {
      console.error("Error enviando datos:", error);
      setStatusMessage("Error al enviar la solicitud.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ECD99C] via-[#E6E0CE] to-[#E5E4E1] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#453B1E] drop-shadow-sm">
          Optimización de Selección de Plantas
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Form Card */}
          <div className="bg-[#f3f3f455] rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm backdrop-filter">
            <div className="p-6 border-b border-[#b8b9bb81]">
              <h2 className="text-xl font-semibold text-gray-800">Formulario de Selección</h2>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Seasons Section */}
                <div className="space-y-3">
                  <h3 className="font-medium text-[#1E1F21]">Estaciones del año</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(seasonIcons).map(([season, icon]) => (
                      <label
                        key={season}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                          ${
                            formData.seasons.includes(season)
                              ? "bg-[#F7F7F7] border-[#71747e44] shadow-violet-100"
                              : "hover:bg-[#DEDEDF] border-[#09141F18]"
                          }`}
                      >
                        {icon}
                        <input
                          type="radio"
                          name="seasons"
                          value={season}
                          checked={formData.seasons.includes(season)}
                          onChange={handleInputChange}
                          className="sr-only"
                          required
                        />
                        <span>{season}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Purchase Type Section */}
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Tipo de compra</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(purchaseTypeIcons).map(([type, icon]) => (
                      <label
                        key={type}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                          ${
                            formData.purchaseType === type
                              ? "bg-[#F7F7F7] border-[#71747e44] shadow-violet-100"
                              : "hover:bg-[#DEDEDF] border-[#09141F18]"
                          }`}
                      >
                        {icon}
                        <input
                          type="radio"
                          name="purchaseType"
                          value={type}
                          checked={formData.purchaseType === type}
                          onChange={handleInputChange}
                          className="sr-only"
                          required
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Plant Types Section */}
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Plantas</h3>
                  <div className="grid grid-cols-2 gap-3">
                     {Object.keys(plantas).map((plant) => (
                      <label
                        key={plant}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:shadow-md
                          ${
                            formData.plantTypes.includes(plant)
                              ? "bg-[#F7F7F7] border-[#71747e44] shadow-violet-100"
                              : "hover:bg-[#DEDEDF] border-[#09141F18]"
                          }`}
                      >
                        <input
                          type="checkbox"
                          name="plantTypes"
                          value={plant}
                          checked={formData.plantTypes.includes(plant)}
                          onChange={handleInputChange}
                          className="w-4 h-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                        />
                        <span>{plant}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Section */}
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Presupuesto</h3>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-8 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-shadow duration-200"
                      placeholder="Ingresa tu presupuesto"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DCBB4C] text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:bg-[#B69300] focus:ring-2 focus:ring-offset-2 focus:ring-[#8D6D00]"
                >
                  Optimizar Selección
                </button>
              </form>
            </div>
          </div>

         {/* Results Card */}
      <div className="bg-[#f3f3f455] rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm backdrop-filter">
        <div className="p-6 border-b border-[#b8b9bb81]">
          <h2 className="text-xl font-semibold text-gray-800">Resultados de Optimización</h2>
        </div>
        <div className="p-6">
          {statusMessage && (
            <div className="p-4 mb-4 text-red-700 bg-red-50 rounded-xl border border-red-200">
              {statusMessage}
            </div>
          )}

          {optimizationResult && (
            <div className="space-y-6">
              {/* Detalles por planta */}
              <div className="space-y-4">
                <h3 className="font-medium text-gray-700">Detalles por planta:</h3>
                {Object.entries(optimizationResult.plantas_detail).map(([planta, info]) => (
                  <div
                    key={planta}
                    className="bg-white rounded-xl p-4 shadow-sm space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-800">{planta}</span>
                      <span className="text-sm text-gray-500">
                        Cantidad: {info.cantidad}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-gray-50 p-2 rounded">
                        <div>Costo unitario: ${info.costo_unitario}</div>
                        <div>Costo total: ${info.costo_total}</div>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <div>Beneficio unitario: ${info.beneficio_unitario - info.costo_unitario}</div>
                        <div>Beneficio total: ${info.beneficio_total}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resumen financiero */}
              <div className="space-y-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-4">
                <h3 className="font-medium text-gray-700">Resumen financiero:</h3>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="text-gray-600">Inversión total:</span>
                    <span className="font-medium text-gray-800">
                      ${optimizationResult.total_cost}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="text-gray-600">Ingresos esperados:</span>
                    <span className="font-medium text-green-600">
                      ${optimizationResult.total_revenue}
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-green-100 p-3 rounded-lg">
                    <span className="text-gray-700 font-medium">Ganancia total:</span>
                    <span className="font-bold text-green-700">
                      ${optimizationResult.total_profit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!optimizationResult && !statusMessage && (
            <div className="text-center text-gray-500 py-8">
              Complete el formulario y presione "Optimizar" para ver los resultados
            </div>
          )}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsApp;
