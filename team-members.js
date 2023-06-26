let teamMembers = [
  {
    name: "Marcos",
    surname: "Lambir Torres",
    age: 30,
    city: "Franchuski",
    hobby: "Rascarme",
    favoriteFood: "Pasta",
    favoriteVideoGame: "Lol",
    favoriteFilm: "Titanic",
    favoriteBook: "Memorias del Agua",
    petName: "Turi",
  },

  {
    name: "Esteve",
    surname: "Mogas Silva",
    age: 28,
    city: "Granollers",
    hobby: "Escalar",
    favoriteFood: "Croquetas",
    favoriteVideoGame: "LOL",
    favoriteFilm: "Origen",
    favoriteBook: "",
    petName: "",
  },
  {
    name: "Manuel",
    surname: "Benitez",
    age: 29,
    city: "Palma",
    hobby: "Ski",
    favoriteFood: "Empanadas",
    favoriteVideoGame: "Catan",
    favoriteFilm: "",
    favoriteBook: "Shantaram",
    petName: "Shaka, Shiva, Mechi",
  },
  {
    name: "Marta",
    surname: "Miras Méndez",
    age: 21,
    city: "Madrid",
    hobby: "Papiroflexia",
    favoriteFood: "Sushi",
    favoriteVideoGame: "PUBG",
    favoriteFilm: "Avatar",
    favoriteBook: "Loco por ella",
    petName: "Mochi",
  },
];

/* La función .sort() se utiliza en el array (teamMembers) para ordenar sus elementos. Recibe una función de comparación como argumento para determinar el orden de los elementos, que sería la arrow function (a, b) => { ... } que utilizamos para comparar los atributos/elementos "a" y "b".
Luego comparamos las variables fa y fb, que contienen los atributos/elementos (a) con las propiedades de los apellidos (.suranme) escritas en minúsculas (.toLowerCase).
Si (if) (fa) es menor (<) que (fb), se retorna (return) (-1), lo que indica que a se pondrá antes de b en el ordenamiento de los elementos. Si (if) (fa) es mayor (>) que (fb), se retorna (return) (1), lo que indica que a debe ubicarse después de b en el ordenamiento. En el caso de que nada de lo anterior se cumpla, se devuelve (return) (0), lo que indica que no hay diferencia en el orden relativo de a y b. */
teamMembers.sort((a, b) => {
  /* .toLowerCase() convierte todas las letras a minúsculas. */
    const fa = a.surname.toLowerCase(), 
          fb = b.surname.toLowerCase();

    if (fa < fb) {
        return -1;
    }

    if (fa > fb) {
      return 1;
    } 

    return 0;
});

/* Por cada (.forEach) atributo/elemento (element) que hay en el array (teamMembers), devuelve (return) e imprime por consola (console.log()) la propiedad (.surname) del elemento (element) y también la propiedad nombre del mismo elemento (element.name)*/
teamMembers.forEach(element => {
return console.log(`${element.surname} ${element.name} `)
});

/* El (.sort) nos compara los atributos/elementos al interno del array, ordenándolos y nos devuelve (return) el mismo arreglo de forma ordenada, después de hacer una comparación entre el parametro "a" y el parametro "b" */
teamMembers.sort((a, b) => {
  /* La comparación se realiza restando las propiedades correspondientes a la edad (.age) entre los atributos/elementos a y b. Si la propiedad del primer parametro (a.age) es menor que la otra (b.age), el resultado de la resta será negativo, lo que indica que a debe ser colocado antes que b en el orden final. Si a.age es mayor que b.age, el resultado será positivo, lo que indica que a debe ser colocado después de b. Si las edades son iguales, el resultado de la resta será 0, lo que significa que no hay diferencia en la posición relativa de a y b. */
  return a.age - b.age;
});
/* Por cada (.forEach) atributo/elemento (elemento) dentro del array (teamMembers) devuelve (return) e imprime por consola (console.log) el nombre del elemento (elemento.name) y su edad (elemento.age) */
teamMembers.forEach(elemento => {
  return console.log(`La edad de ${elemento.name} es ${elemento.age} `)
});

