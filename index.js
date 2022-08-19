

// creamos los objetos y arrays

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
let chalten = new Viaje (6, "viaje al Chalten", 125000);
let bariloche = new Viaje(7, "Viaje a Bariloche", 10000);
let madryn = new Viaje(8, "Viaje a Puerto Madryn", 99000);
let merlo = new Viaje(9, "Viaje a Merlo, San Luis", 120000);
let budapest = new Viaje(10, "Viaje a Budapest", 55000);
let praga = new Viaje(11, "viaje a Praga", 450000)
let viena = new Viaje(12, "Viaje a Viena", 570000);


console.log(iruya)








viajeARG.push(iruya);
viajeARG.push(cataratas);
viajeARG.push(potrerillo);
viajeARG.push(ushuaia);
viajeARG.push(uco);
viajeARG.push(chalten);
viajeARG.push(bariloche);
viajeARG.push(madryn);
viajeARG.push(merlo);
viajeARG.push(budapest);
viajeARG.push(praga);
viajeARG.push(viena);







// identificamos la posicion de objeto dentro del array- Desestructure un array

let [viaje1, viaje2, viaje3, viaje4, viaje5,viaje6, viaje7, viaje8, viaje9, viaje10, viaje11, viaje12] = viajeARG



// nos conectamos con nuestro HTML
// la idea es que crear un boton que me cotice de acuerdo a la cantidad de pasajeros



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
    
    let pasajeros_iruya = document.getElementById("pasajeros_iruya")
    let pasajeros_Cataratas = document.getElementById("pasajeros_Cataratas")
    let pasajeros_Potrerillo = document.getElementById("pasajeros_Potrerillo")
    let pasajeros_Ushuaia = document.getElementById("pasajeros_Ushuaia")
    let pasajeros_ValleUco = document.getElementById("pasajeros_ValleUco")
    let pasajeros_ElChalten = document.getElementById("pasajeros_ElChalten")
    let pasajeros_Bariloche = document.getElementById("pasajeros_Bariloche")
    let pasajeros_PuertoMadryn = document.getElementById("pasajeros_PuertoMadryn")
    let pasajeros_Merlo = document.getElementById("pasajeros_Merlo")
    let pasajeros_Budapest = document.getElementById("pasajeros_Budapest")
    let pasajeros_Praga = document.getElementById("pasajeros_Praga")
    let pasajeros_Viena = document.getElementById("pasajeros_Viena")

    
    
    
    
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

        else if (nombre_viaje == "El Chalten"){

            let producto = {
                nombre: nombre_viaje,        
                precio: precio,
                cantidad: pasajeros_ElChalten.value,
                total : total(pasajeros_ElChalten.value,viaje6.precio )
            };
        
            carrito.push(producto)
          
        
            let producto_JSON = JSON.stringify(producto)
        
            carrito_storage.push(producto_JSON)
            localStorage.setItem("producto", carrito_storage)
        
            mostrar_carrito(producto);
    
            Swal.fire({
                title: 'Trekking, Amigos, los mejores paisaje, Relax mental',
                text: 'Cotizaste para ir a El chalten "La capital del trekking"',
                imageUrl: 'https://www.welcomeargentina.com/paseos/elchalten7/el-chalten-01.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }

            else if (nombre_viaje == "Bariloche"){

                let producto = {
                    nombre: nombre_viaje,        
                    precio: precio,
                    cantidad: pasajeros_Bariloche.value,
                    total : total(pasajeros_Bariloche.value,viaje7.precio )
                };
            
                carrito.push(producto)
              
            
                let producto_JSON = JSON.stringify(producto)
            
                carrito_storage.push(producto_JSON)
                localStorage.setItem("producto", carrito_storage)
            
                mostrar_carrito(producto);
        
                Swal.fire({
                    title: 'Belleza, Caminatas',
                    text: 'Cotizaste para ir a Bariloche y sus paisajes',
                    imageUrl: 'https://photo620x400.mnstatic.com/52a7c4ca5c3120ce878125e6b67e6f5d/cerro-campanario.jpg?quality=70&format=pjpg',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
                }
    
    
                else if (nombre_viaje == "Puerto Madryn"){

                    let producto = {
                        nombre: nombre_viaje,        
                        precio: precio,
                        cantidad: pasajeros_PuertoMadryn.value,
                        total : total(pasajeros_PuertoMadryn.value,viaje8.precio )
                    };
                
                    carrito.push(producto)
                  
                
                    let producto_JSON = JSON.stringify(producto)
                
                    carrito_storage.push(producto_JSON)
                    localStorage.setItem("producto", carrito_storage)
                
                    mostrar_carrito(producto);
            
                    Swal.fire({
                        title: 'Naturaleza, Ballenas, Pingüinos',
                        text: 'Cotizaste para ir a Puerto Madryn ',
                        imageUrl: 'https://www.viajesylugares.com/images/showid2/4695105?w=1200&zc=4',
                        imageWidth: 400,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                      })
                    }
    
                    else if (nombre_viaje == "Merlo - San Luis"){

                        let producto = {
                            nombre: nombre_viaje,        
                            precio: precio,
                            cantidad: pasajeros_Merlo.value,
                            total : total(pasajeros_Merlo.value,viaje9.precio )
                        };
                    
                        carrito.push(producto)
                      
                    
                        let producto_JSON = JSON.stringify(producto)
                    
                        carrito_storage.push(producto_JSON)
                        localStorage.setItem("producto", carrito_storage)
                    
                        mostrar_carrito(producto);
                
                        Swal.fire({
                            title: 'Relax, Piletones Naturales, Microclima todo el año',
                            text: 'Cotizaste para ir a Merlo San Luis',
                            imageUrl: 'https://tripin.travel/wp-content/uploads/2017/04/chorrosanignacio-fondo.jpg',
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                          })
                        }

                        else if (nombre_viaje == "Budapest"){

                            let producto = {
                                nombre: nombre_viaje,        
                                precio: precio,
                                cantidad: pasajeros_Budapest.value,
                                total : total(pasajeros_Budapest.value,viaje10.precio )
                            };
                        
                            carrito.push(producto)
                          
                        
                            let producto_JSON = JSON.stringify(producto)
                        
                            carrito_storage.push(producto_JSON)
                            localStorage.setItem("producto", carrito_storage)
                        
                            mostrar_carrito(producto);
                    
                            Swal.fire({
                                title: 'Ciudad Imperial, La ciudad de la emperatriz Sissi',
                                text: 'Cotizaste para ir a Budapest, recorda que el pago es en efectivo',
                                imageUrl: 'https://en.unesco.org/creative-cities/sites/default/files/styles/creative_city_940_420/public/budapest_4.jpg?itok=ua0wqidY',
                                imageWidth: 400,
                                imageHeight: 200,
                                imageAlt: 'Custom image',
                              })
                            }

                            else if (nombre_viaje == "Praga"){

                                let producto = {
                                    nombre: nombre_viaje,        
                                    precio: precio,
                                    cantidad: pasajeros_Praga.value,
                                    total : total(pasajeros_Praga.value,viaje11.precio )
                                };
                            
                                carrito.push(producto)
                              
                            
                                let producto_JSON = JSON.stringify(producto)
                            
                                carrito_storage.push(producto_JSON)
                                localStorage.setItem("producto", carrito_storage)
                            
                                mostrar_carrito(producto);
                        
                                Swal.fire({
                                    title: 'Praga, un cuento de hadas!!!!!',
                                    text: 'Cotizaste para ir a Praga, recorda que el pago es en efectivo',
                                    imageUrl: 'https://viajeropeligro.com/wp-content/uploads/2021/07/praga20-1024x589.jpg',
                                    imageWidth: 400,
                                    imageHeight: 200,
                                    imageAlt: 'Custom image',
                                  })
                                }
                                else if (nombre_viaje == "Viena"){

                                    let producto = {
                                        nombre: nombre_viaje,        
                                        precio: precio,
                                        cantidad: pasajeros_Viena.value,
                                        total : total(pasajeros_Viena.value,viaje12.precio )
                                    };
                                
                                    carrito.push(producto)
                                  
                                
                                    let producto_JSON = JSON.stringify(producto)
                                
                                    carrito_storage.push(producto_JSON)
                                    localStorage.setItem("producto", carrito_storage)
                                
                                    mostrar_carrito(producto);
                            
                                    Swal.fire({
                                        title: 'Mozart, Beethoven, Schubert, Johann Strauss en un solo lugar. Viena!!',
                                        text: 'Cotizaste para ir a Viena,  y sus viñedos',
                                        imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/20/06/c6.jpg',
                                        imageWidth: 400,
                                        imageHeight: 200,
                                        imageAlt: 'Custom image',
                                      })
                                    }
    

}

// creamos la funcion para el boton borrar del carrito de compras

function borrar_elementos(e){
    let hijo = e.target;
    let abuelo = hijo.parentNode.parentNode
 
    abuelo.remove()
 }
 
 function total(pasajeros, importe){

    return pasajeros*importe

    
}


//funcion del carrito de compras


function mostrar_carrito(producto){
    let fila = document.createElement("tr");
    fila.innerHTML= `
                      <td>${producto.nombre}</td>
                      <td>${producto.cantidad}</td>
                      <td>${producto.precio}</td>
                      <td>${producto.total}</td>                    
                      <td><button class= "btn-danger borrar_elemento"> Borrar</td>;
                      `;

    let body_tabla = document.getElementById("tbody");
    body_tabla.append(fila)

    let boton_borrar = document.querySelectorAll(".borrar_elemento")
    for(let boton of boton_borrar){
        boton.addEventListener("click", borrar_elementos);
    }

    
    

}


let storage = localStorage.getItem("producto")
let consulta = JSON.parse(storage)

console.log(consulta.nombre)

let mensaje = document.getElementById("mensaje")
let parrafo = document.createElement("p");

parrafo.innerHTML = `El ultimo viaje consultado es  ${consulta.nombre} a un valor por persona de  ${consulta.precio}
<button class = "borrar"> Borrar </button>`;
mensaje.append(parrafo);

let boton_borrar2 = document.querySelectorAll(".borrar");

for(let botone of boton_borrar2){
    botone.addEventListener("click", borrar_elementos2)
}


function borrar_elementos2(e){
    let hijo = e.target;
    let padre = hijo.parentNode
 
    padre.remove()
 }


 let boton_comprar = document.getElementById("comprar")
function redireccionar(){
    location.href = "./html/formulario.html"
}

 boton_comprar.addEventListener("click", redireccionar)

 //Incorporamos FETCH

 let climasalta= document.getElementById("climasalta")
 let climamisiones = document.getElementById("climamisiones")
 let climamendoza = document.getElementById("climamendoza")
 let climaushuaia = document.getElementById("climaushuaia")
 let climapotrerillos = document.getElementById("climapotrerillos")
 let climachalten = document.getElementById("climachalten");
 let climabariloche =  document.getElementById("climabariloche")
 let climamadryn = document.getElementById("climamadryn")
 let climamerlo = document.getElementById("climamerlo")
let climabudapest = document.getElementById("climabudapest")
let climapraga = document.getElementById("climapraga")
let climaviena = document.getElementById("climaviena")

 fetch("https://api.openweathermap.org/data/2.5/weather?q=Salta&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climasalta.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )


fetch("https://api.openweathermap.org/data/2.5/weather?q=Mendoza&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climamendoza.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )


     fetch("https://api.openweathermap.org/data/2.5/weather?q=Potrerillos&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climapotrerillos.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )

fetch("https://api.openweathermap.org/data/2.5/weather?q=Misiones&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climamisiones.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )
fetch("https://api.openweathermap.org/data/2.5/weather?q=Ushuaia&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climaushuaia.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )


     fetch("https://api.openweathermap.org/data/2.5/weather?q=calafate&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climachalten.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )

     fetch("https://api.openweathermap.org/data/2.5/weather?q=bariloche&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climabariloche.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )


     fetch("https://api.openweathermap.org/data/2.5/weather?q=puerto%20madryn&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climamadryn.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )

     fetch("https://api.openweathermap.org/data/2.5/weather?q=merlo&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climamerlo.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )

     fetch("https://api.openweathermap.org/data/2.5/weather?q=budapest&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climabudapest.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )

     fetch("https://api.openweathermap.org/data/2.5/weather?q=praga&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climapraga.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;


     } )


     fetch("https://api.openweathermap.org/data/2.5/weather?q=viena&lang=es&units=metric&appid=c073ed940880847a3c69b1219f150080")
     .then(response=>response.json())
     .then(data=>{

        console.log(data.main),
        console.log("ciudad:", data.name)
        console.log("clima :", data.weather[0].description)
        console.log(" La MAX es : ", data.main.temp)

        climaviena.innerHTML=`<p> Clima: ${data.weather[0].description} </p>`;



     } )