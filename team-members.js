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
    favoriteVideoGame: "Lol",
    favoriteFilm: "Origen",
    favoriteBook: "",
    petName: "",
  },
];

// console.log(teamMembers);

function recorrerElArray(arr) {
  let saberElNombreDelParticipante;

  for (let i = 0; i < arr.length; i++) {
    saberElNombreDelParticipante = arr[i].name;
    console.log(saberElNombreDelParticipante);
  }
  return { saberElNombreDelParticipante };
}

recorrerElArray(teamMembers);
