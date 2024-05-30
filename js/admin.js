document.addEventListener('DOMContentLoaded', (event) => {
    // Exemplo de JSON

    $.getJSON('https://apinintendistas.onrender.com/api/estatisticas', function (data) {
        if (data != undefined) {


            graficoBarras(data[0].Hashtags);
            graficoCircular(data[1].Eventos);

            document.getElementById("contas").innerHTML = `Dia com mais noticias: ${data[2].Contas[0].DiaComMaisNoticias}, com um total de ${data[2].Contas[0].Quantidade} <br> Dia com menos Noticias ${data[2].Contas[2].DiaComMenosNoticias}, com um total de ${data[2].Contas[2].Quantidade} <br> Media de Noticias Por dia: ${data[2].Contas[1].MediaNoticiasPorDia} <br> Noticias publicadas está semana ${data[2].Contas[3].NoticiasNaSemana}`;
        }

    });



});

function graficoBarras(data) {

    const labels = data.map(item => Object.keys(item)[0]);
    const quantities = data.map(item => Object.values(item)[0]);

    const ctx = document.getElementById('barras').getContext('2d');
    const config = {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de Referências',
                data: quantities,
                backgroundColor: 'rgba(75, 192, 192, 1)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    };

    new Chart(ctx, config);
}

function graficoCircular(data) {

    const ctx = document.getElementById('ciruclar').getContext('2d');

    const labels = data.map(item => Object.keys(item)[0]);
    const quantities = data.map(item => Object.values(item)[0]);

    const config = {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de Referências',
                data: quantities,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Quantidade de Referências por Hashtag'
                }
            }
        }
    };

    new Chart(ctx, config);
}

// Chama a função para criar o gráfico com os dados JSON