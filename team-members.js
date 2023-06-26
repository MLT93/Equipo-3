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


teamMembers.sort((a, b) => {
  /* .toLowerCase convierte todas las letras a minúsculas. De éste modo, el órden que pretendemos ejecutar se realiza correctamente. */
    let fa = a.surname.toLowerCase(),
        fb = b.surname.toLowerCase();

    if (fa < fb) {
        return -1;
    }

    if (fa > fb) {
      return 1;
    } 

    return 0;
});

teamMembers.forEach(element => {
return console.log(`${element.surname} ${element.name} `)
});

/* El .sort nos compara los elementos dentro de un array y nos devuelve el mismo arreglo ordenado, después de hacer una comparación entre el elemento "a" y el elemento "b" */
teamMembers.sort((a, b) => {
  return a.age - b.age;
});

teamMembers.forEach(element => {
  return console.log(`La edad de ${element.name} es ${element.age} `)
});

let longitudDelArray = teamMembers.length;
let sumaEdades = 0;

teamMembers.forEach(lasEdades => {
  sumaEdades += lasEdades.age
});

console.log("La edad media es:", sumaEdades / longitudDelArray);

teamMembers.forEach(element => {
  let juegoFavorito = element.favoriteVideoGame
  if (
    juegoFavorito.toLowerCase() === "lol" || juegoFavorito.toLowerCase() === "league of legends"
    ) {
      console.log(`${element.name} es un fanático de League Of Legends`);
  };
});

function recorrerElArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indiceDelParticipante = i;
    let saberPetName = arr[i].petName;

    if (
      typeof saberPetName === "string" &&
      saberPetName.length !== 0
    ) {
      console.log(`Nombre de la/las mascotas que tiene ${arr[i].name}: ${saberPetName}`);
    } else {
      console.log(saberPetName = `${arr[i].name} no tiene mascota y vive triste`);
    }


    switch (arr[i].favoriteVideoGame) {
      case "LoL":
        
        break;
      case "League of Legends":
        
        break;
    
      default:
        break;
    }




    //if (typeof arr[i].age !== "number" || arr[i].age <= 17) {
    //  esMayorDeEdad = "No es mayor de edad";
    //}

        

    //console.log(`El indice de este participante es: ${indiceDelParticipante}`);
    //console.log(`El libro favorito de ${arr[i].name} es: ${petName}`
    //);
  }
}

recorrerElArray(teamMembers);
