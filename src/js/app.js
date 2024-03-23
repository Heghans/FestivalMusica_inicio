document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
    

});


function iniciarApp(){
    // navegacionFija();
    crearGaleria();
    scrollNav();
  
}

// function navegacionFija(){
//     const barra = document.querySelector('.header');  //Seleccionamos mediante query selector el elemento con la clase s modificar
//     const sobreFestival = document.querySelector('.sobre-festival'); //Elejimos donde es que queremos que empieze a mostrarse el nav fijo
//     const body = document.querySelector('body')      //evitamos que haya un salto extrano a la hora del scroll
//     window.addEventListener('scroll', function(){           //Creamos esta function para decir que es cuando se haga scroll 
      
//         if(sobreFestival.getBoundingClientRect().bottom < 0){    
//             barra.classList.add('fijo')
//             body.classList.add('body-scroll')
//         }
//         else{
//             barra.classList.remove('fijo')
//             body.classList.remove('body-scroll')
//         }
//     });
// }


//Funcion de ScrollNav
function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();//Previente el comportamiento por deafult del enlace

            const seccionScroll = e.target.getAttribute('href');     //el e identifica el atributo href con el get, lo que permite brindar el scroll low
            const seccion = document.querySelector(seccionScroll); // Accedemos al valor del enlace
            seccion.scrollIntoView({ behavior: "smooth" });

        });
    });
}


//Funcion Galeria
function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes');


    // El iterador es un bucle de cuantas veces se va a crear el codigo que este adentro, en este caso necesitamos 12 imagenes
    for(let i = 1; i <=12; i++) {
       const imagen = document.createElement('picture');
       imagen.innerHTML = `
       <source srcset="build/img/thumb/${i}.avif" type="image/avif">
       <source srcset="build/img/thumb/${i}.webp" type="image/webp">
       <img loading="lazy" width="200" heigth="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">


       `;
    //Arrow Function que llama a la funcion mostrarImagen mediante un callback
       imagen.onclick = () =>{    //Callback hacia mostrar imagen
        mostarImagen(i);
       }

       galeria.appendChild(imagen);
    }

}

    function mostarImagen(id){
      
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" heigth="300" src="build/img/grande/${id}.jpg" alt="imagen galeria">
        `;

    // Crea el Overlay con la imagen
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay')

    overlay.onclick= ()=>{
        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    }

    //Boton para cerrar el Modal
    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar')
    
    cerrarModal.onclick = () =>{

        const body = document.querySelector('body');
        body.classList.remove('fijar-body')
        overlay.remove();
    };
    overlay.appendChild(cerrarModal);


    // Anade al HTML
    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fijar-body')

    }
