// Sample code adapted from: http://www.chartjs.org/docs/#radar-chart

var ctx = document.getElementById("radar-chart-canvas").getContext("2d");

// All data is scaled to [0, 3000]
var data = {
    labels: ["% White", "% Non-White", "% Home Owners", "% Renters", "Crime"],
    datasets: [
        {
            label: "Laurelhurst",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(28,134,238,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
//            data: [88, 12, 88, 12, 250], // Percentages 0 - 100. Crime data is absolute quantity.
            data: [2640, 360, 2640, 360, 250], // All quantities scaled to [0, 3000]
            lineTension: 100 // Does not seem to have any effect. Default is 0 for straight lines.
        },
        {
            label: "Lents",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
//            data: [50, 50, 57, 43, 2651] // Percentages 0 - 100. Crime data is absolute quantity.
            data: [1500, 1500, 1710, 1290, 2651] // All quantities scaled to [0, 3000]
        }
    ]
};

var options = {
    scale: {
        reverse: false,
        ticks: {
            beginAtZero: true,
            display: false
        },
    },
    elements: {
        line: {
            lineTension: 200  // Does not seem to have any effect.
        }
    }
};

var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});
