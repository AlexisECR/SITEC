document.addEventListener("DOMContentLoaded", () => {
    cargarPagina("login");
});

function cargarPagina(pagina) {
    fetch(`pages/${pagina}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("main-content").innerHTML = html;

            const mostrar = pagina !== "login";
            document.getElementById("main-content").style.padding = pagina === "login" ? "0" : "";

            document.getElementById("sidebar").style.display = mostrar ? "block" : "none";
            document.getElementById("header").style.display = mostrar ? "block" : "none";
            document.getElementById("footer").style.display = mostrar ? "block" : "none";

            if (pagina === "dashboard") {
                const existeChart = document.querySelector('script[src="https://cdn.jsdelivr.net/npm/chart.js"]');
                if (!existeChart) {
                    const chartScript = document.createElement("script");
                    chartScript.src = "https://cdn.jsdelivr.net/npm/chart.js";
                    chartScript.defer = true;
                    chartScript.dataset.vista = "true";
                    chartScript.onload = () => {
                        // Solo después de que Chart.js se cargue, agregamos el script local
                        const scriptLocal = document.createElement("script");
                        scriptLocal.src = "assets/js/pages/dashboard.js";
                        scriptLocal.defer = true;
                        scriptLocal.dataset.vista = "true";
                        document.body.appendChild(scriptLocal);
                    };
                    document.body.appendChild(chartScript);
                } else {
                    // Chart.js ya está, solo agregamos dashboard.js si no existe
                    const existeDashboard = document.querySelector('script[src="assets/js/pages/dashboard.js"]');
                    if (!existeDashboard) {
                        const scriptLocal = document.createElement("script");
                        scriptLocal.src = "assets/js/pages/dashboard.js";
                        scriptLocal.defer = true;
                        scriptLocal.dataset.vista = "true";
                        document.body.appendChild(scriptLocal);
                    }
                }
            }
        })
        .catch(error => console.error("Error al cargar la página:", error));
}
