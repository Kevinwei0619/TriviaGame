
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


  var totalTime = 6; 
  var correctAns=0;
  var wrongAns=0;
  var unanswered = 0; 
  var timer; 


     
      function countdown() {
   
       if (totalTime <= 0) {
        // alert("Time Up!");
         clearInterval(timer);
         clearTimeout(timer);

       }else{
        totalTime = totalTime - 1;
         $("#showTimeLeft").html("<h1>Time Remaining: " + totalTime + " Seconds");
      

       }
    };






    $('#startButton').on("click", function(){


        $('#startButton').addClass("hide");
        $('h2').addClass("hide");
        $("#showQuestionList").removeClass("hide");

        var newButton = $("<button>");
        $("#over").append(newButton.text("Done"));
        
        timer = setInterval(countdown,1000);

         setTimeout(timeup, 1000*6);




    });


    function timeup(){

        $("#showTimeLeft").html("All Done");
        $("#showQuestionList").html("Correct Answer: " + correctAns + "<br>" + "Incorrect Answer: " + wrongAns +"<br>" + "Unanswered: " + unanswered );
        $("#over").addClass("hide");

      
     
        



        
    }


