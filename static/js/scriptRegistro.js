const nombre = document.getElementById("name")
const apellido = document.getElementById("apellido")
const usuario = document.getElementById("usuario")
const tel = document.getElementById("tel")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const confirmar = document.getElementById("confirmar")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")



form.addEventListener("submit", e=>{
    e.preventDefault()
    if(nombre.nodeValue.length<6){
        warnings += `El nombre no es valido <br>`
    }
})
