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
      return alert("Ooops! Debes ingresar un texto", "warning");
   }

   const textEncriptado = encriptar(texto.value);
   mensaje.value = textEncriptado;
   texto.value = "";
   mensaje.style.backgroundImage = "none";
}
function btnDesencriptar() {
   if (texto.value.length == 0) {
      return alert("Ooops! Debes ingresar un texto", "warning");
   }

   const textEncriptado = desencriptar(texto.value);
   mensaje.value = textEncriptado;
   texto.value = "";
   mensaje.style.backgroundImage = "none";
}
function btnCopy() {
    if (texto.value.length == 0) {
          return alert('No hay texto para copiar', 'warning');
       }
   copy(mensaje);
}

function encriptar(textoAEncriptar) {
   let textoCifrado = textoAEncriptar.toLowerCase();

   for (const key in ruleCifrado) {
      if (textoCifrado.includes(key)) {
         textoCifrado = textoCifrado.replaceAll(key, ruleCifrado[key]);
      }
   }

   return textoCifrado;
}

function desencriptar(textoADesencriptar) {
   let textoDesencrutado = textoADesencriptar.toLowerCase();

   for (const key in ruleCifrado) {
      let expresionBuscada = new RegExp(ruleCifrado[key], "gi");
      let existe = expresionBuscada.test(textoDesencrutado);

      if (existe) {
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
