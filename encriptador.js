const ingresarTexto =document.getElementById("ingresarTexto")
const botonEncriptar =document.getElementById("botonEncriptar")
const botonDesencriptar =document.getElementById("botonDesencriptar")
const botonCopiar =document.getElementById("botonCopiar")
const mensajeEncriptado =document.getElementById("mensajeEncriptado")
const derechaIndicacion =document.getElementById("derechaIndicacion")
const monito =document.getElementById("monito")
const textoDerecha =document.getElementById("textoDerecha")



let cambio = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]


botonEncriptar.addEventListener("click", () => {
    let texto = ingresarTexto.value.toLowerCase()
    function encriptar(textoIngresado){
        for(let i = 0; i < cambio.length; i++){
            if(textoIngresado.includes(cambio[i][0])){
               textoIngresado = textoIngresado.replaceAll(cambio[i][0],cambio[i][1])
            };
        };
        return textoIngresado

    };
    let textoEncriptado = encriptar(texto)
    mensajeEncriptado.innerHTML = textoEncriptado
    monito.style.display= "none"
    derechaIndicacion.style.display= "none"
    botonCopiar.style.display="block"
    textoDerecha.classList.add("ajuste");
    mensajeEncriptado.classList.add("ajuste");
})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresarTexto.value.toLowerCase();
    function desencriptar(textoIngresado){
        for(let i = 0; i < cambio.length; i++){
            if (textoIngresado.includes(cambio[i][1])){
                textoIngresado = textoIngresado.replaceAll(cambio[i][1], cambio[i][0])
            }
        }
        return textoIngresado
    }
    const textoDesencriptado = desencriptar(texto);
    mensajeEncriptado.innerHTML = textoDesencriptado;
})

textoDerecha
