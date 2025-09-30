let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let resetEl = document.getElementById("reset-score");
let homeScoreWrapperEl = document.getElementById("home-score-wrapper");
let guestScoreWrapperEl = document.getElementById("guest-score-wrapper");

function updateLeader() {
  homeScoreWrapperEl.classList.remove("leader");
  guestScoreWrapperEl.classList.remove("leader");

  if (homeScore > guestScore) {
    homeScoreWrapperEl.classList.add("leader");
  } else if (guestScore > homeScore) {
    guestScoreWrapperEl.classList.add("leader");
  }
}

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
    updateLeader();
  } else if (team === "guest") {
    guestScore += points;
    guestScoreEl.textContent = guestScore;
    updateLeader();
  }
}

function resetPoints() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  updateLeader();
}
