function diceGame()
{
    // For Player 1
    let diceNumber1 = Math.floor((Math.random()*6)) + 1;

    let diceNumber1ImgSrc = "./images/dice" + diceNumber1 + ".gif";

    document.querySelector(".img1").setAttribute("src", diceNumber1ImgSrc);

    //For Player 2
    let diceNumber2 = Math.floor((Math.random()*6)) + 1;

    let diceNumber2ImgSrc = "./images/dice" + diceNumber2 + ".gif";

    document.querySelector(".img2").setAttribute("src", diceNumber2ImgSrc);


    //Heading Winner Declaration
    function winnerDeclare()
    {
        //If Player 1 Wins
        if(diceNumber1 > diceNumber2)
        {
            document.querySelector(".winner").textContent = "🚩Player 1 Wins!";
        }
        //If Draw
        else if (diceNumber1 == diceNumber2)
        {
            document.querySelector(".winner").textContent = "Draw";
        }
        //If Player 2 Wins
        else
        {
            document.querySelector(".winner").textContent = "Player 2 Wins!🚩";
        }
    }
    setTimeout(winnerDeclare, 1000);

    document.querySelector(".btn").textContent = "Re-Roll";

    //Animation Function
    document.getElementById("win").style.opacity = "0";
    function myTimeout()
    {
        document.getElementById("win").style.transitionDuration = "200ms";
        document.getElementById("win").style.opacity = "1";
    }
    setTimeout(myTimeout, 3000);
}

function reset()
{
    diceNumber1 = 0;
    diceNumber2 = 0;

    document.getElementById("win").style.opacity = "0";
    document.getElementById("win").style.transitionDuration = "200ms";
    document.querySelector(".btn").textContent = "Roll";
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    count = 1;
}