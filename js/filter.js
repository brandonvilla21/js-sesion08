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
 * Obtener unicamente las superficies que tengan un largo mayor a 10mts
 */

const nuevoArreglo = superficies.filter((superficie) => {
  if (superficie.largo > 10) {
    return true
  } else {
    return false
  }
})

const nuevoArreglo2 = superficies.filter((superficie) => superficie.largo > 10)

console.log(nuevoArreglo2)