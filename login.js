function login() {
  const pw = document.getElementById("password").value;

  if (pw === "ichhabdichlieb") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "game.html";
  } else {
    document.getElementById("error").innerText = "Falsches Passwort";
  }
}