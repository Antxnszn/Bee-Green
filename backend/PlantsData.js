export const temporadas = {
    invierno: 1,
    primavera: 2,
    verano: 3,
    otoño: 4
  };
  
  export const plantas = [
    { nombre: 'Rosa', temporada: 'invierno', precio: 50 },
    { nombre: 'Tulipán', temporada: 'primavera', precio: 40 },
    { nombre: 'Lirio', temporada: 'verano', precio: 60 },
    { nombre: 'Crisantemo', temporada: 'otoño', precio: 30 },
    { nombre: 'Violetas', temporada: 'primavera', precio: 35 },
    { nombre: 'Dalia', temporada: 'invierno', precio: 45 }
  ];
  
  export function obtenerPlantas(temporadaSeleccionada, tipoCompra) {
    const claveTemporada = temporadas[temporadaSeleccionada];
    if (!claveTemporada) {
      return 'Temporada no válida';
    }
  
    const plantasDisponibles = plantas.filter(planta => planta.temporada === temporadaSeleccionada);
  
    const plantasConPrecioAjustado = plantasDisponibles.map(planta => {
      if (tipoCompra === 'mayoreo') {
        planta.precio = planta.precio - (planta.precio * 0.1); // Descuento del 10% para mayoreo
      }
      return planta;
    });
  
    return plantasConPrecioAjustado;
  }
  