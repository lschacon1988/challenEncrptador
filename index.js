let texto = document.getElementById("text-area");
let mensaje = document.getElementById("mensaje");

/**
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */
let ruleCifrado = {
   e: "enter",
   i: "imes",
   a: "ai",
   o: "ober",
   u: "ufat",
   " ": " ",
};

function btnEncriptar() {
    if (texto.value.length == 0) {
        return alert("Ooops! Debes ingresar un texto", "warning");}

   const textEncriptado = encriptar(texto.value);
   mensaje.value = textEncriptado;
   texto.value = "";
   mensaje.style.backgroundImage = "none";
}
function btnDesencriptar() {
    if (texto.value.length == 0) {
        return alert("Ooops! Debes ingresar un texto", "warning");}

   const textEncriptado = desencriptar(texto.value);
   mensaje.value = textEncriptado;
   texto.value = "";
   mensaje.style.backgroundImage = "none";
}
function btnCopy() {
    const textEncriptado = copy(mensaje);
    return
}


function encriptar(textoAEncriptar) {
   let textoCifrado = textoAEncriptar.toLowerCase();


   for (const key in ruleCifrado) {
      
      if (textoCifrado.includes(key)) {
         textoCifrado = textoCifrado.replaceAll(key, ruleCifrado[key]);
        }
    }
    console.log(textoCifrado);
   

   return textoCifrado;
}

function desencriptar(textoADesencriptar) {
   let textoDesencrutado = textoADesencriptar.toLowerCase();

   for (const key in ruleCifrado) {    
        let expresionBuscada = new RegExp(ruleCifrado[key], "gi");
        let existe = expresionBuscada.test(textoDesencrutado)
        
      if(existe) {
        
         textoDesencrutado = textoDesencrutado.replaceAll(
            expresionBuscada,
            key
         );
      }
   }

   return textoDesencrutado;
}

function copy(textCopy) {
    let copytex = textCopy;
    copytex.select();
    copytex.setSelectionRange(0, textCopy.value.length);
    document.execCommand("copy");
    alert("Texto copiado: " + copytex.value);
    
}

// let tituloMensaje = document.getElementById("titulo-mensaje");
// let parrafo = document.getElementById("parrafo");
// let muñeco = document.getElementById("muñeco");

// let textoCifrado = texto
//    .replace(/e/gi, "enter")
//    .replace(/i/gi, "imes")
//    .replace(/a/gi, "ai")
//    .replace(/o/gi, "ober")
//    .replace(/u/gi, "ufat");

// if (texto.length != 0) {
//    document.getElementById("texto").value = textoCifrado;
//    tituloMensaje.textContent = "Texto encriptado con éxito";
//    parrafo.textContent = "";
//    muñeco.src = "./img/encriptado.jpg";
// } else {
//    muñeco.src = "./img/muñeco.png";
//    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//    parrafo.textContent =
//       "Ingresa el texto que deseas encriptar o desencriptar";
//    swal("Ooops!", "Debes ingresar un texto", "warning");
// }

// let texto = document.getElementById("texto").value;
// let tituloMensaje = document.getElementById("titulo-mensaje");
// let parrafo = document.getElementById("parrafo");
// let muñeco = document.getElementById("muñeco");

// let textoCifrado = texto
//    .replace(/enter/gi, "e")
//    .replace(/imes/gi, "i")
//    .replace(/ai/gi, "a")
//    .replace(/ober/gi, "o")
//    .replace(/ufat/gi, "u");

// if (texto.length != 0) {
//    document.getElementById("texto").value = textoCifrado;
//    tituloMensaje.textContent = "Texto desencriptado con éxito";
//    parrafo.textContent = "";
//    muñeco.src = "./img/desencriptado.jpg";
// } else {
//    muñeco.src = "./img/muñeco.png";
//    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//    parrafo.textContent =
//       "Ingresa el texto que deseas encriptar o desencriptar";
//    swal("Ooops!", "Debes ingresar un texto", "warning");
// }
