from flask import Flask, jsonify, request
from flask_cors import CORS
from Algorithm import run, plantas  # Asegúrate de importar también el diccionario plantas

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'GET'])
def optimize():
    try:
        # Imprimir los datos recibidos para debugging
        print("Datos recibidos:", request.json)
        
        # Verificar si hay datos en la petición
        if not request.json:
            return jsonify({"error": "No se recibieron datos en la petición"}), 400
        
        data = request.json
        selected_plants = data.get('selected_plants')
        budget = data.get('budget')
        
        # Validación detallada de los datos
        print("Plantas seleccionadas:", selected_plants)
        print("Presupuesto:", budget)
        
        if not selected_plants:
            return jsonify({"error": "No se seleccionaron plantas"}), 400
        
        if budget is None:
            return jsonify({"error": "No se especificó el presupuesto"}), 400
            
        try:
            budget = float(budget)
        except ValueError:
            return jsonify({"error": "El presupuesto debe ser un número válido"}), 400
            
        if budget <= 0:
            return jsonify({"error": "El presupuesto debe ser mayor que 0"}), 400
            
        # Verificar que todas las plantas seleccionadas existen en nuestro diccionario
        for planta in selected_plants:
            if planta not in plantas:
                return jsonify({"error": f"La planta '{planta}' no está en nuestra base de datos"}), 400

        # Ejecutar el algoritmo
        result = run(seleccionadas=selected_plants, maximo=budget)
        
        # Verificar el resultado
        if not result:
            return jsonify({"error": "El algoritmo no produjo resultados"}), 500
            
        # Construir la respuesta detallada
        plantas_info = {
            planta: {
                "cantidad": result["best_solution"][i],
                "costo_unitario": plantas[planta]["costo"],
                "beneficio_unitario": plantas[planta]["beneficio"],
                "costo_total": result["best_solution"][i] * plantas[planta]["costo"],
                "beneficio_total": result["best_solution"][i] * (plantas[planta]["beneficio"] - plantas[planta]["costo"])
            }
            for i, planta in enumerate(selected_plants)
        }

        response_data = {
            "best_solution": result["best_solution"],
            "total_cost": result["total_cost"],
            "total_revenue": result["total_revenue"],
            "total_profit": result["best_fitness"],
            "plantas_detail": plantas_info
        }
        
        print("Respuesta a enviar:", response_data)
        return jsonify(response_data), 200

    except Exception as e:
        import traceback
        error_detail = traceback.format_exc()
        print("Error detallado:", error_detail)
        return jsonify({
            "error": str(e),
            "error_detail": error_detail
        }), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)