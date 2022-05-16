var questionBank= [
  {
      question : 'Most Abortion is defined as the intentional ending of a pregnancy by surgery or drugs. Which of the following statements about abortion in the United States is most accurate?',
      option : ['Abortion is illegal during the 1st trimester','Abortion is one of the most common surgical procedures done','Abortion is always unsafe, and complications are common','About 70% of pregnancies are unintended and result in elective abortion'],
      answer : 'Abortion is one of the most common surgical procedures done'
  },
  {
      question : 'At what age does the heart of a fetus begin to beat?',
      option : ['21days','7days','At fertilization','At birth'],
      answer : '21days'
  },
  {
      question : 'Heartbeat, brain waves and response to touch are present in an unborn child by-',
      option : ['2 months','3 months','4 months','At birth'],
      answer : '2 months'
  },
  {
      question : 'Complications of abortion include-',
      option : ['Risk of breast cancer','Infection','Risk of heavy bleeding','All of above'],
      answer : 'All of above'
  },
  {
      question : 'Majority of abortions take place between-',
      option : ['8-12 weeks','12-16 weeks','16-20 weeks','Later than 20 weeks'],
      answer : '8-12 weeks'
  },
  {
    question : 'Among all developed countries, the USA has the highest rate of abortion',
    option : ['True','False'],
    answer : 'True'
},
{
  question : 'Which of the following terms is defined as the use of drugs to induce abortions in pregnancies that have continued more than 15 weeks?',
  option : ['Curettage','Evacuation','Medical abortion','Induction'],
  answer : 'Induction'
},
{
  question : 'Complications from abortion are uncommon when done by a trained health care practitioner in a hospital or clinic. If they do occur, which of the following complications of surgical evacuation is most common?',
  option : ['Infection','Scar tissue forms in the uterus','Injury to the intestine','Uterus is perforated (cut) by a surgical instrument'],
  answer : 'Uterus is perforated (cut) by a surgical instrument'
}
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
  option0.innerHTML= questionBank[i].option[0];
  option1.innerHTML= questionBank[i].option[1];
  option2.innerHTML= questionBank[i].option[2];
  option3.innerHTML= questionBank[i].option[3];
  stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
  {
      score= score+1;
      document.getElementById(e.id).style.background= 'limegreen';
  }
  else{
      document.getElementById(e.id).style.background= 'tomato';
  }
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(i<questionBank.length-1)
  {
      i=i+1;
      displayQuestion();
  }
  else{
      points.innerHTML= score+ '/'+ questionBank.length;
      quizContainer.style.display= 'none';
      scoreboard.style.display= 'block'
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();