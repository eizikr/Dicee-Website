var randomNumber1 = Math.round(Math.random() * 5) + 1;
var randomNumber2 = Math.round(Math.random() * 5) + 1;

var randomImage1 = "images/dice" + randomNumber1 +".png";
var randomImage2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

var winner;

if(randomNumber1 > randomNumber2){
    winner = "🚩Player 1 wins!";
}else if(randomNumber1 < randomNumber2){
    winner = "Player 2 wins!🚩";
}else{
    winner = "Draw!";
}

document.querySelector("h1").innerHTML = winner;
// document.querySelector("h1").innerHTML("winner");