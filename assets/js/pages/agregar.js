document.getElementById("main-content").addEventListener("click", (e) => {
    if (e.target.id === "btn-guardar") {
        e.preventDefault();

        let registroValido = true;

        const camposAValidar = [
            {campoId: "prioridad", errorId: "error-prioridad", mensaje: "Se debe seleccionar una prioridad."},
            {campoId: "correo", errorId: "error-correo", mensaje: "El campo correo es obligatorio."},
            {campoId: "telefono", errorId: "error-telefono", mensaje: "El campo teléfono es obligatorio."},
            {campoId: "tecnico", errorId: "errorTecnico", mensaje: "Se debe seleccionar un Técnico."},
            {campoId: "fecha", errorId: "error-fecha", mensaje: "El campo fecha es obligatorio."},
            {campoId: "descripcion", errorId: "error-descripcion", mensaje: "El campo descripción es obligatorio."}
        ];

        const categoria = document.querySelector('input[name="categoria"]:checked');
        const errorCategoria = document.getElementById("errorCategoria");

        const  equipo= Array.from(document.querySelectorAll('input[name="equipo[]"]:checked'));
        const errorEquipo = document.getElementById("errorCheckbox");

        camposAValidar.forEach(({campoId, errorId, mensaje}) => {
            const campo = document.getElementById(campoId);
            const error = document.getElementById(errorId);
            if(!validaInput(campo, error, mensaje)){
                registroValido = false;
            }
        });
        if (!validaRadioButton(categoria, errorCategoria)){
            registroValido = false;
        }

        if (!validaCheckbox(equipo, errorEquipo)) {
            registroValido = false;
        }

        imprimirJson(registroValido);
    }
});

function validaInput(campo, error, mensaje) {
    if (campo.value.trim() === "") {
        error.textContent = mensaje;
        campo.classList.add("input-error");
        return false;
    } else {
        error.textContent = "";
        campo.classList.remove("input-error");
        return true;
    }
}

function validaRadioButton(campo, error) {
    if (!campo) {
        error.textContent = "Debe seleccionar una categoría.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validaCheckbox(campo, error) {
    if (campo.length === 0) {
        error.textContent = "Debe seleccionar al menos un equipo.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function imprimirJson(registroValido) {
    if (registroValido) {
        const registro = {
            nombre: document.getElementById("nombre")?.value.trim() || "",
            correo: document.getElementById("correo")?.value.trim() || "",
            telefono: document.getElementById("telefono")?.value.trim() || "",
            tipo_incidente: document.querySelector('input[name="tipo_incidente"]:checked')?.value || "",
            departamento: document.getElementById("departamento")?.value || "",
            fecha: document.getElementById("fecha")?.value || "",
            equipo: Array.from(document.querySelectorAll('input[name="equipo[]"]:checked')).map(cb => cb.value),
            descripcion: document.getElementById("descripcion")?.value.trim() || ""
        };
        console.log(JSON.stringify(registro, null, 2));
    }
}