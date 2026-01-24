function loginAdmin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Akses yang diizinkan:
  // - admin / coffeehub123
  // - user  / password
  if ((username === "admin" && password === "coffeehub123") ||
      (username === "user" && password === "password")) {
    // Simpan status login dan role
    localStorage.setItem("login", "true");
    localStorage.setItem("role", username === "admin" ? "admin" : "user");

    // Redirect ke dashboard
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
  return false;
}
