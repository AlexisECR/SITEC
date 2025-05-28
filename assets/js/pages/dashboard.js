(function initDashboardCharts() {
    const pieChartEl = document.getElementById('pieChart');
    const barChartEl = document.getElementById('barChart');
    const pieCtx = pieChartEl.getContext('2d');

    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: ['Crítica', 'Alta', 'Media', 'Baja'],
            datasets: [{
                data: [5, 12, 8, 3], // Reemplaza con tus datos reales
                backgroundColor: ['#ff4d4d', '#ff9933', '#ffc107', '#28a745']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    const barCtx = barChartEl.getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['2025-05-15', '2025-05-16', '2025-05-17', '2025-05-18', '2025-05-19'],
            datasets: [{
                label: 'Incidentes',
                data: [3, 5, 7, 4, 6], // Reemplaza con tus datos reales
                backgroundColor: '#007bff'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})();
