/**
 * Informacion de las superficies de un condominio
 */
const superficies = [
  { id: 1, descripcion: 'Casa habitación pequeña', largo: 6, fondo: 17 },
  { id: 2, descripcion: 'Cancha de futbol', largo: 90, fondo: 120 },
  { id: 3, descripcion: 'Cancha de tenis', largo: 8, fondo: 23 },
  { id: 4, descripcion: 'Bodega de autos', largo: 15, fondo: 40 },
  { id: 5, descripcion: 'Casa habitación grande', largo: 12, fondo: 30 }
]


/**
 * Agregar la propiedad de area a los objetos:
 * 
 * Ejemplo con el primer objeto:
 * { id: 1, descripcion: 'Casa habitación pequeña', largo: 6, fondo: 17, area: 102 }
 */

const nuevoArreglo = superficies.map((superficie) => {
  const areaValor = superficie.largo * superficie.fondo
  
  return {...superficie, area: areaValor}
})

console.log(superficies)
console.log(nuevoArreglo)

