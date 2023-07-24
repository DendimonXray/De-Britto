const ctx2 = document.getElementById('doughnut').getContext('2d');

const doughnut = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Negeri', 'Swasta', 'Luar Negeri'],
    datasets: [{
      label: '#Jenis kuliah yang dipilih of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});