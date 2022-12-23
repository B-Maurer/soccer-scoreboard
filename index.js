const homeGoal = document.getElementById('home-goal');
const guestGoal = document.getElementById('guest-goal');
const periodDigit = document.getElementById('period-digit');

let pointHome = 0;
let pointGuest = 0;
let period = 1;

function addPeriod() {
  period += 1;
  periodDigit.innerText = period;
}

function homePoint() {
  pointHome += 1;
  homeGoal.innerText = pointHome;
}

function guestPoint() {
  pointGuest += 1;
  guestGoal.innerText = pointGuest;
}

function newGame() {
  pointHome = 0;
  pointGuest = 0;
  period = 1;
  periodDigit.innerText = 1;
  homeGoal.innerText = 0;
  guestGoal.innerText = 0;
}
