const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Kerja', 'Universitas', 'Nganggur'],
    datasets: [{
      label: 'Perbadndingan melanjutkan kuliah atau bekerja',
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