var player1 = localStorage.getItem("player1_name_input");
var player2 = localStorage.getItem("player2_name_input");

var player1_score = 0;
var player2_score = 0;

var question_turn = "player1";
var answer_turn = "player2";

document.getElementById("player1_name_input").innerHTML = player1 + ":";
document.getElementById("player2_name_input").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = score1;
document.getElementById("player2_score").innerHTML = score2;

document.getElementById("player_question").innerHTML = "Question Turn-" + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player2;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer :<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1_score + 1;
    document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else
        {
        update_player2_score = player2_score + 1;
    document.getElementById("player2_score").innerHTML=update_player2_score;     
        }    
    }
    if(question_turn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="Question Turn -"+player2_name;
    }
    else{
         question_turn="player1"
        document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player2_name;
    } else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
