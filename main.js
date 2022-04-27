let entrada = document.getElementById("textoEntrada");
let salida = document.getElementById("textoSalida");
let encriptar = document.getElementById("botonEncriptar");
let desencriptar = document.getElementById("botonDesencriptar");

let llaves = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
let encriptado = [];

function encriptarTexto() {
  let texto = entrada.value;
  let claves = Object.keys(llaves);

  if (texto === "") {
      document.getElementById("mensajeVacio").classList.add("mostrar");
      document.getElementById("textoSalida").classList.add("ocultar");
      return;
    }

  for (let posicion = 0; posicion < texto.length; posicion++) {
    let coincidenciaLetra = false;
    for (let posicion1 = 0; posicion1 < claves.length; posicion1++) {
      let clave = claves[posicion1];
      if (texto.charAt(posicion) == clave) {
        encriptado[posicion] = llaves[clave];
        coincidenciaLetra = true;
        break;
      }
    }
    if (coincidenciaLetra == false) {
      encriptado[posicion] = texto.charAt(posicion);
    }
    salida.value = encriptado.join("");
  }
}

function desencriptarTexto() {
  let texto = entrada.value;
  let valores = Object.values(llaves);
  let claves = Object.keys(llaves);
  
  if (texto === "") {
      document.getElementById("mensajeVacio").classList.add("mostrar");
      document.getElementById("textoSalida").classList.add("ocultar");
      return;
    }

  for (let posicion = 0; posicion < claves.length; posicion++) {  
    console.log(posicion)   
    let indice = texto.indexOf(valores[posicion]);
      while (indice >= 0) {
        let previo = texto.slice(0, indice);
        let post = texto.slice(indice + valores[posicion].length);
        texto = previo + claves[posicion] + post;
        indice = texto.indexOf(valores[posicion]);   
      }
  }

  salida.value = texto;
}

encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;