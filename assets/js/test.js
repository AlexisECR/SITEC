document.getElementById("main-content").addEventListener("click", (e) => {
    if (e.target.id === "btn-guardar") {
        e.preventDefault();
        const nombreInput = document.getElementById("nombre");
        const errorNombre = document.getElementById("error-nombre");

        const correo = document.getElementById("correo");
        const errorCorreo = document.getElementById("error-correo");

        const telefono = document.getElementById("telefono");
        const errorTelefono = document.getElementById("error-telefono");

        const tipo_incidente = document.querySelector('input[name="tipo_incidente"]:checked');
        const errorIncidente = document.getElementById("error-incidente");

        const departamento = document.getElementById("departamento");
        const errorDepartamento = document.getElementById("error-departamento");

        const fecha = document.getElementById("fecha");
        const errorFecha = document.getElementById("error-fecha");

        const equipo = Array.from(document.querySelectorAll('input[name="equipo[]"]:checked'));
        const errorEquipo = document.getElementById("error-checkbox");

        const descripcion = document.getElementById("descripcion");
        const errorDescripcion = document.getElementById("error-descripcion");


        errorNombre.textContent = "";
        nombreInput.classList.remove("input-error");

        if (nombreInput.value.trim() === "") {
            errorNombre.textContent = "El campo nombre es obligatorio.";
            nombreInput.classList.add("input-error");
        }

        if (correo.value.trim() === "") {
            errorCorreo.textContent = "El campo correo es obligatorio.";
            correo.classList.add("input-error");
        }
        if (telefono.value.trim() === "") {
            errorTelefono.textContent = "El campo telefono es obligatorio.";
            telefono.classList.add("input-error");
        }

        if (!tipo_incidente) {
            errorIncidente.textContent = "Debe seleccionar un tipo de incidente.";
        }

        if (departamento.value === "") {
            errorDepartamento.textContent = "Seleccione un departamento.";
            departamento.classList.add("input-error");
        }

        if (fecha.value === "") {
            errorFecha.textContent = "Fecha es obligatorio.";
            fecha.classList.add("input-error");
        }

        if (equipo.length === 0) {
            errorEquipo.textContent = "Equipo es obligatorio.";
            fecha.classList.add("input-error");
        }

        if (descripcion.value === "") {
            errorDescripcion.textContent = "Descripcion es obligatorio.";
            descripcion.classList.add("input-error");
        }




        /*const registro = {
            nombre: document.getElementById("nombre")?.value.trim() || "",
            correo: document.getElementById("correo")?.value.trim() || "",
            telefono: document.getElementById("telefono")?.value.trim() || "",
            tipo_incidente: document.querySelector('input[name="tipo_incidente"]:checked')?.value || "",
            departamento: document.getElementById("departamento")?.value || "",
            fecha: document.getElementById("fecha")?.value || "",
            equipo: Array.from(document.querySelectorAll('input[name="equipo[]"]:checked')).map(cb => cb.value),
            descripcion: document.getElementById("descripcion")?.value.trim() || ""
        };
        console.log(JSON.stringify(registro, null, 2));*/
    }
});

function obtenerElementos(idCampo, idError){
    return{
        campo: document.getElementById(idCampo),
        error: document.getElementById(idError),
    }
}