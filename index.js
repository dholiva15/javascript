

// Continuo con el proyecto del prestamo   

class Viaje{
    constructor(id, nombre ,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
       
    }




}

let viajeARG = []

let iruya = new Viaje(1,"Viaje a Iruya", 25000 );
let cataratas = new Viaje(2, "Viaje a Cataratas", 55000 );
let potrerillo = new Viaje(3, "Viaje a Potrerillo", 65000 );
let ushuaia = new Viaje(4 , "Viaje a Ushuaia", 150000);
let uco = new Viaje(5, "Viaje a Valle de Uco", 45000 );


viajeARG.push(iruya);
viajeARG.push(cataratas);
viajeARG.push(potrerillo);
viajeARG.push(ushuaia);
viajeARG.push(uco);


console.log(viajeARG);

// fijamos la posicion de objeto dentro del array

let posicionIruya = viajeARG[0]
let posicionCataratas = viajeARG[1]
let posicionPotrerillo = viajeARG[2]
let posicionUshuaia = viajeARG[3]
let posicionUco = viajeARG[4]

console.log(posicionIruya)
console.log(posicionIruya.precio)


/*


// tomamos el boton cotizar - Cambie el ID por una class en cada boton cotizar
let cataratas1 = document.getElementById("cataratas");
let salta1 = document.getElementById("salta");
let mendoza1= document.getElementById("mendoza");
let ushuaia1= document.getElementById("ushuaia");
let uco1= document.getElementById("uco");*/




let botones_compra = document.querySelectorAll(".boton_compra")


console.log(botones_compra)
let carrito = [];
let carrito_storage = [];

for( let boton of botones_compra){

    boton.addEventListener("click", cotizar);
}


function cotizar(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let nombre_viaje = padre.querySelector("h2").textContent;
    let precio = padre.querySelector("span").textContent;
    
    // no pude al momento crear una clase pasajeros y que me tome la cantidad de cada viaje. Si mediante ID lo puedo hacer. 
    let pasajeros_iruya = document.getElementById("pasajeros_iruya")
    let pasajeros_Cataratas = document.getElementById("pasajeros_Cataratas")
    let pasajeros_Potrerillo = document.getElementById("pasajeros_Potrerillo")
    let pasajeros_Ushuaia = document.getElementById("pasajeros_Ushuaia")
    let pasajeros_ValleUco = document.getElementById("pasajeros_ValleUco")
    
    
    
    //let mensaje=document.getElementById("mensaje");   los dejo por si quiero enviar algun mensaje mas adelante
   //let parrafo = document.createElement("p");
    

    if(nombre_viaje == "Iruya"){



        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_iruya.value,
            total : total(pasajeros_iruya.value,posicionIruya.precio )
        };

        carrito.push(producto)
        console.log(carrito)

        let producto_JSON = JSON.stringify(producto)

        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)

        mostrar_carrito(producto);


/*
    parrafo.innerHTML = `El ${posicionIruya.nombre} para la cantidad de   ${pasajeros}, es de un importe de  $ ${ posicionIruya.precio * pasajeros_iruya.value} 
    <button class = "borrar"> Borrar </button>`;
    mensaje.append(parrafo)

    let boton_borrar = document.querySelectorAll(".borrar");
    console.log(boton_borrar)
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos)
    }*/

    }


  else if(nombre_viaje == "Cataratas"){

    let producto = {
        nombre: nombre_viaje,        
        precio: precio,
        cantidad: pasajeros_Cataratas.value,
        total : total(pasajeros_Cataratas.value,posicionCataratas.precio )
    };

    carrito.push(producto)
    console.log(carrito)

    let producto_JSON = JSON.stringify(producto)

    carrito_storage.push(producto_JSON)
    localStorage.setItem("producto", carrito_storage)

    mostrar_carrito(producto);



    
        }
    
   else if (nombre_viaje == "Potrerillo"){



    let producto = {
        nombre: nombre_viaje,        
        precio: precio,
        cantidad: pasajeros_Potrerillo.value,
        total : total(pasajeros_Potrerillo.value,posicionPotrerillo.precio )
    };

    carrito.push(producto)
    console.log(carrito)

    let producto_JSON = JSON.stringify(producto)

    carrito_storage.push(producto_JSON)
    localStorage.setItem("producto", carrito_storage)

    mostrar_carrito(producto);




        
            }

      else if (nombre_viaje == "Ushuaia"){

        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_Ushuaia.value,
            total : total(pasajeros_Ushuaia.value,posicionUshuaia.precio )
        };
    
        carrito.push(producto)
        console.log(carrito)
    
        let producto_JSON = JSON.stringify(producto)
    
        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)
    
        mostrar_carrito(producto);

            
                }

       else if (nombre_viaje == "Valle de Uco"){

        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_ValleUco.value,
            total : total(pasajeros_ValleUco.value,posicionUco.precio )
        };
    
        carrito.push(producto)
      
    
        let producto_JSON = JSON.stringify(producto)
    
        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)
    
        mostrar_carrito(producto);


                
                    }
    



}

function borrar_elementos(e){
    let hijo = e.target;
    let abuelo = hijo.parentNode.parentNode
 
    abuelo.remove()
 }
 
 function total(pasajeros, importe){

    return pasajeros*importe

    
}

function mostrar_carrito(producto){
    let fila = document.createElement("tr");
    fila.innerHTML= `
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td>${producto.total}</td>

                      <td><button class= "btn-danger borrar_elemento"> Borrar</td>`;
    let body_tabla = document.getElementById("tbody");
    body_tabla.append(fila)

    let boton_borrar = document.querySelectorAll(".borrar_elemento")
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos);
    }
    

}




/*


function cotizar(e){
    let hijo = e.target;
    let padre = hijo.parentNode;
    
    
    let nombre_viaje = padre.querySelector("h2").textContent;
    let precio = padre.querySelector("span").textContent;
    let pasajeros = (document.querySelectorAll(".pasajeros")).value

  

   

    let producto = {
        nombre: nombre_viaje,        
        precio: precio,
        cantidad: pasajeros,
        total : total
    };

   
    carrito.push(producto)
    console.log(carrito)

    let producto_JSON = JSON.stringify(producto)

    carrito_storage.push(producto_JSON)
    localStorage.setItem("producto", carrito_storage)

    mostrar_carrito(producto);


    

        

}



function mostrar_carrito(producto){
    let fila = document.createElement("tr");
    fila.innerHTML= `
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td>${producto.total}</td>

                      <td><button class= "btn-danger borrar_elemento"> Borrar</td>`;
    let body_tabla = document.getElementById("tbody");
    body_tabla.append(fila)

    let boton_borrar = document.querySelectorAll(".borrar_elemento")
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos);
    }
    

}



function borrar_elementos(e){
   let hijo = e.target;
   let abuelo = hijo.parentNode.parentNode

   abuelo.remove()
}


//<button class = "borrar"> Borrar </button>


*/