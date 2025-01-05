import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error
import datetime

# Cargar datos desde la primera hoja
file_path = 'PlantsCosts.xlsx'
data = pd.read_excel(file_path, sheet_name=0)

# Imprimir diagnóstico inicial
print("Datos cargados, primeras filas:")
print(data.head())

# Convertir 'Temporada' en variables dummy
if data['Temporada'].dtype == 'object':
    data = pd.get_dummies(data, columns=['Temporada'], prefix='Temporada')

# Seleccionar características (Año, ID, Temporada) y variable objetivo (Precio)
features = data[['Año', 'ID'] + [col for col in data.columns if 'Temporada_' in col]]
target = data['Precio']

# Dividir los datos en conjuntos de entrenamiento y prueba
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.2, random_state=42)

# Normalizar las características
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Entrenar el modelo Random Forest
model_rf = RandomForestRegressor(n_estimators=100, random_state=42)
model_rf.fit(X_train_scaled, y_train)

# Realizar predicciones y calcular métricas de desempeño
y_pred = model_rf.predict(X_test_scaled)
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = mse ** 0.5

# Imprimir resultados de las métricas
print(f"MAE: {mae}")
print(f"MSE: {mse}")
print(f"RMSE: {rmse}")

# Crear datos futuros para predicción (2025)
year_to_predict = 2025
future_features = data[['ID'] + [col for col in data.columns if 'Temporada_' in col]].copy()
future_features['Año'] = year_to_predict

# Alinear columnas de future_features con las de features
future_features = future_features[features.columns]

# Escalar los datos futuros
future_features_scaled = scaler.transform(future_features)

# Predecir precios futuros
future_predictions = model_rf.predict(future_features_scaled)

# Crear un DataFrame con los resultados
future_data = data[['Nombre', 'ID']].copy()
future_data['Año'] = year_to_predict
future_data['Precio_Predicho'] = future_predictions

# Guardar resultados en un archivo Excel
output_file_path = 'Prediccion_Precios_2025.xlsx'
future_data.to_excel(output_file_path, index=False)

print(f"Predicciones guardadas en: {output_file_path}")
