const textArea = document.querySelector(".text-area");
const mensajeContainer = document.querySelector(".mensaje-container");

function procesarTexto(texto, esEncriptar) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    let textoProcesado = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        const original = matrizCodigo[i][esEncriptar ? 0 : 1]; 
        const reemplazo = matrizCodigo[i][esEncriptar ? 1 : 0];
        textoProcesado = textoProcesado.replaceAll(original, reemplazo);
    }

    return textoProcesado;
}

function botonEncriptar() {
    const textoEncriptado = procesarTexto(textArea.value, true);
    mensajeContainer.innerHTML = `<p>${textoEncriptado}</p>`;
}

function botonDesencriptar() {
    const textoDesencriptado = procesarTexto(textArea.value, false);
    mensajeContainer.innerHTML = `<p>${textoDesencriptado}</p>`;
}

function botonLimpiar() {
    textArea.value = "";
    mensajeContainer.innerHTML = `<p>Ningún mensaje fue encontrado</p><p>Ingresa el texto que desees encriptar o desencriptar.</p>`;
}
