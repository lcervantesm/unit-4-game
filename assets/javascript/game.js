var number;
var points = 0;
var wins = 0;
var losses = 0;

//Generate random number as goal for game, and insert into relevant space
function randomNumber() {
    number = Math.floor(Math.random() * 101) + 19;
    $("#number").html(number);
}
//Assign random values to the crystals
function crystalValues() {
    for (i = 1; i < 5; i++) {
        $("#crystal" + i).attr("value", Math.floor(Math.random() * 12) + 1);
    }
}

function messageFlash() {
    for (i = 0; i < 6; i++) {
        $("#message").animate({ opacity: "0" }, 200);
        $("#message").animate({ opacity: "1" }, 200);
    }
}

function crystalJump() {
    for (j = 0; j < 3; j++) {
        for (i = 1; i < 5; i++) {
            $("#crystal" + i).animate({ bottom: "20px" }, 200);
            $("#crystal" + i).animate({ bottom: "0px" }, 200);
            console.log("Crystal " + i + " jump");
        }
    }
}

function reset() {
    $("#message").html("");
    randomNumber();
    crystalValues();
    points = 0;
    $("#points").html(points);
    $("#play").hide();
    $(".crystal").removeClass("grayscale");
}

$(document).ready(function () {
    $("#play").hide();
    randomNumber();
    crystalValues();
    //Onclick event for the crystals to add to score
    $(".crystal").on("click", function () {
        $(this).animate({ bottom: "20px" }, 50);
        $(this).animate({ bottom: "0px" }, 50);
        var addthis = parseInt($(this).attr("value"));
        points = points + addthis;
        $("#points").html(points);
        //Win/loss part 
        if (points > number) {
            $("#message").html("You lost!");
            $(".crystal").addClass("grayscale");
            messageFlash();
            losses++;
            $("#losses").html(losses);
            $("#play").show();
        } else if (points === number) {
            $("#message").html("You won!");
            messageFlash();
            crystalJump();
            wins++;
            $("#wins").html(wins);
            $("#play").show();
        }

    });

    $("#play").on("click", function () {
        reset();
    })




});