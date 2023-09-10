/* alert("vamos a jugar piedra papel o tijera")

let jugador1
let jugador2
let contadorj1 = 0
let contadorj2 = 0

do {
do {
    jugador1 = prompt("elija su jugada J1 - piedra - papel - tijera")
}while (
    jugador1 != "piedra" && 
    jugador1 != "papel" &&
    jugador1 != "tijera"
)
do {
    jugador2 = prompt("elija su jugada J2 - piedra - papel - tijera")
}while (
    jugador2 != "piedra" && 
    jugador2 != "papel" &&
    jugador2 != "tijera"
)

if (jugador1 == "piedra" && jugador2 == "tijera") {
    contadorj1 += 1
    alert("Gana J1")
} else if (jugador1 == "piedra" && jugador2 == "papel") {
    contadorj2 += 1
    alert("Gana J2")
} else if (jugador1 == "papel" && jugador2 == "piedra") {
    contadorj1 += 1
    alert("Gana J1")
} else if (jugador2 == "tijera" && jugador1 == "papel") {
    contadorj2 += 1
    alert("Gana J2")
} else if (jugador2 == "piedra" && jugador1 == "tijera") {
    contadorj2 += 1
    alert("Gana J2")
    console.log ("¡Jugador 2 es el ganador!")
} else if (jugador2 == "papel" && jugador1 == "tijera") {
    contadorj1 += 1
    alert("Gana J1")
    console.log ("¡Jugador 1 es el ganador!")
} else {
    alert("empate")
}

alert (contadorj1 + " - " + contadorj2)
}
while (contadorj1 != 3 && contadorj2 != 3) 
if (contadorj1 == 3){
    alert ("ganador J1")
}else {
    alert ("ganador J2")
} */
