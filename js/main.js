/* VARIABLES */

const bebida1 = "vino"
const bebida2 = "cerveza"
const bebida3 = "gancia"
const bebida4 = "vodka"
const preciovodka = 12000
const preciogancia = 1500
const preciocerveza = 350
const preciovino = 1900
let respuesta;
let productos;
let edad;
let cantidad;
let cantidadMin = 1
let cantidadMax = 10
let subtotal=0;
let precio;
let bebida;
let cantidadvodka=0
let cantidadvino=0
let cantidadcerveza=0
let cantidadgancia=0
let subtotalvino=0;
let subtotalcerveza=0;
let subtotalvodka=0;
let subtotalgancia=0;

/* FUNCION */

function lowerCase (Mayus){
    Mayus = Mayus.toLowerCase ();
    return Mayus;
}

/* TIENDA DE BEBIDAS */

alert(`¡Bienvenido a la tienda de bebidas! \n Nuestras promos del hoy son: \n - Llevando 12 o mas Cervezas 10% off \n - Llevando 4 o mas Gancias 30% off \n - Llevando 4 o mas Vinos 20% off \n - Llevando 3 o mas de Vodkas 5% off \n Descuentos aplican sobre el total del producto`)
edad = prompt("Ingresar edad")

if (edad >= 18){
    do{
    do{
    bebida = prompt ("Elija que bebida va a comprar "+"\n"+`${bebida1} $${preciovino}`+"\n"+`${bebida2} $${preciocerveza}`+"\n"+`${bebida3} $${preciogancia}`+"\n"+`${bebida4} $${preciovodka}`)
    bebida=lowerCase (bebida)

    }while(bebida != bebida1 && 
           bebida != bebida2 && 
           bebida != bebida3 && 
           bebida != bebida4)
    do {
    cantidad = prompt ("Ingrese cantidad deseada (min. 1u/max. 10u)")
    } while (cantidad < cantidadMin || cantidad > cantidadMax) 
    switch (bebida) {
        case bebida1:
            subtotalvino += cantidad * preciovino
            cantidadvino += cantidad;
            break;
        case bebida2:
            subtotalcerveza += cantidad * preciocerveza
            cantidadcerveza += cantidad;
            break;        
        case bebida3:
            subtotalgancia += cantidad * preciogancia
            cantidadgancia += cantidad;
            break;
        default:
            subtotalvodka += cantidad * preciovodka
            cantidadvodka += cantidad;
            break;
    }
    respuesta=prompt("Deseas Comprar mas bebidas? si/no")
    respuesta=lowerCase(respuesta)
    
    }while(respuesta=="si")
    
    if(cantidadcerveza >= 12){
        subtotalcerveza= subtotalcerveza*0.90
    }
    if(cantidadgancia >= 4){
        subtotalgancia= subtotalgancia*0.70
    }
    if(cantidadvino >= 4){
        subtotalvino= subtotalvino*0.80
    }
    if(cantidadvodka >= 3){
        subtotalvodka = subtotalvodka*0.95
    }
    
    subtotal= subtotalcerveza + subtotalgancia + subtotalvino + subtotalvodka
    if(cantidadvodka>2 || cantidadcerveza >11 || cantidadgancia >3 || cantidadvino>3){
        alert (`Felicidades Accedio a un descuento! \n
        El total de la compra es: $${subtotal.toFixed(2)}`)
    }else(
    alert (`El total de la compra es: $${subtotal.toFixed(2)}`)
    )
}else {
    alert (`No podes pasar, volve en ${18-edad} Anios`)
    
}


