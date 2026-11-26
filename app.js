const claveNombre = "localstorage_explicacion_nombre";

const formGuardar = document.getElementById("formGuardar");
const nombreGuardar = document.getElementById("nombreGuardar");
const resultadoGuardar = document.getElementById("resultadoGuardar");

formGuardar.addEventListener("submit", function() {
    event.preventDefault();

    const nombre = nombreGuardar.value.trim();
    if (nombre === "") {
        resultadoGuardar.textContent = "Escribe un nombre antes de guardarlo.";
        return;
    }

    localStorage.setItem(claveNombre, nombre);
    resultadoGuardar.textContent = "Nombre guardado correctamente.";
    formGuardar.reset();
});

const formMostrar = document.getElementById("formMostar");
const resultadoMostrar = document.getElementById("resultadoMostrar");

formMostrar.addEventListener("submit", function(){
    event.preventDefault();

    const nombreGuardado = localStorage.getItem(claveNombre);
    resultadoMostrar.textContent= nombreGuardado === null
    ? "No hay un nombre guardado."
    : "nombre guardado: "+ nombreGuardado;
});

const formEditar = document.getElementById("formEditar");
const nombreEditar = document.getElementById("nombreEditar");
const resultadoEditar = document.getElementById("resultadoEditar");

formEditar.addEventListener("submit", function(){
    event.preventDefault();

    const nuevoNombre = nombreEditar.value.trim();
    if(nuevoNombre === ""){
        resultadoEditar.textContent= "Escribir el nuevo nombre.";
        return;
    }

    localStorage.setItem(claveNombre, nuevoNombre);
    resultadoEditar.textContent= "Nombre actualizado correctamente.";
    formEditar.reset();
});

const formEliminar = document.getElementById("formEliminar");
const resultadoEliminar = document.getElementById("resultadoEliminar");

formEliminar.addEventListener("submit", function(){
    event.preventDefault();

    localStorage.removeItem(claveNombre);
    resultadoEliminar.textContent = "Nombre eliminado."
})

const formMascota = document.getElementById("formMascota");

formMascota.addEventListener("submit", (event) => {
    event.preventDefault();

    const mascota = {
        nombre: document.getElementById("mascota").value,
        raza: document.getElementById("raza").value,
        edad: Number(document.getElementById("edad").value)
    };

    localStorage.setItem("mascota", JSON.stringify(mascota));
});



