// logout.js
// Letakkan file ini di folder root proyek (bersamaan dengan index.html, products.html, dll.)

function logout() {
  // Hapus status login
  localStorage.removeItem('login');

  // Opsional: hapus data lain yang terkait session (mis. keranjang)
  localStorage.removeItem('cart');

  // Jika ada key lain yang ingin dibersihkan, tambahkan di sini:
  // localStorage.removeItem('user');
  // localStorage.removeItem('token');

  // Kembalikan pengguna ke halaman login
  window.location.href = 'login.html';
}