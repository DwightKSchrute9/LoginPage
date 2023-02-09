const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calculateButton = document.getElementById("calculate-button");

let team1Results = 0;
let team2Results = 0;
let team1Total = 0;
let team2Total = 0;

calculateButton.addEventListener("click", function() {
  const num1 = parseFloat(input1.value);
  const num2 = parseFloat(input2.value);
  const percentage = (num1 / num2) * 100;

  if (team1Results < 6) {
    document.getElementById(`team1-result-${team1Results + 1}`).innerHTML = `${percentage}%`;
    team1Total += percentage;
    team1Results++;
  } else if (team2Results < 6) {
    document.getElementById(`team2-result-${team2Results + 1}`).innerHTML = `${percentage}%`;
    team2Total += percentage;
    team2Results++;
  }

  if (team1Results === 6) {
    document.getElementById("calculatePercentage1").style.display = "block";
  }

  if (team2Results === 6) {
    document.getElementById("calculatePercentage2").style.display = "block";
  }
});

document.getElementById("calculatePercentage1").addEventListener("click", function(){
    // Calcola la somma dei primi sei risultati per il Team1 e divide per 6
    let percentage = team1Total / 6;
    // Visualizza il risultato del calcolo
    document.getElementById("resultPercentage1").innerHTML = "Percentuale Team 1: " + percentage + "%";
});

document.getElementById("calculatePercentage2").addEventListener("click", function(){
    // Calcola la somma dei primi sei risultati per il Team2 e divide per 6
    let percentage = team2Total / 6;
    // Visualizza il risultato del calcolo
    document.getElementById("resultPercentage2").innerHTML = "Percentuale Team 2: " + percentage + "%";
});

