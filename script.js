function cifrarMensaje() {
    let diccionario = "abcdefghijklmnñopqrstuvwxyz"; 

    let mensajeOriginal = document.getElementById("mensaje").value.toLowerCase();
    let mensajeCifrado = "";

    let desplazamiento = parseInt(document.getElementById("cifrador").value); 

    for (let i = 0; i < mensajeOriginal.length; i++) {
        let letraOriginal = mensajeOriginal[i];
        let indice = diccionario.indexOf(letraOriginal);

        if (indice !== -1) {
            let indiceCifrado = (indice + desplazamiento) % diccionario.length;
            mensajeCifrado += diccionario[indiceCifrado];
        } else {
            mensajeCifrado += letraOriginal;
        }
    }

    document.getElementById("cifrado").value = mensajeCifrado;
}
function descifrarMensaje() {
    let diccionario2 = "abcdefghijklmnñopqrstuvwxyz";

    let mensajeCifrado2 = document.getElementById("mensaje2").value.toLowerCase();
    let mensajeDescifrado2 = "";

    let desplazamiento2 = parseInt(document.getElementById("cifrador").value);

    for (let i = 0; i < mensajeCifrado2.length; i++) {
        let letraCifrada2 = mensajeCifrado2[i];
        let indiceCifrado2 = diccionario2.indexOf(letraCifrada2);

        if (indiceCifrado2 !== -1) {
            let indiceDescifrado2 = (indiceCifrado2 - desplazamiento2 + diccionario2.length) % diccionario2.length;
            mensajeDescifrado2 += diccionario2[indiceDescifrado2];
        } else {
            mensajeDescifrado2 += letraCifrada2;
        }
    }

    document.getElementById("cifrado2").value = mensajeDescifrado2;
    document.getElementById("cifrado2").disabled = true; 
}