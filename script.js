botonUno = document.getElementById("btnUno");
botonDos = document.getElementById("btnDos");
botonTres = document.getElementById("btnTres");
botonCuatro = document.getElementById("btnCuatro");

botonDos.setAttribute("disabled", "true");
botonTres.setAttribute("disabled", "true");
botonCuatro.setAttribute("disabled", "true");

const main = document.getElementById("main");

function btnUnoClick() {
    removerHijo();

    const label = document.createElement("label");
    label.textContent = "Elige el número de tabla: ";

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.classList.add("input");
    input.value = 1;    
    input.max = 10;
    input.min = 1;

    const titulo = document.createElement("h2");
    titulo.textContent = "Fichas";
    titulo.classList.add("tituloJuegoUno");

    const sub_titulo = document.createElement("h2");    

    const boton = document.createElement("Button");
    boton.classList.add("boton", "btnIniciar");
    boton.textContent = "Iniciar";

    const botonSalir = document.createElement("Button");
    botonSalir.classList.add("boton", "btnRegresar");
    botonSalir.textContent = "Regresar";    
    botonSalir.addEventListener("click", function(){        
        window.location.href = "index.html";
    });

    boton.addEventListener("click", function () {        
        if(input.value>0 && input!=null){
            sub_titulo.textContent = "Elige dos fichas y escribe el resultado: ";
            sub_titulo.classList.add("subtitulo");
            boton.setAttribute("disabled", "true");
            const divPadre = document.createElement("div");
            divPadre.classList.add("tarjetaPadre");
            main.appendChild(divPadre);    
            for (let i = 0; i < 10; i++) {                        
                const divs = document.createElement("div");
                divs.textContent = i+1;        
                divs.classList.add("tarjeta");
                const colorAleatorio = generarColorAleatorio();
                divs.style.backgroundColor = colorAleatorio;
                divs.addEventListener("click", function(){                
                    Swal.fire({
                        title: 'La múltiplicación de ' + input.value + ' x ' + divs.textContent + ' es...',
                        input: 'text',
                        inputPlaceholder: 'Escribe tu resultado aquí...',
                        showCancelButton: true,
                        confirmButtonText: 'Comprobar',
                        cancelButtonText: 'Cancelar'
                      }).then((result) => {
                        if (result.isConfirmed) {                    
                            const primer = input.value;
                            const divsValor = divs.textContent;
                            let operacion = primer * divsValor;
                            if(result.value == operacion){
                                Swal.fire({
                                    title: 'Felicidades, lo tuviste bien!',
                                    showCancelButton: false,
                                    confirmButtonText: 'Listo',                                    
                                  })
                                  divs.remove();
                                  if(divPadre.childElementCount == 0){
                                    Swal.fire({
                                        title: 'Felicidades, sigue prácticando!',
                                        showCancelButton: false,                                                                         
                                      })
                                    boton.setAttribute("disabled", "false");                                      
                                }
                            }else{
                                Swal.fire({
                                    title: 'Vuelve a Intentarlo',
                                    showCancelButton: false,
                                    confirmButtonText: 'Listo',                                    
                                  })
                            }                      
                        } else {
                          console.log("El usuario ha cancelado el cuadro de diálogo.");
                        }
                      });
                      
                });
                divPadre.appendChild(divs);                   
            }            
        }    
    });

    main.appendChild(label);
    main.appendChild(input);
    main.appendChild(boton);
    main.appendChild(botonSalir);
    main.appendChild(titulo);
    main.appendChild(sub_titulo);
}


function generarColorAleatorio() {
    const letrasHex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function iniciarDivs() { }

function btnDosClick() {
    removerHijo();
}

function btnTresClick() {
    removerHijo();
}

function btnCutroClick() {
    removerHijo();
}

function removerHijo() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}
