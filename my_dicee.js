

function WinningPlayer()
{
    var valueForPlayer1 = diceValueForPlayer("player1");
    var valueForPlayer2 =diceValueForPlayer("player2");
    var heading = document.querySelector("h1");
    if(valueForPlayer1>valueForPlayer2)
        heading.innerHTML="🚩Player 1 wins!";
    else if(valueForPlayer1<valueForPlayer2)
        heading.innerHTML="Player 2 wins!🚩";
    else
        heading.innerHTML="Draw";
}

function diceValueForPlayer(playerId)
{
    var value =  Math.floor(Math.random()*6)+1;
    var elementChange = document.getElementById(playerId);
    console.log("images/dice"+value+".img");
    elementChange.lastElementChild.src="images/dice"+value+".png";
    return value;
}

window.onload = WinningPlayer();
