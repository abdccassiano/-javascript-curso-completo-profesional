window.onload = iniciar;

function iniciar() {
    //Botón Agregar escucha el clic
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);

    // Renderiza las notas
    mostrarNotas();
}

function clickBtnAgregar() {
    // Traemos al txtNotas
    var txtNota = document.getElementById("txtNota");

    //Queda asignado al localStorage
    localStorage.nota = txtNota.value;

    mostrarNotas();
}

function mostrarNotas() {

    // Trae el div notas
    var divNotas = document.getElementById("divNotas");
    // Le asigna las notas desde el localStorage
    divNotas.innerHTML = localStorage.nota;

}