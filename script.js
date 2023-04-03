let pokemon = [
    {
        id: 1,
        nombre: "bulbasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 10,

    },
    {
        id: 2,
        nombre: "ivysaur",
        tipo: "planta",
        numevo: 3,
        color: "azul",
        precio: 20,
    },
    {
        id: 3,
        nombre: "venasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 30,
    },
    {
        id: 4,
        nombre: "charmander",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 10,
    },
    {
        id: 5,
        nombre: "charmeleon",
        tipo: "fuego",
        numevo: 3,
        color: "rojo",
        precio: 20,
    },
    {
        id: 6,
        nombre: "charizard",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 30,
    },
    {
        id: 7,
        nombre: "squirtle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 10,
    },
    {
        id: 8,
        nombre: "wartortle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 20,
    },
    {
        id: 9,
        nombre: "blastoise",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 30,
    },
    {
        id: 10,
        nombre: "caterpie",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 10,
    },
    {
        id: 11,
        nombre: "metapod",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 20,
    },
    {
        id: 12,
        nombre: "butterfree",
        tipo: "bicho",
        numevo: 3,
        color: "violeta",
        precio: 30,
    },
    {
        id: 13,
        nombre: "weedle",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 10,
    },
    {
        id: 14,
        nombre: "kakuna",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 20,
    },
    {
        id: 15,
        nombre: "beedrill",
        tipo: "bicho",
        numevo: 3,
        color: "amarillo",
        precio: 30,
    },
    {
        id: 16,
        nombre: "pidgey",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 10,
    },
    {
        id: 17,
        nombre: "pidgeotto",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 20,
    },
    {
        id: 18,
        nombre: "pidgeot",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 30,
    },
    {
        id: 19,
        nombre: "rattata",
        tipo: "normal",
        numevo: 2,
        color: "violeta",
        precio: 10,
    },
    {
        id: 20,
        nombre: "raticate",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
    },
    {
        id: 21,
        nombre: "spearow",
        tipo: "normal",
        numevo: 2,
        color: "rojo",
        precio: 10,
    },
    {
        id: 22,
        nombre: "fearow",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
    },
    {
        id: 23,
        nombre: "ekans",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 10,
    },
    {
        id: 24,
        nombre: "arbok",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 20,
    },
    {
        id: 25,
        nombre: "pikachu",
        tipo: "electrico",
        numevo: 2,
        color: "amarillo",
        precio: 10,
    },
    {
        id: 26,
        nombre: "raichu",
        tipo: "electrico",
        numevo: 2,
        color: "marron",
        precio: 20,
    },
    {
        id: 27,
        nombre: "sandshrew",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 10,
    },
    {
        id: 28,
        nombre: "sandslash",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 20,
    },


]







let opcion
let opcionSub
let menu = "Bienvenido, seleccione la opcion desesada\n1 - para listar pokemon disponibles \n2 - para filtar \n3 - para ver carrito \n4 - para ordenar por precio \n5 - para agregar pokemon al carrito \n0 - para finalizar"
let subMenu = "Elija el filtro\n1 - por tipo \n2 - por color \n3 - por numero de evoluciones \n4 - por nombre \n0 - Para volver"
let carrito = []

do {
    opcion = Number(prompt(menu))
    switch (opcion) {
        case 1:
            alert("Pokemon disponible: \n" + listado(pokemon))

            break;



        case 2:
            do {
                opcionSub = Number(prompt(subMenu))
                switch (opcionSub) {
                    case 1:
                        let tipo = prompt("Ingrese el tipo de pokemon").toLocaleLowerCase()
                        let pokemonTipo = pokemon.filter(pokemon => pokemon.tipo === tipo)
                        if (pokemonTipo.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon tipo " + tipo + ": \n" + listado(pokemonTipo))

                        }

                        break;

                    case 2:
                        let color = prompt("Ingrese el color de pokemon que desea").toLocaleLowerCase()
                        let pokemonColor = pokemon.filter(pokemon => pokemon.color === color)

                        if (pokemonColor.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon color " + color + ": \n" + listado(pokemonColor))

                        }

                        break;

                    case 3:
                        let numevo = prompt("Ingrese cuantas evoluciones desea")
                        let pokemonnumEvo = pokemon.filter(pokemon => pokemon.numevo == numevo)
                        if (pokemonnumEvo.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon con numero " + numevo + "de evoluciones" + ": \n" + listado(pokemonnumEvo))

                        }

                        break;

                    case 4:
                        let nombre = prompt("Ingrese el nombre del pokemon que desea")
                        let pokemonNombre = pokemon.filter(pokemon => pokemon.nombre === nombre)
                        if (pokemonNombre.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon " + nombre + " esta disponible para el viaje" + ": \n" + listado(pokemonNombre))

                        }
                        break;



                }
            } while (opcionSub != 0);

            break;




        case 3:
            alert("Pokemon en el carrito: \n" + listado(carrito))

            break;

        case 4:
            pokemon.sort((a, b) => a.precio - b.precio);

            alert(listado(pokemon))
            break;






        case 5:
            let idPokemon = Number(prompt("pokemon disponible: \n" + listado(pokemon)))
            let pokemonSeleccionado = pokemon.find(pokemon => pokemon.id === idPokemon)
            if (pokemonSeleccionado) {
                carrito.push(pokemonSeleccionado)
                alert("Pokemon agregado al Carrito")

            } else {
                alert("seleccione un id correcto")

            }

            break;

        default:
            if (opcion != 0) {
                alert("Ingrese una opcion valida")
            }

            break;

    }


} while (opcion != 0)


function listado(pokemon) {
    return pokemon.map(pokemon => {
        return `ID: ${pokemon.id} Nombre: ${pokemon.nombre} Precio: ${pokemon.precio}`

    }).join("\n")
}










