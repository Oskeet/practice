document.querySelector("#btn").addEventListener("click", function() {
    let player1 = Math.floor((Math.random() * 6) + 1);
    let player2 = Math.floor((Math.random() * 6) + 1);

    if(player1 > player2) {
        document.querySelector(".title").innerHTML = "Player 1 Wins";
    }else if(player2 > player1) {
        document.querySelector(".title").innerHTML = "Player 2 Wins";
    }else {
        document.querySelector(".title").innerHTML = "It is a Tie";
    }

    //player1 dice
    if(player1 == 1) {
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    }else if(player1 == 2) {
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    }else if(player1 == 3) {
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    }else if(player1 == 4) {
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    }else if(player1 == 5) {
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    }else if(player1 == 6) {
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    }

    //player2 dice
    if(player2 == 1) {
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    }else if(player2 == 2) {
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    }else if(player2 == 3) {
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    }else if(player2 == 4) {
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    }else if(player2 == 5) {
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    }else if(player2 == 6) {
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    }
});