const helados = [
  { sabor: 'vainilla', color: 'amarillo' },
  { sabor: 'aguacate', color: 'verde' },
  { sabor: 'fresa', color: 'rojo' },
  { sabor: 'chocolate', color: 'café' },
  { sabor: 'pera', color: 'verde' },
  { sabor: 'mora', color: 'morado' },
  { sabor: 'menta', color: 'verde' },
];

// Realizar una funcion que nos devuelva unicamente los
// objetos con la informacion de los helados de color verde

// 2 == '2' => true
// 2 === '2' => false

const nuevoArreglo = helados.filter(helado => helado.color === 'verde');

console.log(nuevoArreglo)
