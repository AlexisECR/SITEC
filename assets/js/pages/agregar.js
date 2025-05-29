document.getElementById("main-content").addEventListener("click", (e) => {
    if (e.target.id === "btn-guardar") {
        e.preventDefault();
        const nombreInput = document.getElementById("nombre");
        const error = document.getElementById("error-nombre");

        const correo = document.getElementById("correo");
        const telefono = document.getElementById("telefono");
        const tipo_incidente = document.querySelector('input[name="tipo_incidente"]:checked');
        const departamento = document.getElementById("departamento");
        const fecha = document.getElementById("fecha");
        const equipo = Array.from(document.querySelectorAll('input[name="equipo[]"]:checked'));
        const descripcion = document.getElementById("descripcion");


        error.textContent = "";
        nombreInput.classList.remove("input-error");

        if (nombreInput.value.trim() === "") {
            error.textContent = "El campo nombre es obligatorio.";
            nombreInput.classList.add("input-error");
            nombreInput.focus();
        }

        if (correo.value.trim() === "") {
            error.textContent = "El campo correo es obligatorio.";
            correo.classList.add("input-error");
            correo.focus();
        }
        if (telefono.value.trim() === "") {
            error.textContent = "El campo telefono es obligatorio.";
            telefono.classList.add("input-error");
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