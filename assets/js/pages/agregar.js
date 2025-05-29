document.getElementById("main-content").addEventListener("click", (e) => {
    if (e.target.id === "btn-guardar") {
        e.preventDefault();

        const camposAValidar = [
            { campoId: "nombre", errorId: "error-nombre", mensaje: "El campo nombre es obligatorio." },
            { campoId: "correo", errorId: "error-correo", mensaje: "El campo correo es obligatorio." },
            { campoId: "telefono", errorId: "error-telefono", mensaje: "El campo teléfono es obligatorio." },
            { campoId: "departamento", errorId: "error-departamento", mensaje: "El campo departamento es obligatorio." },
            { campoId: "fecha", errorId: "error-fecha", mensaje: "El campo fecha es obligatorio." },
            { campoId: "descripcion", errorId: "error-descripcion", mensaje: "El campo descripción es obligatorio." }
        ];

        const tipo_incidente = document.querySelector('input[name="tipo_incidente"]:checked');
        const errorIncidente = document.getElementById("error-incidente");

        const equipo = Array.from(document.querySelectorAll('input[name="equipo[]"]:checked'));
        const errorEquipo = document.getElementById("error-checkbox");

        camposAValidar.forEach(({ campoId, errorId, mensaje }) => {
            const campo = document.getElementById(campoId);
            const error = document.getElementById(errorId);
            validaInput(campo, error, mensaje);
        });

        console.log(camposAValidar.forEach(campoId)f);


        /*  if (correo.value.trim() === "") {
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
  */



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

function validaInput(campo, error, mensaje) {
    if (campo.value.trim() === "") {
        error.textContent = mensaje;
        campo.classList.add("input-error");
    } else {
        error.textContent = "";
        campo.classList.remove("input-error");
    }
}
