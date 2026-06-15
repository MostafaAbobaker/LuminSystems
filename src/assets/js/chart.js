// Pie Chart

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Active", "De-Active"],
      datasets: [
        {
          backgroundColor: ["#0061d2", "#00b2e3"],
          data: [1200,150]
        }
      ]
    },
    options: {
      plugins: {
            legend: {
                display: true,
        position: 'bottom',
                labels: {
                    color: '#6c757d',
          font: {
                        size: 12
                    },
          boxWidth:20,
          padding:15,
          usePointStyle:true,
                }
            }
        }
    }
});
  
// Bar Chart

new Chart(document.getElementById("bar-chart"), {
    type: 'line',
    data: {
      labels: ["Jan 2024", "Feb 2024", "Mar 2024", "Apr 2024", "May 2024", "Jun 2024" , "Jul 2024"],
      datasets: [
        {
          label: "States",
          data: [500,2500,2000,2300,4000,1500,1200],
      borderColor: '#0061d2',
      fill: false,
      tension: 0.4
        }
      ]
    },
    options: {
      legend: { display: false },
    plugins: {
            legend: {
                display: false,
            }
        },
    scales: {
      x: {
        title: {
          font: {
            size: 12,
          },
          color: '#6c757d'
        },

        ticks: {
          font: {
            size: 12,
          },
          color: '#6c757d',
        },
      },

      y: {
        title: {
          font: {
            size: 12,
          },
          color: '#6c757d'
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
          },
          color: '#6c757d'
        }
      }
    }
    }
});