var ctx = document.getElementById("barChart");
var myChart = new Chart(ctx, {
type: 'bar',
data: {
    labels: ["", "", "", "", ""],
    datasets: [{
        // label: 'Home OwnerShip',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgb(21,145,143)',
            'rgb(35,69,114)',
            'rgb(23,56,89)',
            'rgb(15,40,62)',
            'rgb(21,145,143)'
        ],
    }]
},
options: {
    title: {
            // display: true,
            text: 'London Tech Jobs website',
            fontSize: 52
        },
    tooltips: {
        enabled: false
    },
    legend: {
            display: false
         },
    scales: {
        yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero:true,
                 display: false
            },
            gridLines: {
                    display: false,
                    drawBorder: false
                }
        }],
        xAxes: [{
            stacked: true,
             barPercentage: 1.2,
            // categoryPercentage: .5,
            gridLines: {
                display: false,
                drawBorder: false,
                offsetGridLines: true
            }
        }]
    }
}
});

var ctx = document.getElementById("pieChart");
var myChart = new Chart(ctx, {
type: 'doughnut',
data: {
    labels: ["", "", "", "", ""],
    datasets: [{
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
            'rgb(21,145,143)',
            'rgb(35,69,114)',
            'rgb(23,56,89)',
            'rgb(15,40,62)',
            'rgb(21,145,143)'
        ]
    }]
},
options: {
    title: {
        // display: true,
        text: 'LEDC’s social media channels',
        fontSize: 82
    },
    tooltips: {
    enabled: false
    },
    elements: {
        arc: {
      borderWidth: 15
    }
},
    legend: {
        display: false
     },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                 display: false
            },
            gridLines: {
                    display: false,
                    drawBorder: false
                }
        }],
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
                offsetGridLines: true
            }
        }]
    }
}
});

var ctx = document.getElementById("areaChart").getContext('2d');

var gradient = ctx.createLinearGradient(0, 500, 0, 1000);
gradient.addColorStop(0, "rgb(34,67,112)");
gradient.addColorStop(1, "rgb(255,255,255)");

var gradient2 = ctx.createLinearGradient(0, 0, 0, 700);
gradient2.addColorStop(0, "rgb(21,147,144)");
gradient2.addColorStop(1, "rgb(218,233,236)");

var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["", "", "", "", ""],
    datasets: [{
     
        fill: true, 
        backgroundColor: gradient,
        data: [7, 10, 13, 20, 18, 22, 23],
    },
    {
        fill: true,
        backgroundColor: gradient2,
        data: [12, 14, 22, 35, 28, 30, 32],
    }
        
    ]
},
options: {
    title: {
    // display: true,
    text: 'London Tech Jobs website or Digital Creative portal',
    fontSize: 52
},
    legend: {
        display: false
     },
    scales: {
        yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero:true,
                 display: true
            },
        gridLines: {
            display: true,
            drawBorder: true
        }
        }],
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
                offsetGridLines: true
            }
        }]
    }
}
});

var ctx = document.getElementById("testChart");
var myChart = new Chart(ctx, {
type: 'polarArea',
data: {
    labels: ["", "", "", "", ""],
    datasets: [{
        // fill: 'origin',
        // label: 'Home OwnerShip',
        data: [12, 14, 22, 35, 28],
         backgroundColor: [
            'rgb(21,145,143)',
            'rgb(35,69,114)',
            'rgb(23,56,89)',
            'rgb(15,40,62)',
            'rgb(21,145,143)'
        ]
        
    }]
},
options: {
    title: {
        // display: true,
        text: 'matches as a result of the campaign',
        fontSize: 82
    },
    tooltips: {
    enabled: false
    },
    elements: {
    arc: {
      borderWidth: 15
    }
},
        legend: {
            display: false
         },
    scales: {
        yAxes: [{
            stacked: true,
            ticks: {
                beginAtZero:true,
                display: false
            },
            gridLines: {
                display: false,
                drawBorder: false
            }
        }],
        xAxes: [{
            gridLines: {
                display: false,
                drawBorder: false,
                offsetGridLines: false
            }
        }]
    }
}
});



