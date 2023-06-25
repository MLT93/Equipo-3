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

function recorrerElArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indiceDelParticipante = i;
    let saberLibroFavorito = arr[i].favoriteBook;
    let esMayorDeEdad = arr[i].age;

    if (
      typeof arr[i].favoriteBook !== "string" ||
      arr[i].favoriteBook.length === 0
    ) {
      saberLibroFavorito = "N/A";
    }

    if (typeof arr[i].age !== "number" || arr[i].age <= 17) {
      esMayorDeEdad = "No es mayor de edad";
    }

    console.log(`El indice de este participante es: ${indiceDelParticipante}`);
    console.log(`La edad que tiene ${arr[i].name} es: ${esMayorDeEdad}`);
    console.log(
      `El libro favorito de ${arr[i].name} es: ${saberLibroFavorito}`
    );
  }
}

recorrerElArray(teamMembers);
