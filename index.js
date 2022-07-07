

// Continuo con el proyecto del prestamo   

class Viaje{
    constructor(id, nombre ,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
       
    }




}

let viajeARG = []

let salta = new Viaje(1,"Viaje a Salta", 25000 );
let cataratas = new Viaje(2, "Viaje a cataratas", 55000 );
let potrerillo = new Viaje(3, "Viaje a potrerillo", 55000 );
let ushuaia = new Viaje(4 , "Viaje a Ushuaia", 150000);
let uco = new Viaje(5, "Viaje a Valle de uco", 45000 );


viajeARG.push(salta);
viajeARG.push(cataratas);
viajeARG.push(potrerillo);
viajeARG.push(ushuaia);
viajeARG.push(uco);


console.log(viajeARG);

// fijamos la posicion de objeto dentro del array

let posicionSalta = viajeARG[0]
let posicionCataratas = viajeARG[1]
let posicionMendoza = viajeARG[2]
let posicionUshuaia = viajeARG[3]
let posicionUco = viajeARG[4]

console.log(posicionSalta)
console.log(posicionSalta.precio)

// tomamos el boton cotizar
let cataratas1 = document.getElementById("cataratas");
let salta1 = document.getElementById("salta");
let mendoza1= document.getElementById("mendoza");
let ushuaia1= document.getElementById("ushuaia");
let uco1= document.getElementById("uco");



    

  

// hice por cada boton una funcion. Quise hacer una funcion y llamarla por cada evenlistener de cada boton pero me escribia los 5 botones


uco1.addEventListener("click", function (){

    let pasa_uco = document.getElementById("pasa_uco");
    let mensaje=document.getElementById("mensaje");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = `El ${posicionUco.nombre} para la cantidad de   ${pasa_uco.value}, es de un importe de  $ ${ posicionUco.precio * pasa_uco.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }
})

ushuaia1.addEventListener("click", function (){

    let pasa_ushuaia = document.getElementById("pasa_ushuaia")
    let mensaje=document.getElementById("mensaje");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = `El ${posicionUshuaia.nombre} para la cantidad de   ${pasa_ushuaia.value}, es de un importe de  $ ${ posicionUshuaia.precio * pasa_ushuaia.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }
})

mendoza1.addEventListener("click", function (){

    let pasa_mendoza = document.getElementById("pasa_mendoza")
    let mensaje=document.getElementById("mensaje");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = `El ${posicionMendoza.nombre} para la cantidad de   ${pasa_mendoza.value}, es de un importe de  $ ${ posicionMendoza.precio * pasa_mendoza.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }
})

salta1.addEventListener("click", function (){

    let pasa_salta = document.getElementById("pasa_salta")
    let mensaje=document.getElementById("mensaje");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = `El ${posicionSalta.nombre} para la cantidad de   ${pasa_salta.value}, es de un importe de  $ ${ posicionSalta.precio * pasa_salta.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }
})

cataratas1.addEventListener("click", function (){

    let pasa_cataratas = document.getElementById("pasa_cataratas")
    let mensaje=document.getElementById("mensaje");
    let parrafo = document.createElement("p");

    parrafo.innerHTML = `El ${posicionCataratas.nombre} para la cantidad de   ${pasa_cataratas.value}, es de un importe de  $ ${ posicionCataratas.precio * pasa_cataratas.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }
})




function borrar_elementos(e){
   let hijo = e.target;
   let padre = hijo.parentNode

   padre.remove()
}

//<button class = "borrar"> Borrar </button>