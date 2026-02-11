function check() {
  const a = document.getElementById("answer").value;

  if (a === "314") {
    document.getElementById("result").innerText = "Tür offen!";
  } else {
    document.getElementById("result").innerText = "Falsch";
  }
}