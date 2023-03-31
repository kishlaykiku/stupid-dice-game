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


//Push names in the cards
function pushPlayer1()
{
    //Get name from input field
    let player1Name =  $("#player1Input").val().trim();

    //Validate and push names
    if(player1Name != "")
    {
        if(player1Name.length <= 10)
        {
            $("#player1Name").text(player1Name);
            $("#player1Input").val("");
        }
        else
        {
            $("#player1Input").val("");
        }
    }
}
function pushPlayer2()
{
    //Get name from input field
    let player2Name = $("#player2Input").val().trim();

    //Validate and push names
    if(player2Name != "")
    {
        if(player2Name.length <= 10)
        {
            $("#player2Name").text(player2Name);
            $("#player2Input").val("");
        }
        else
        {
            $("#player2Input").val("");
        }
    }
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
            let winner = document.getElementById("player1Name").textContent;
            declareWinner("🚩"+winner+" wins!");
        }
        //If Draw
        else if (diceNumber1 == diceNumber2)
        {
            declareWinner("Draw");
        }
        //If Player 2 Wins
        else
        {
            let winner = document.getElementById("player2Name").textContent;
            declareWinner(winner+" wins!🚩");
        }
    }
    timeOut1 = setTimeout(chooseWinner, 1000);


    //Declare Winner Function
    function declareWinner(whoWins)
    {
        $("#win").text(whoWins);
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


//Animation Function For Input Label 'Name'
function setTransitionDelay1()
{
        $(".player-1").css({"transition-delay":"400ms"});
        setTimeout(function() {$(".player-1").css({"transition-delay":"0ms"});}, 300);
}
function setTransitionDelay2()
{
        $(".player-2").css({"transition-delay":"400ms"});
        setTimeout(function() {$(".player-2").css({"transition-delay":"0ms"});}, 300);
}


//Resets Everything
function reset()
{
    //Clear all timeouts
    clearTimeOuts();
    //Resets containers
    diceNumber1 = 0;
    diceNumber2 = 0;

    //Resets Player names in the card
    $("#player1Name").text("Player 1");
    $("#player2Name").text("Player 2");
    //Reverts back the css for "#win"
    $("#win").css({"opacity":"0", "transition-duration":"200ms"});
    //Chnages Roll button text to "Roll"
    $(".btn:first").text("Roll");
    //Resets the gif to Dice 6 png
    $(".img1").attr("src", "./images/dice6.png");
    $(".img2").attr("src", "./images/dice6.png");
}