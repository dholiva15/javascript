// Valido si es una persona a traves de una simple formula de suma
// Por otro lado queria plantear uno de los ejemplos que me vaya pidiendo un numero nuevo con el resultaod del anterio pero no me salio



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
    
          
    console.log("el numero ingresado es : ", numero)


}
