function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question"); 
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i , choices [i]);
        }

        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";

    if(quiz.score <= 3){
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "/" + quiz.questions.length + "<br><br>That's just embarassing!</h2><br><br><figure><img src='images/sadface.png'></figure>";
    }
    else if(quiz.score <=5){
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "/" + quiz.questions.length + "<br><br>Hit the books!</h2>";
    }

    else if(quiz.score <=8){
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "/" + quiz.questions.length + "<br><br>Not bad!</h2>";
    }
    else{
        gameOverHtml += "<h2 id='score'>Your Score was: " + quiz.score + "/" + quiz.questions.length + "<br><br>Wow, you seem to know a lot about Canada!</h2><br><br><figure><img src='images/canadianflag.png'></figure>";
        
    }

    gameOverHtml += "<input type='button' value='Try Again' onClick='window.location.reload()'>";
   
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("What is Canada's largest city by population?",["Montreal","Vancouver","Toronto","Calgary"],"Toronto"),
    new Question("In what year did Confederation happen?",["1937","1867","1875","1942"],"1867"),
    new Question("What is Canad's smallest province by area?",["PEI","New Brunswick","Nova Scotia","Newfoundland"],"PEI"),
    new Question("Who is the current Prime Minister of Canada?",["Sydney Crosby","Justin Trudeau","Steven Harper","Ryan Gosling"],"Justin Trudeau"),
    new Question("Which of these famous actors is Canadian?",["Johnny Depp","Seth Rogan","Brad Pitt","Jonnah Hill"],"Seth Rogan"),
    new Question("What is the population of Canada?",["36 Million","36 Thousand","40 Million","80 Million"],"36 Million"),
    new Question("What are the two official languages of Canada?",["English and Spanish","French and Spanish","Hindi and Gujarati","English and French"],"English and French"),
    new Question("Canada shares a southern border with which country?",["USA","Brazil","Mexico","Australia"],"USA"),
    new Question("What is Canada's official sport?",["Baseball","Tennis","Lacrosse","Hockey"],"Lacrosse"),
    new Question("What Canadian city hosted the 2010 Winter Olympics?",["Quebec City","Vancouver","Toronto","Edmonton"],"Vancouver")
];

var quiz = new Quiz(questions);

populate();

