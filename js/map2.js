const movies = [
  {
    id: 1300,
    titulo: 'avengers: Endgame',
    actores: ['Robert Downey Jr.', 'Chris Evans', 'Tom Holland'],
    descripcion: 'Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.',
    fechaDeLanzamiento: '26 de Abril de 2019',
  },
  {
    id: 1301,
    titulo: 'aquarela',
    actores: ['Hayat Mokhenache', 'Peter Madej'],
    descripcion: 'Aquarela lleva a la audiencia a una profunda aventura cinemática sobre la poderosa y transformadora belleza del agua.',
    fechaDeLanzamiento: '12 de diciembre de 2018',
  },
  {
    id: 1302,
    titulo: 'frozen II',
    actores: ['Kristen Bell', 'Idina Menzel', 'Jonathan Groff', 'Josh Gad'],
    descripcion: 'La reina Elsa, su hermana Anna, Kristoff, Olaf y Sven se embarcan en un nuevo viaje al interior del bosque para descubrir la verdad sobre un antiguo misterio de su reino.s',
    fechaDeLanzamiento: '15 noviembre de 2019 ',
  },
  {
    id: 1303,
    titulo: 'spiderman: Far from home',
    actores: ['Tom Holland', 'Zendaya', 'Jake Gyllenhaal'],
    descripcion: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
    fechaDeLanzamiento: '5 de julio de 2019',
  },
];

// 1. Realizar una funcion que devuelva las letras de titulos en mayúsculas
/*
const name = 'Juan Perez'

u = name.charAt(1) // Devuelve el caracter que se encuentre en el indice que se indique por parametro
JUAN PEREZ = name.toUpperCase() // Devuelve el resultado en mayusculas
an Perez = name.slice(2) // devuelve un "pedazo" del string, de acuero al que se indique en parametros

*/
const nuevoArreglo = movies.map((movie) => {
// Genaro //
   const titulo = movie.titulo;   

   const primeraLetra = titulo.charAt(0);
   const tituloPrimeraLetraMayus = primeraLetra.toUpperCase();
   const tituloRestoNombre = titulo.slice(1);

   const tituloPelicula = `${tituloPrimeraLetraMayus}${tituloRestoNombre}`;

   return {...movie, titulo: tituloPelicula}
})

// 2. Realizar una función que devuelva todas las peliculas pero unicamente con solo el id y el titulo
const peliculasConId = movies.map((movie)=> {
    const {titulo, id} = movie
    return {id, titulo}
})

console.log(movies)
console.log(peliculasConId)