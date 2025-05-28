document.getElementById("btn-guardar").addEventListener("click", function () {
    const data = {
        nombre: document.getElementById("nombre").value.trim(),
        correo: document.getElementById("correo").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        tipo_incidente: document.querySelector('input[name="tipo_incidente"]:checked')?.value || "",
        departamento: document.getElementById("departamento").value,
        fecha: document.getElementById("fecha").value,
        equipo: Array.from(document.querySelectorAll('input[name="equipo[]"]:checked')).map(el => el.value),
        descripcion: document.getElementById("descripcion").value.trim(),
    };

    console.log("Datos del formulario en JSON:");
    console.log(JSON.stringify(data, null, 2));
});