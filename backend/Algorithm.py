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
    "Rosas": {"costo": 15, "beneficio": 25},
    "Tulipanes": {"costo": 10, "beneficio": 18},
    "Orquídeas": {"costo": 20, "beneficio": 35},
    "Girasoles": {"costo": 8, "beneficio": 15},
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