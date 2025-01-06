import random
import math

# Configuración inicial
Iteraciones = 10  # Aumentado para mejor exploración
limite_intentos = 5
workers = 15  # Aumentado para mejor cobertura del espacio de búsqueda
observers = 25  # Aumentado para mejor exploración

# Los límites ahora se calcularán dinámicamente según el presupuesto
lim_inf = 0

# Costos y beneficios de las plantas predefinidos
plantas = {
    "Rosas": {"beneficio": 102.21, "costo": 73.01},
    "Tulipanes": {"beneficio": 164.46, "costo": 117.47},
    "Orquídeas": {"beneficio": 210.13, "costo": 150.09},
    "Girasoles": {"beneficio": 150.42, "costo": 107.44},
    "Clavel": {"beneficio": 233.30, "costo": 166.64},
    "Margaritas": {"beneficio": 133.73, "costo": 95.52},
    "Lirios": {"beneficio": 134.99, "costo": 96.42},
    "Hortensias": {"beneficio": 196.88, "costo": 140.63},
    "Dalias": {"beneficio": 84.57, "costo": 60.41},
    "Gardenias": {"beneficio": 173.04, "costo": 123.6},
    "Camelias": {"beneficio": 103.13, "costo": 73.66},
    "Jazmín": {"beneficio": 135.74, "costo": 96.96},
    "Amapolas": {"beneficio": 194.73, "costo": 139.09},
    "Violetas": {"beneficio": 226.67, "costo": 161.91},
    "Azaleas": {"beneficio": 148.46, "costo": 106.04},
    "Geranios": {"beneficio": 200.98, "costo": 143.56},
    "Cactus": {"beneficio": 125.20, "costo": 89.43},
    "Suculentas": {"beneficio": 180.82, "costo": 129.16},
    "Bonsáis": {"beneficio": 178.83, "costo": 127.74},
    "Begonias": {"beneficio": 78.43, "costo": 56.02},
    "Lavandas": {"beneficio": 69.18, "costo": 49.41},
    "Helechos": {"beneficio": 154.67, "costo": 110.48},
    "Crisantemos": {"beneficio": 203.22, "costo": 145.16},
    "Petunias": {"beneficio": 192.72, "costo": 137.66},
    "Buganvillas": {"beneficio": 138.49, "costo": 98.92},
    "Lirios del Valle": {"beneficio": 204.37, "costo": 145.98},
    "Ciclamen": {"beneficio": 81.56, "costo": 58.26},
    "Aloe Vera": {"beneficio": 78.19, "costo": 55.85},
    "Romero": {"beneficio": 208.85, "costo": 149.18},
    "Albahaca": {"beneficio": 230.37, "costo": 164.55},
    "Menta": {"beneficio": 113.55, "costo": 81.11},
    "Eucalipto": {"beneficio": 204.85, "costo": 146.32},
    "Ficus": {"beneficio": 114.90, "costo": 82.16},
    "Croto": {"beneficio": 161.11, "costo": 115.08},
    "Bromelia": {"beneficio": 211.61, "costo": 151.15},
    "Dracaena": {"beneficio": 237.41, "costo": 169.58},
    "Palma Areca": {"beneficio": 205.66, "costo": 146.9},
    "Espatifilo": {"beneficio": 179.52, "costo": 128.23},
    "Cuna de Moisés": {"beneficio": 183.40, "costo": 131},
    "Impatiens": {"beneficio": 225.99, "costo": 161.43},
    "Lantanas": {"beneficio": 197.57, "costo": 141.12},
    "Malvón": {"beneficio": 225.23, "costo": 160.88},
    "Fucsia": {"beneficio": 201.18, "costo": 143.7},
    "Calanchoe": {"beneficio": 169.43, "costo": 121.02},
    "Diefembaquia": {"beneficio": 144.80, "costo": 103.43},
    "Zamioculca": {"beneficio": 185.71, "costo": 132.65},
    "Filodendro": {"beneficio": 122.53, "costo": 87.52},
    "Sansevieria": {"beneficio": 149.96, "costo": 107.16},
    "Pothos": {"beneficio": 118.00, "costo": 84.27},
    "Aglaonema": {"beneficio": 124.97, "costo": 89.31},
    "Calatea": {"beneficio": 75.00, "costo": 53.56},
    "Maranta": {"beneficio": 102.21, "costo": 73.01},
    "Belen": {"beneficio": 164.46, "costo": 117.47}
}

