//----- Selección de Elementos -----//

const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");


//------------Botón de Encriptar -------//

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault()
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
     
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El texto no debe contener acentos y/o caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El texto solo puede incluir minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        texto = texto.replace(/a/mg, "ai");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

})


//----------Boton desencriptar-----------//


btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");
     
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El campo de texto no debe estar vacío";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El texto no debe contener acentos y/o caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);

    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "650";
        aviso.textContent = "El texto solo puede incluir minúsculas";

        setTimeout(()=>{
            aviso.removeAttribute("style");

        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }

})


//---------------Boton de Copiar ------------------//

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})