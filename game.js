// Fortschritt laden
let progress = localStorage.getItem("progress") || 1;
showRoom(progress);

// Raum anzeigen
function showRoom(number) {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("room" + i).style.display =
      (i == number) ? "block" : "none";
  }
}

// Raum 1 prüfen
function checkRoom1() {
  if (document.getElementById("answer1").value === "4") {
    localStorage.setItem("progress", 2);
    showRoom(2);
  } else {
    alert("Falsch!");
  }
}

// Raum 2 prüfen
function checkRoom2() {
  if (document.getElementById("answer2").value === "15") {
    localStorage.setItem("progress", 3);
    showRoom(3);
  } else {
    alert("Falsch!");
  }
}

// Raum 3 prüfen
function checkRoom3() {
  if (document.getElementById("answer3").value === "8") {
    alert("Du hast gewonnen!");
    localStorage.setItem("progress", 1);
    showRoom(1);
  } else {
    alert("Falsch!");
  }
}
