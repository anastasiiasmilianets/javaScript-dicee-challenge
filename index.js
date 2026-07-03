let score1 = 0;
let score2 = 0;

document.querySelector("#roll-btn").addEventListener("click", function () {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

    document.querySelector(".img1").setAttribute("src", randomDiceImage1);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelector(".img2").setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
        score1++;
        document.querySelector("#score1").innerHTML = score1;
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        score2++;
        document.querySelector("#score2").innerHTML = score2;
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }

});