# Variables globales
poblacion = []
aptitudes = []
lim_intentos = []

def calcular_limite_superior(presupuesto, costo_minimo):
    """Calcula un límite superior razonable basado en el presupuesto"""
    return math.ceil(presupuesto / costo_minimo)

def aplicar_limites_especificos(individuo, restricciones):
    for i, limite in restricciones.items():
        if individuo[i] < limite["min"]:
            individuo[i] = limite["min"]
        elif individuo[i] > limite["max"]:
            individuo[i] = limite["max"]

def generar_posicion_inicial(lim_inf, lim_sup, n, restricciones, costos, maximo):
    """Genera una posición inicial más inteligente basada en el presupuesto"""
    individuo = []
    presupuesto_restante = maximo
    
    for i in range(n):
        max_posible = min(lim_sup, math.floor(presupuesto_restante / costos[i]))
        cantidad = random.randint(lim_inf, max_posible)
        individuo.append(cantidad)
        presupuesto_restante -= cantidad * costos[i]
    
    return individuo

def calcular_aptitud(individuo, costos, beneficios, maximo):
    # Calcular el costo total de compra
    total_costo = sum(individuo[i] * costos[i] for i in range(len(individuo)))
    
    # Si el costo total excede el presupuesto, penalizamos fuertemente
    if total_costo > maximo:
        return -1000 * (total_costo - maximo)  # Penalización proporcional al exceso
    
    # Calcular la ganancia total (beneficio - costo por cada planta)
    ganancia_total = sum(individuo[i] * (beneficios[i] - costos[i]) for i in range(len(individuo)))
    
    # Premiamos el uso eficiente del presupuesto
    uso_presupuesto = total_costo / maximo  # Porcentaje del presupuesto utilizado
    bonus_presupuesto = ganancia_total * uso_presupuesto  # Bonus proporcional a la ganancia
    
    return ganancia_total + bonus_presupuesto

def generar_vecino(individuo, lim_inf, lim_sup, restricciones, costos, maximo):
    """Genera un vecino que respeta el presupuesto"""
    nuevo = individuo[:]
    
    # Calculamos el costo actual
    costo_actual = sum(nuevo[i] * costos[i] for i in range(len(nuevo)))
    
    # Modificamos algunas cantidades
    for i in range(len(individuo)):
        if random.random() < 0.7:
            presupuesto_disponible = maximo - costo_actual + (nuevo[i] * costos[i])
            max_posible = min(lim_sup, math.floor(presupuesto_disponible / costos[i]))
            
            # Permitimos cambios más grandes cuando hay presupuesto disponible
            if max_posible > nuevo[i]:
                cambio = random.randint(-2, 5)  # Sesgo hacia aumentos
            else:
                cambio = random.randint(-2, 2)
                
            nuevo[i] = max(lim_inf, min(max_posible, nuevo[i] + cambio))
            
            # Actualizamos el costo actual
            costo_actual = sum(nuevo[j] * costos[j] for j in range(len(nuevo)))
    
    return nuevo


def seleccion_por_ruleta(aptitudes):
    min_apt = min(aptitudes)
    aptitudes_ajustadas = [apt - min_apt + 1 for apt in aptitudes]  # Asegurar valores positivos
    total = sum(aptitudes_ajustadas)
    if total == 0:
        return random.randint(0, len(aptitudes) - 1)
    prob_acumulada = [sum(aptitudes_ajustadas[:i+1]) / total for i in range(len(aptitudes))]
    r = random.uniform(0, 1)
    for i, prob in enumerate(prob_acumulada):
        if r <= prob:
            return i

