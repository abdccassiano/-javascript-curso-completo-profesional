window.onload = iniciar;

function iniciar() {
    //Botón Agregar escucha el clic
    var btnAgregar = document.getElementById("btnAgregar");
    var btnBorrar = document.getElementById("btnBorrar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    btnBorrar.addEventListener("click", clickBtnBorrar);

    // Renderiza las notas
    mostrarNotas();
}

function clickBtnAgregar() {
    // Traemos al txtNotas
    var txtNota = document.getElementById("txtNota");

    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    
    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas);
    
    //Queda asignado al localStorage
    //localStorage.nota = txtNota.value;
    mostrarNotas();
}

function mostrarNotas() {

    // Trae el div notas
    var divNotas = document.getElementById("divNotas");
    // Le asigna las notas desde el localStorage
    //divNotas.innerHTML = localStorage.nota;
    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    var html = "";
    for (var nota of notas) {
        html += nota + "<br />";
    }
    divNotas.innerHTML = html;
}

function clickBtnBorrar() {
    localStorage.clear();
    mostrarNotas();
}