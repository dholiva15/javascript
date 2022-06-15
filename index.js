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

