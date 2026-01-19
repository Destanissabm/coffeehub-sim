function loginAdmin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "admin" && password === "coffeehub123") {
    localStorage.setItem("login", "true"); // SIMPAN STATUS LOGIN
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
  return false;
}