/* Creo dos variables, una con la longitud (.length) del array (teamMembers) y la otra la inicializo en 0 para guardar la suma total de todas las edades */
let cantidadDeEdadesEnElArray = teamMembers.length;
let sumaDeEdades = 0;
/* Por cada atributo/elemento del array sumo las edades entre sí mismas y devuelvo su suma. */
teamMembers.forEach(atributo => {
  return sumaDeEdades = sumaDeEdades + atributo.age /* también se puede escribir así: sumarEdades += atributo.age */
});
/* creo una variable para guardar el valor de la media de edades (una media se realiza sumando todos los valores entre sí y dividiéndo el resultado entre la cantidad de valores dados) y finalmente imprimo el resultado por consola */
console.log("La edad media del equipo es:", sumaDeEdades / cantidadDeEdadesEnElArray);

/* Por cada atributo/elemento del array: 
creo una variable (let juegoFavorito) para almacenar las propiedades (.favoriteVideoGame) del atributo/elemento (atribute) del array
Después digo, Si (if) la variable (let juegoFavorito) sin importar si está escrito en mayúsculas o minúsculas (.toLowerCase) es estrictamente equivalente (===) a "lol" o (||) "league of legends"
devuelve (return) e imprime por consola (console.log()) que se juega a ese juego */
teamMembers.forEach(atribute => {
  let juegoFavorito = atribute.favoriteVideoGame
  if (
    juegoFavorito.toLowerCase() === "lol" || juegoFavorito.toLowerCase() === "league of legends"
    ) {
      return console.log(`${atribute.name} es un fanático de League Of Legends`);
  };
});


/* Creo una funcón con un parametro (function petAtribute (arr)) para saber qué mascotas tiene cada miembro del team y si ha rellenado la casilla de petName */
function petAtribute(arr) {
  /* Recorro el array completo utilizando un bucle (for) */
  for (let i = 0; i < arr.length; i++) {
    /* Inicializo una variable con el valor de todas las mascotas de un array */
    let saberPetName = arr[i].petName;
    /* Si (if) la condición de comprobar (typeof()) si la variable (const saberPetName) es equivalente (===) a una cadena de texto ("string") y (&&) si la condición de la variable (saberPetName) posee una longitud (.length) distinta (!==) a 0
    entonces imprimo por consola (console.log()) el nombre de la/las mascota/s que se puedan tener
    Si no (else) imprimo por consola (console.log()) que no tiene mascota. */
    if (
      typeof(saberPetName === "string") &&
      saberPetName.length !== 0
    ) {
      console.log(`Mascota o mascotas que tiene -> ${arr[i].name}: ${saberPetName}`);
    } else {
      console.log(saberPetName = `Mascota o mascotas que tiene -> ${arr[i].name}: N/A`);
    };
  };
};
petAtribute(teamMembers);

/* Creo una función para saber si hay nombre repetidos en el array */
function hayNombresRepetidosEnElArray(array) {
  /* Creo un array vacío para guardar probables nombres repetidos */
  let nombresRepetidos = [];
  /* Creo un bucle (for) que inicializa en el primer índice del array y va avanzando hasta que llega a su fin */
  for (let primerIndex = 0; primerIndex < array.length; primerIndex++) {
    /* Necesito crear otro bucle para tener otra referencia. Así podré compararlas entre ellas. Por esa misma razón, inicializamos la variable del segundo bucle con la variable del primero más 1, así podemos comparar el primer elemento del array con el segundo. */
    for (let segundoIndex = primerIndex + 1; segundoIndex < array.length; segundoIndex++) {
      /* Si el índice del primer array es equivalente al segundo, añadimos (.push) el nombre del segundo índice al array vacío (let nombresRepetidos = [];) */
      if (array[primerIndex].name === array[segundoIndex].name) {
        nombresRepetidos.push(array[primerIndex].name);
      };    
    };
  };
  /* Si (if) el array (nombresRepetidos) tiene una longitud (.length) mayor (>) que zero (0), quiere decir que hay algún nombre al interno del array */
  if (nombresRepetidos.length > 0) {
    console.log("Los nombres que se repiten son:", nombresRepetidos);
    /* Si no (else), no posee ninguna longitud, por lo tanto seguirá vacío */
  } else {
    console.log("No hay nombres repetidos");
  }
  /* Devuelvo el array (nombresRepetidos) que utilicé para guardar los nombres que se repiten */
  return nombresRepetidos;
};
hayNombresRepetidosEnElArray(teamMembers);
