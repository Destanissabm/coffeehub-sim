function updatePendapatan() {
  let pendapatan = document.getElementById("pendapatan");
  pendapatan.innerHTML = "Rp 4.000.000";
  alert("Data penjualan berhasil diperbarui!");
}
function logout() {
  localStorage.removeItem("login");
  window.location.href = "login.html";
}
