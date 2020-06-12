// Script para desplegar Gráfico Convenios tipo Dona

var ctx = document.getElementById('dona').getContext('2d');
var chart = new Chart(ctx, {


    // El tipo de gráfico es una Dona
    type: 'doughnut',


    // Conjunto de datos para el gráfico
    data: {
        labels: ['Fonasa', 'Isapres', 'Particular'],
        datasets: [{
            label: 'Gráfico convenios',
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
            borderColor: ['#ffffff', '#ffffff', '#ffffff'],
            data: ['55', '35', '10']
        }]
    },

    // Configurar opciones para mejorar gráfico 
    options: {
        maintainAspectRatio: false,
        legend: {
            display: false,
            position: 'top',
            reverse: false
        },
        title: {
            display: false,
            text: 'gráfico'
        }
    }
});