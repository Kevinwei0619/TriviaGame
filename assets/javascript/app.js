// var questionObject = {
//     questionList: [
//       {
//         question1: "How tall is Klay Thompson ?",
//       ans1: "201 cm",
//       ans2: "220 cm",
//       ans3: "351 cm",
//       ans4: "434 cm",
//       rightAns:"201 cm"
//       }, {
//         question2: "who won the Final MAP ?",
//         ans1: "Kevin Love",
//         ans2: "Kevin Wei",
//         ans3: "Kevin Durant",
//         ans4: "Kevin Hart",
//         rightAns:"Kevin Durant"
//       },  {
//         question3: "which team won championship this year and last year ?",
//       ans1: "Gold State Warriors",
//       ans2: "Cleveland Cavaliers",
//       ans3: "Houston Rockets",
//       ans4: "Atlanta Hawks",
//       rightAns:"Gold State Warriors"
//       }, {
//         question4: "How many games did Golden State Warriors win in final this year?",
//         ans1: "7 games",
//         ans2: "4 games",
//         ans3: "10 games",
//         ans4: "2 games",
//         rightAns:"4 games"
//       }
//     ]
//   };


var totalTime = 10;
var correctAns = 0;
var wrongAns = 0;
var unanswered = 0;
var timer;
var doneGame;
var game;



function countdown() {

    if (totalTime === 0) {
        // alert("Time Up!");
        clearInterval(timer);
        clearTimeout(game);

    } else {
        totalTime = totalTime - 1;
        $("#showTimeLeft").html("<h1>Time Remaining: " + totalTime + " Seconds");
    }
};






$('#startButton').on("click", function () {

    timer = setInterval(countdown, 1000);
    game = setTimeout(timeup, 1000 * 10);



    $('#startButton').addClass("hide");
    $('h2').addClass("hide");
    $("#showQuestionList").removeClass("hide");

    var newButton = $("<button>");
    

    doneGame = newButton.text("Done").attr("id","doneGame2");
   $("#over").append(doneGame);



   $("#doneGame2").on("click", function(){

    clearInterval(timer);
    clearTimeout(game);
    timeup();

   });


    


    //  $('input[name=radio使用的name的值]:checked').val()

    




});

// function aaa(){

//     alert($('input[name=Q1]:checked').val());

//     return false;

// }


function timeup() {


    if ($('input[name=Q1]:checked', '#question1').data('val') == "201cm") {
        console.log($('input[name=Q1]:checked', '#question1').data('val') + " right");
        correctAns++;
    } else if($('input[name=Q1]:checked', '#question1').data('val') == null){
        unanswered++;
    }
    else {
        wrongAns++
        console.log($('input[name=Q1]:checked', '#question1').data('val') + " wrong");
    }


    if ($('input[name=Q2]:checked', '#question2').data('val') == "Kevin Durant") {
        console.log($('input[name=Q2]:checked', '#question2').data('val') + " right");
        correctAns++;
    } else if($('input[name=Q2]:checked', '#question2').data('val') == null ){
        unanswered++;
    }
    else {
        wrongAns++
        console.log($('input[name=Q2]:checked', '#question2').data('val') + " wrong");
    }



    if ($('input[name=Q3]:checked', '#question3').data('val') == "Gold State Warriors") {
        console.log($('input[name=Q3]:checked', '#question3').data('val') + " right");
        correctAns++;
    } else if($('input[name=Q3]:checked', '#question3').data('val') == null ){
        unanswered++;
    }
    else {
        wrongAns++
        console.log($('input[name=Q3]:checked', '#question3').data('val') + " wrong");
    }



    if ($('input[name=Q4]:checked', '#question4').data('val') == "4 games") {
        console.log($('input[name=Q4]:checked', '#question4').data('val') + " right");
        correctAns++;
    } else if($('input[name=Q4]:checked', '#question4').data('val') == null){
        unanswered++; 
    }
    else {
        wrongAns++
        console.log($('input[name=Q4]:checked', '#question4').data('val') + " wrong");
    }


   

    $("#showTimeLeft").html("All Done");
    $("#showQuestionList").html("Correct Answer: " + correctAns + "<br>" + "Incorrect Answer: " + wrongAns + "<br>" + "Unanswered: " + unanswered);
    $("#over").addClass("hide");

}