let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

homeScoreEl.value = 0;
guestScoreEl.value = 0;

//HOME ADD SCORE
function homeAdd1() {
    let currentScore = parseInt(homeScoreEl.value)
    homeScoreEl.value = currentScore + 1;
}

function homeAdd2() {
    let currentScore = parseInt(homeScoreEl.value)
    homeScoreEl.value = currentScore + 2;
}

function homeAdd3() {
    let currentScore = parseInt(homeScoreEl.value)
    homeScoreEl.value = currentScore + 3;
}

//GUEST ADD SCORE
function guestAdd1() {
    let currentScore = parseInt(guestScoreEl.value)
    guestScoreEl.value = currentScore + 1;
}

function guestAdd2() {
    let currentScore = parseInt(guestScoreEl.value)
    guestScoreEl.value = currentScore + 2;
}

function guestAdd3() {
    let currentScore = parseInt(guestScoreEl.value)
    guestScoreEl.value = currentScore + 3;
}