def inicializar_poblacion(workers, lim_inf, lim_sup, n, restricciones, costos, beneficios, maximo):
    global poblacion, aptitudes, lim_intentos
    poblacion = [generar_posicion_inicial(lim_inf, lim_sup, n, restricciones) for _ in range(workers)]
    aptitudes = [calcular_aptitud(ind, costos, beneficios, maximo) for ind in poblacion]
    lim_intentos = [0] * workers

def fase_obrera(workers, restricciones, costos, beneficios, maximo):
    global poblacion, aptitudes
    for i in range(workers):
        vecino = generar_vecino(poblacion[i], lim_inf, lim_sup, restricciones, costos, maximo)
        aptitud_vecino = calcular_aptitud(vecino, costos, beneficios, maximo)
        if aptitud_vecino > aptitudes[i]:
            poblacion[i] = vecino
            aptitudes[i] = aptitud_vecino
            lim_intentos[i] = 0
        else:
            lim_intentos[i] += 1

def fase_observadora(observers, restricciones, costos, beneficios, maximo):
    global poblacion, aptitudes
    for _ in range(observers):
        seleccionada = seleccion_por_ruleta(aptitudes)
        vecino = generar_vecino(poblacion[seleccionada], lim_inf, lim_sup, restricciones, costos, maximo)
        aptitud_vecino = calcular_aptitud(vecino, costos, beneficios, maximo)
        if aptitud_vecino > aptitudes[seleccionada]:
            poblacion[seleccionada] = vecino
            aptitudes[seleccionada] = aptitud_vecino
            lim_intentos[seleccionada] = 0
        else:
            lim_intentos[seleccionada] += 1

def fase_re_exploracion(workers, restricciones, costos, beneficios, maximo):
    global poblacion, aptitudes
    for i in range(workers):
        if lim_intentos[i] >= limite_intentos:
            poblacion[i] = generar_posicion_inicial(lim_inf, lim_sup, len(poblacion[0]), restricciones, costos, maximo)
            aptitudes[i] = calcular_aptitud(poblacion[i], costos, beneficios, maximo)
            lim_intentos[i] = 0

def run(seleccionadas, maximo):
    global lim_sup, poblacion, aptitudes, lim_intentos
    
    costos = [plantas[planta]["costo"] for planta in seleccionadas]
    beneficios = [plantas[planta]["beneficio"] for planta in seleccionadas]
    
    # Calculamos el límite superior basado en el presupuesto y el costo mínimo
    costo_minimo = min(costos)
    lim_sup = calcular_limite_superior(maximo, costo_minimo)
    
    # Definimos restricciones dinámicas
    restricciones = {i: {"min": 0, "max": math.floor(maximo / costos[i])} for i in range(len(seleccionadas))}

    # Inicializamos la población
    poblacion = [generar_posicion_inicial(lim_inf, lim_sup, len(seleccionadas), restricciones, costos, maximo) 
                for _ in range(workers)]
    aptitudes = [calcular_aptitud(ind, costos, beneficios, maximo) for ind in poblacion]
    lim_intentos = [0] * workers

    mejor_global_aptitud = float('-inf')
    mejor_global_individuo = []

    for iteracion in range(Iteraciones):
        fase_obrera(workers, restricciones, costos, beneficios, maximo)
        fase_observadora(observers, restricciones, costos, beneficios, maximo)
        fase_re_exploracion(workers, restricciones, costos, beneficios, maximo)

        mejor_aptitud = max(aptitudes)
        if mejor_aptitud > mejor_global_aptitud:
            mejor_global_aptitud = mejor_aptitud
            mejor_global_individuo = poblacion[aptitudes.index(mejor_aptitud)]

    # Calcular los valores finales
    costo_total = sum(mejor_global_individuo[i] * costos[i] for i in range(len(mejor_global_individuo)))
    ganancia_total = sum(mejor_global_individuo[i] * (beneficios[i] - costos[i]) 
                        for i in range(len(mejor_global_individuo)))

    return {
        "best_solution": mejor_global_individuo,
        "best_fitness": ganancia_total,
        "total_cost": costo_total,
        "total_revenue": costo_total + ganancia_total
    }