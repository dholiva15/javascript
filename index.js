

// Continuo con el proyecto del prestamo   

class Viaje{
    constructor(id, nombre ,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
       
    }




}

let viajeARG = []
let viajeLatinoamerica = []
let viajeEuropa = []
let viajeAsia = []


let iruya = new Viaje(1,"Viaje a Iruya", 25000 );
let cataratas = new Viaje(2, "Viaje a Cataratas", 55000 );
let potrerillo = new Viaje(3, "Viaje a Potrerillo", 65000 );
let ushuaia = new Viaje(4 , "Viaje a Ushuaia", 150000);
let uco = new Viaje(5, "Viaje a Valle de Uco", 45000 );
let bariloche = new Viaje(6, "Viaje a Bariloche", 70000);
let cumbrecita = new Viaje(7, "Viaje a La Cumbrecita", 45000);
let sanrafael = new Viaje(8, "Viaje a San Rafael", 85000);
let valleluna = new Viaje(9, "Viaje de la Luna", 76000);
let calafate = new Viaje(10, "viaje al Calafate", 105000)
let chalten = new Viaje (11, "viaje al Chalten", 145000);
let potrero = new Viaje(12, "Viaje a Potrero de los Funes", 55000);
let madryn = new Viaje(13, "Viaje a Puerto Madryn", 90000);
let esquel = new Viaje(14, "Viaje a Esquel y Trevellin", 115000)

console.log(iruya)



// construir 5 viajes mas




viajeARG.push(iruya);
viajeARG.push(cataratas);
viajeARG.push(potrerillo);
viajeARG.push(ushuaia);
viajeARG.push(uco);
viajeARG.push(bariloche);
viajeARG.push(cumbrecita);
viajeARG.push(sanrafael);
viajeARG.push(valleluna);
viajeARG.push(calafate);
viajeARG.push(chalten);
viajeARG.push(potrero);
viajeARG.push(madryn);
viajeARG.push(esquel);






// identificamos la posicion de objeto dentro del array- Desestructure un array

let [viaje1, viaje2, viaje3, viaje4, viaje5] = viajeARG







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
    
    
    
    
    if(nombre_viaje == "Iruya"){



        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_iruya.value,
            total : total(pasajeros_iruya.value,viaje1.precio )
        };

        carrito.push(producto)
        console.log(carrito)

        let producto_JSON = JSON.stringify(producto)

        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)

        mostrar_carrito(producto);

        Swal.fire({
            title: 'Excelente!',
            text: 'Seleccionaste cotizar un viaje a Iruya, ',
            imageUrl: 'https://tripin.travel/wp-content/uploads/2020/06/vista-aerea-iruya-fcbk-1024x538.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })


    }


  else if(nombre_viaje == "Cataratas"){

    let producto = {
        nombre: nombre_viaje,        
        precio: precio,
        cantidad: pasajeros_Cataratas.value,
        total : total(pasajeros_Cataratas.value,viaje2.precio )
    };

    carrito.push(producto)
    console.log(carrito)

    let producto_JSON = JSON.stringify(producto)

    carrito_storage.push(producto_JSON)
    localStorage.setItem("producto", carrito_storage)

    mostrar_carrito(producto);


    Swal.fire({
        title: 'En hora buena!',
        text: 'Cotizaste para viajar a una de las 7 maravillas naturales del mundo ',
        imageUrl: 'https://www.fundacionaquae.org/wp-content/uploads/2016/01/800px_iguacu-002.jpg.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })



    
        }
    
   else if (nombre_viaje == "Potrerillo"){



    let producto = {
        nombre: nombre_viaje,        
        precio: precio,
        cantidad: pasajeros_Potrerillo.value,
        total : total(pasajeros_Potrerillo.value,viaje3.precio )
    };

    carrito.push(producto)
    console.log(carrito)

    let producto_JSON = JSON.stringify(producto)

    carrito_storage.push(producto_JSON)
    localStorage.setItem("producto", carrito_storage)

    mostrar_carrito(producto);
    Swal.fire({
        title: 'Es hora de ir a la Montaña',
        text: 'Cotizaste Potrerillos Mendoza  ',
        imageUrl: 'https://d3tf9yuhsp2bpn.cloudfront.net/images/2020/06/26/20200626-1593195900-cacheuta-y-potrerillos-desde-mendoza-tu-experiencia-3.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })




        
            }

      else if (nombre_viaje == "Ushuaia"){

        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_Ushuaia.value,
            total : total(pasajeros_Ushuaia.value,viaje4.precio )
        };
    
        carrito.push(producto)
        console.log(carrito)
    
        let producto_JSON = JSON.stringify(producto)
    
        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)
    
        mostrar_carrito(producto);

        Swal.fire({
            title: 'Al fin del Mundo',
            text: 'Cotizaste para conocer la ciudas mas Austral del mundo',
            imageUrl: 'https://www.eltiempo.com/files/image_640_428/uploads/2022/05/14/6280662b1a91a.jpeg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })



            
                }

       else if (nombre_viaje == "Valle de Uco"){

        let producto = {
            nombre: nombre_viaje,        
            precio: precio,
            cantidad: pasajeros_ValleUco.value,
            total : total(pasajeros_ValleUco.value,viaje5.precio )
        };
    
        carrito.push(producto)
      
    
        let producto_JSON = JSON.stringify(producto)
    
        carrito_storage.push(producto_JSON)
        localStorage.setItem("producto", carrito_storage)
    
        mostrar_carrito(producto);

        Swal.fire({
            title: 'Vinos, Paisaje, Relax',
            text: 'Cotizaste para ir a Mendoza y sus viñedos',
            imageUrl: 'https://diariondi.com/wp-content/uploads/2020/05/Valle-del-Uco-Mendoza-768x434-1.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })


                
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


let storage = sessionStorage.getItem("producto")

console.log(storage)

let mensaje = document.getElementById("mensaje")
let parrafo = document.createElement("p");

parrafo.innerHTML = `El ultimo viaje consultado es  ${ storage} 
<button class = "borrar"> Borrar </button>`;
mensaje.append(parrafo)

let boton_borrar2 = document.querySelectorAll(".borrar");
console.log(boton_borrar2)
for(let boton of boton_borrar2){
    boton.addEventListener("click", borrar_elementos2)
}
function borrar_elementos2(e){
    let hijo = e.target;
    let abuelo = hijo.parentNode
 
    abuelo.remove()
 }
