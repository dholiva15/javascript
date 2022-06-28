// Valido si es una persona a traves de una simple formula de suma
// Por otro lado queria plantear uno de los ejemplos que me vaya pidiendo un numero nuevo con el resultaod del anterio pero no me salio


/*
alert("Hola bienvenido, se le pediran 5 numeros por teclado para validar si es un Humano")




for(let i=0; i<5; i++){
    let numero1 = prompt("ingrese numero");
    numero1 = parseInt(numero1);
   
    let numero2 = prompt("A su numero sumele 3 unidades ")
    let numero = numero2
    if(numero2 != (numero1 + 3)){
        alert("Usted no es humano");
        break

    }
    
          
    alert("el numero ingresado es : " +  numero)


}*/


// presento el primer desafio . Es un simulador de prestamo


/*

alert("Hola Bienvenido, le ofrecemos un prestamo con la mejor tasa del mercado")

alert("calcularemos el prestamo que usted necesita")

let importe =  parseInt(prompt("ingrese el importe que quiere ser prestado"))
alert("Le ofrecemos 3 planes de cuotas, \n 12 cuotas con una tasa de interes del 50% \n 36 cuotas con una tasa de interes del 60% \n 48 cuotas con una tasa de interes del 70% ")
let cuotas = parseInt( prompt("ingrese las cuotas segun las tres opciones ofrecidas"))






function prestamo(importe){
    if(cuotas == 12){
        return ((importe * 1.50)/12)
    }
    else if(cuotas == 36 ){
        return (importe * 1.60)/36
    }
    else if(cuotas == 48 ){
        return (importe * 1.70)/48
    }
    else{ alert("eligio una opcion no valida")}
}


function prestamo_total(importe){

    if(cuotas == 12){
        return (importe * 1.50)
    }
    else if(cuotas == 36 ){
        return (importe * 1.60)
    }
    else if(cuotas == 48 ){
        return (importe * 1.70)
    }
    else{ alert("eligio una opcion no valida")}


}

alert("la cantidad de cuotas elegida es  " + cuotas + "   teniendo que pagar una cuota mensual de   AR$"+  prestamo(importe) + "\n El importe total a pagar es de  :  "  + prestamo_total(importe));
*/

// Segunda Entrega Opcional


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
let prestamo5 = new Prestamo(5, "Prestamos de 100 cuotas", 100, 70 );


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



alert("Bienvenidos- Le ofrecemos los siguientes prestamos en Pesos Argentinos o dolares")
let eleccion =  prompt("Seleccione A para prestamos en AR$ o B para prestamos en USD")

if ((eleccion == "A") || (eleccion== "a")){
    alert("1 - Prestamo de 12 cuotas, con una tasa de interes del 30% " + "\n "+ "2 - Prestamo de 24 cuotas, con una tasa de interes del 40% " + "\n" + "3 - Prestamo de 36 cuotas, con una tasa de interes del 50% "+ "\n "+ "4 - Prestamo de 48 cuotas, con una tasa de interes del 60% " + "\n" + "5 - Prestamo de 100 cuotas, con una tasa de interes del 70% ")
    
}
else if((eleccion == "B" )|| (eleccion == "b")){
    alert("6 - Prestamo de 12 cuotas, con una tasa de interes del 9% " + "\n "+ "7 - Prestamo de 15 cuotas, con una tasa de interes del 12% " + "\n" + "8 - Prestamo de 20 cuotas, con una tasa de interes del 15% "+ "\n "+ "9 - Prestamo de 45 cuotas, con una tasa de interes del 19% " + "\n" + "10 - Prestamo de 50 cuotas, con una tasa de interes del 25% ")
}
else{alert("No selecciono una opcion valida")}


let seleccion = prompt("De acuerdo a las opciones ofrecidas, seleccion el prestamo que mas le convenga")
let importe = parseInt( prompt("Ahora ingrese el monto "))

if(seleccion == 1){
    let seleccion = prestamosARS[0];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);
        

    };

    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  $"+ " "+ prestamos(importe))
}

else if(seleccion == 2){
    let seleccion = prestamosARS[1];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  $"+ " "+ prestamos(importe))
}

else if(seleccion == 3){
    let seleccion = prestamosARS[2];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  $"+ " "+ prestamos(importe))
}
else if(seleccion == 4){
    let seleccion = prestamosARS[3];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  $"+ " "+ prestamos(importe))
}
else if(seleccion == 5){
    let seleccion = prestamosARS[4];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  $"+ " "+ prestamos(importe))
}


if(seleccion == 6){
    let seleccion = prestamosUsd[0];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);
        

    };

    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  USD"+ " "+ prestamos(importe))
}

else if(seleccion == 7){
    let seleccion = prestamosUsd[1];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  USD"+ " "+ prestamos(importe))
}

else if(seleccion == 8){
    let seleccion = prestamosUsd[2];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  USD"+ " "+ prestamos(importe))
}
else if(seleccion == 9){
    let seleccion = prestamosUsd[3];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  USD "+ " "+ prestamos(importe))
}
else if(seleccion == 10){
    let seleccion = prestamosUsd[4];
    function prestamos(importe){
        return ((importe * (1 + (seleccion.tasa / 100))) / seleccion.cuotas);

    };
    alert(" ha seleccionado el siguiente tipo de prestamo  :" + " " + seleccion.nombre + " " +  "con una cantidad de cuotas :  "+ "  "+ seleccion.cuotas + " "+ " y un valor de cuota:  USD"+ " "+ prestamos(importe))
}
