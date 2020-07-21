const superficies = [
  { id: 1, descripcion: 'Casa habitación pequeña', largo: 6, fondo: 17 },
  { id: 2, descripcion: 'Cancha de futbol', largo: 90, fondo: 120 },
  { id: 3, descripcion: 'Cancha de tenis', largo: 8, fondo: 23 },
  { id: 4, descripcion: 'Bodega de autos', largo: 15, fondo: 40 },
  { id: 5, descripcion: 'Casa habitación grande', largo: 12, fondo: 30 },
];

/**
 * Obtener el area total de todas las superficies del condominio
 * 1. Obtener un arreglo con todas las areas de cada superficie
 * 2. Obtener la suma total de las areas
 */

// Primera forma
const nuevoArreglo = superficies.map((superficie) => {
  return superficie.largo * superficie.fondo;
});

const nuevoArreglo2 = nuevoArreglo.reduce((suma, valorActual) => {
  return suma + valorActual;
}, 0);

// Segunda forma
const nuevoArreglo3 = superficies
  .map((superficie) => superficie.largo * superficie.fondo)
  .reduce((suma, valorActual) => suma + valorActual, 0);

console.log(nuevoArreglo3);
