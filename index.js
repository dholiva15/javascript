

// Continuo con el proyecto del prestamo   

class Prestamo{
    constructor(id, nombre ,cuotas, tasa){
        this.id = id;
        this.nombre = nombre;
        this.cuotas = parseInt(cuotas);
        this.tasa = parseInt(tasa);
    }

    get_datos(){
        alert("id: "+ " " + this.id + " " + " Nombre: " + " " + this.nombre + " "+ "Tasa de interes: " + " "+ this.tasa + "\n")
    }




}

let prestamosARS = []

let prestamo1 = new Prestamo(1,"Prestamos de 12 cuotas", 12, 30 );
let prestamo2 = new Prestamo(2, "Prestamos de 24 cuotas", 24, 40 );
let prestamo3 = new Prestamo(3, "Prestamos de 36 cuotas", 36, 50 );
let prestamo4 = new Prestamo(4 , "Prestamos de 48 cuotas", 48, 60 );
let prestamo5 = new Prestamo(5, "Prestamos de 100 cuotas", 100, 80 );


prestamosARS.push(prestamo1);
prestamosARS.push(prestamo2);
prestamosARS.push(prestamo3);
prestamosARS.push(prestamo4);
prestamosARS.push(prestamo5);


console.log(prestamosARS)


// La idea es empezar a ofrecer prestamos en moneda extranjera
let prestamosUsd = [];

let prestamo6 = new Prestamo(6,"Prestamos de 12 cuotas", 12, 9);
let prestamo7 = new Prestamo(7, "Prestamos de 15 cuotas", 15, 12 );
let prestamo8 = new Prestamo(8, "Prestamos de 20 cuotas", 20, 15 );
let prestamo9 = new Prestamo(9 , "Prestamos de 45 cuotas", 45, 19 );
let prestamo10 = new Prestamo(10, "Prestamos de 50 cuotas", 50, 25 );

prestamosUsd.push(prestamo6);
prestamosUsd.push(prestamo7);
prestamosUsd.push(prestamo8);
prestamosUsd.push(prestamo9);
prestamosUsd.push(prestamo10);
console.log(prestamosUsd)

function prestamos(importe, seleccion){
    return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas)};



function resultado(){

    let importe =  document.getElementById("importe");
    let cuotas =  document.getElementById("cuotas");
    let mensaje = document.getElementById("mensaje");


    if(cuotas.value == 12){
    let posicion1 = prestamosARS[0];
    let parrafo = document.createElement("p")
    parrafo.innerText = `las cantidad de cuotas seleccionadas es  ${cuotas.value}, para un importe de $ ${ importe.value} se calcula una cuota de $ ${prestamos(importe.value, posicion1)}`;
    mensaje.append(parrafo)}

    if(cuotas.value == 24){
        let posicion1 = prestamosARS[1];
        let parrafo = document.createElement("p")
        parrafo.innerText = `las cantidad de cuotas seleccionadas es  ${cuotas.value}, para un importe de $ ${ importe.value} se calcula una cuota de $ ${prestamos(importe.value, posicion1)}`;
        mensaje.append(parrafo)}
    
    if(cuotas.value == 36){
    let posicion1 = prestamosARS[2];
    let parrafo = document.createElement("p")
    parrafo.innerText = `las cantidad de cuotas seleccionadas es  ${cuotas.value}, para un importe de $ ${ importe.value} se calcula una cuota de $ ${prestamos(importe.value, posicion1)}`;
    mensaje.append(parrafo)}

    if(cuotas.value == 48){
        let posicion1 = prestamosARS[3];
        let parrafo = document.createElement("p")
        parrafo.innerText = `las cantidad de cuotas seleccionadas es  ${cuotas.value}, para un importe de $ ${ importe.value} se calcula una cuota de $ ${prestamos(importe.value, posicion1)}`;
        mensaje.append(parrafo)}

        if(cuotas.value == 100){
            let posicion1 = prestamosARS[4];
            let parrafo = document.createElement("p")
            parrafo.innerText = `las cantidad de cuotas seleccionadas es  ${cuotas.value}, para un importe de $ ${ importe.value} se calcula una cuota de $ ${prestamos(importe.value, posicion1)}`;
            mensaje.append(parrafo)}
        
    





};