// GRAFIK PENJUALAN MINGGUAN
new Chart(document.getElementById('salesChart'), {
  type: 'line',
  data: {
    labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
    datasets: [{
      label: 'Penjualan (Cup)',
      data: [80, 95, 100, 120, 150, 170, 160],
      borderColor: '#6f4e37',
      backgroundColor: 'rgba(111,78,55,0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// GRAFIK PENDAPATAN BULANAN
new Chart(document.getElementById('revenueChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [{
      label: 'Pendapatan (Rp)',
      data: [12000000, 15000000, 18000000, 20000000, 23000000, 26000000],
      backgroundColor: '#6f4e37'
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});
