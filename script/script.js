//Globals
//-----For timeouts-----//
let timeOut1;
let timeOut2;
//-----For containers-----//
let diceNumber1;
let diceNumber2;


//Fixed Re-Roll Spam
function clearTimeOuts()
{
    clearTimeout(timeOut1);
    clearTimeout(timeOut2);
}

//Logical Functionm
function diceGame()
{
    clearTimeOuts();

    //For Player 1
    diceNumber1 = Math.floor((Math.random()*6)) + 1;
    let diceNumber1ImgSrc = "./images/dice" + diceNumber1 + ".gif";

    $(".img1").attr("src", diceNumber1ImgSrc);

    //For Player 2
    diceNumber2 = Math.floor((Math.random()*6)) + 1;
    let diceNumber2ImgSrc = "./images/dice" + diceNumber2 + ".gif";

    $(".img2").attr("src", diceNumber2ImgSrc);


    //Choose Winner Function
    function chooseWinner()
    {
        //If Player 1 Wins
        if(diceNumber1 > diceNumber2)
        {
            declareWinner("🚩Player 1 Wins!");
        }
        //If Draw
        else if (diceNumber1 == diceNumber2)
        {
            declareWinner("Draw");
        }
        //If Player 2 Wins
        else
        {
            declareWinner("Player 2 Wins!🚩");
        }
    }
    timeOut1 = setTimeout(chooseWinner, 1000);


    //Declare Winner Function
    function declareWinner(whoWins)
    {
        $(".winner").text(whoWins);
    }


    $(".btn:first").text("Re-Roll");


    //Animation Function
    $("#win").css("opacity", "0");
    function winAnimation()
    {
        document.getElementById("win").style.transitionDuration = "200ms";
        document.getElementById("win").style.opacity = "1";
    }
    timeOut2 = setTimeout(winAnimation, 3000);
}


//Resets Everything
function reset()
{
    clearTimeOuts();
    diceNumber1 = 0;
    diceNumber2 = 0;

    $("#win").css({"opacity":"0", "transition-duration":"200ms"});
    $(".btn:first").text("Roll");
    $(".img1").attr("src", "./images/dice6.png");
    $(".img2").attr("src", "./images/dice6.png");
}