const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const choiceElementButton1 = document.getElementsByClassName("btn1");
const choiceElementButton2 = document.getElementsByClassName("btn2");
const choiceElementButton3 = document.getElementsByClassName("btn3");
const choiceElementButton4 = document.getElementsByClassName("btn4");
const choiceElementButton5 = document.getElementsByClassName("btn5");

const answerText1 = document.getElementsByClassName("ans1").item(0);
const answerText2 = document.getElementsByClassName("ans2").item(0);
const answerText3 = document.getElementsByClassName("ans3").item(0);
const answerText4 = document.getElementsByClassName("ans4").item(0);
const answerText5 = document.getElementsByClassName("ans5").item(0);

let single=false;

const result = document.getElementById("result");

let results = 0;
let phr=0;
let sr=0;
let psr=0;
let er=0;
console.log(answerText1);
console.log( questionContainer );

let currentQuestionIndex = 0;
let questions = [
  {
    question:"Your relationship status",
    option1:"Single",
    option2:"Married",
    option3:"Widowed",
    option4:"Divorced",
    option5:"living as married"
  },
    {
        question: "To what extent do you feel that physical pain prevents you from doing what you need to do?",
        option1: "An extreme amount",
        option2: "Very much",
        option3: "A moderate amount",
        option4: "A little",
        option5: "Not little"
        
    },
    
    {
        question: "How much do you need any medical treatment to function in your daily life?",
        option1: "An extreme amount",
        option2: "Very much",
        option3: "A moderate amount",
        option4: "A little",
        option5: "Not little"
        
    },
    
    {
        question: "Do you have enough energy for everyday life?",
        option1: "Not at all",
        option2: "A little",
        option3: "A moderate amount",
        option4: "Mostly",
        option5: "Completely"
        
    },
    {
      question: "How well are you able to get around?",
      option1: "Ver poor",
      option2: "Poor",
      option3: "Neither poor nor well",
      option4: "Well",
      option5: "Very well"
      
  },
  {
      question: "How satisfied are you with your sleep",
      option1: "Very dissatisfied",
      option2: "Dissatisfied",
      option3: "Neither satisfied nor dissatisfied",
      option4: "Satisfied",
      option5: "Very satisfied"
      
  },
  
  {
      question: "How satisfied are you with your ability to perform your daily living activities?",
      option1: "Very dissatisfied",
      option2: "Dissatisfied",
      option3: "Neither satisfied nor dissatisfied",
      option4: "Satisfied",
      option5: "Very satisfied"
      
  },

{
  question: "How satisfied are you with your capacity for work?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied"
  
},
{
question: "How much do you enjoy life?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
question: "To what extent do you feel your life to be meaningful?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
  question: "How well are you able to concentrate?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
question: "Are you able to accept your bodily appearance?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely"

},
{
question: "How satisfied are you with yourself?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied"

},
{
  question: "How often do you have negative feelings such as blue mood, despair, anxiety, depression?",
  option1: "Always",
  option2: "Very often",
  option3: "Quite often",
  option4: "Never",
  option5: "Seldom"
  
},

{
question: "How satisfied are you with your personal relationships?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied"

},
{
question: "How satisfied are you with your sex life?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied"

},
{
question: "How satisfied are with the support you get from your friends?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied"

},
{
question: "How safe do you feel in your daily life?",
option1: "Not at all",
option2: "Slightly",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
question: "How healthy is your physical environment?",
option1: "Not at all",
option2: "Slightly",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
question: "Have you enough money to meet your needs?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely"
},
{
question: "How available to you is the information that you need in your daily-to-day life?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely"
},
{
  question: "To what extent do you have the opportunity for leisure activities?",
  option1: "Not at all",
  option2: "A little",
  option3: "Moderately",
  option4: "Mostly",
  option5: "Completely"
},
  {
    question: "How satisfied are you with the condition of your living place?",
    option1: "Very dissatisfied",
    option2: "Dissatisfied",
    option3: "Neither satisfied nor dissatisfied",
    option4: "Satisfied",
    option5: "Very satisfied"
    
    },
 {
  question: "How satisfied are you with your access to health services?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied"
  
},
{
  question: "How satisfied are you with your transport?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied"
}

   
]



let shuffleQuestion = questions;
/*startButton.addEventListener("click", startQuiz);*/

function startQuiz(){

    currentQuestionIndex = 0;
    shuffleQuestion = questions;
    showQuestion(shuffleQuestion[currentQuestionIndex]);
};  
var start=true;
function isEnded() {
  return currentQuestionIndex === questions.length;
}

function showQuestion(question){
  if (isEnded()) {
      showScores();
  }
  else{
    if(single===true && currentQuestionIndex===15)
    {
      currentQuestionIndex++;
      showQuestion(shuffleQuestion[currentQuestionIndex]); 
    }
    else{
    questionElement.innerText = question.question;
    answerText1.innerHTML = question.option1;
    answerText2.innerText = question.option2;
    answerText3.innerText = question.option3;
    answerText4.innerText = question.option4;
    answerText5.innerText = question.option5;
    }
  }
}
function showScores()
{
  if(single===true)
  {
    phr=(((phr-7)/28)*100).toFixed(2);
    psr=(((psr-6)/24)*100).toFixed(2);
    sr=(((sr-2)/8)*100).toFixed(2);
    er=(((er-8)/32)*100).toFixed(2);
  }
  else{
  phr=(((phr-7)/28)*100).toFixed(2);
  psr=(((psr-6)/24)*100).toFixed(2);
  sr=(((sr-3)/12)*100).toFixed(2);
  er=(((er-8)/32)*100).toFixed(2);
  }

 
  //result.innerText="physical domain: "+phr+"socical domain: "+sr+"psychological domain: "+psr+"env domain: "+er;
  let result1= `
  <h4>Quiz Completed</h4>
  <h2 id='score'> Your scored:physical domain: ${phr} socical domain: ${sr} psychological domain: ${psr} env domain: ${er}</h2>
  <br>
  <h4>physical:</h4>
  <progress id="file1" value=${phr} max="100">  </progress>
  <br>
  <h4>social:</h4>
  <progress id="file2" value=${sr} max="100"> </progress>
  <br>
  <h4>psychological:</h4>
  <progress id="file3" value=${psr} max="100">  </progress>
  <br>
  <h4>environmental:</h4>
  <progress id="file4" value=${er} max="100">  </progress>
  <div class="quiz-repeat">
      <a href="index.html">Take Quiz Again</a>
  </div>

  `;

  result.innerHTML =result1;
}

function myfunction4(){
    //currentQuestionIndex++;
    if(currentQuestionIndex<8 && currentQuestionIndex>0)
    phr = phr + 5;
    else if(currentQuestionIndex<14)
    psr = psr + 5;
   else if(currentQuestionIndex<17)
    sr = sr + 5;
    else if(currentQuestionIndex<25)
    er = er + 5;
    currentQuestionIndex++;
    showQuestion(shuffleQuestion[currentQuestionIndex]);   
}

function myfunction3(){
 // currentQuestionIndex++;
  if(currentQuestionIndex<8 && currentQuestionIndex>0)
  phr = phr + 4;
  else if(currentQuestionIndex<14 && currentQuestionIndex>0)
  psr = psr + 4;
 else if(currentQuestionIndex<17 && currentQuestionIndex>0)
  sr = sr + 4;
  else if(currentQuestionIndex<25 && currentQuestionIndex>0)
  er = er + 4;
  currentQuestionIndex++;
  showQuestion(shuffleQuestion[currentQuestionIndex]);
}
function myfunction2(){
 // currentQuestionIndex++;
  if(currentQuestionIndex<8 && currentQuestionIndex>0 )
  phr = phr + 3;
  else if(currentQuestionIndex<14 && currentQuestionIndex>0)
  psr = psr + 3;
 else if(currentQuestionIndex<17 && currentQuestionIndex>0)
  sr = sr + 3;
  else if(currentQuestionIndex<25 && currentQuestionIndex>0)
  er = er + 3;
  currentQuestionIndex++;
  showQuestion(shuffleQuestion[currentQuestionIndex]);
}

function myfunction1(){
  //currentQuestionIndex++;
  if(currentQuestionIndex<8 && currentQuestionIndex>0)
  phr = phr + 2;
  else if(currentQuestionIndex<14 && currentQuestionIndex>0)
  psr = psr + 2;
 else if(currentQuestionIndex<17 && currentQuestionIndex>0)
  sr = sr + 2;
  else if(currentQuestionIndex<25 && currentQuestionIndex>0)
  er = er + 2;
  currentQuestionIndex++;
  showQuestion(shuffleQuestion[currentQuestionIndex]); 
}
function myfunction(){
  if(currentQuestionIndex===0)
  {
     single=true;
  }
    if(currentQuestionIndex<8 && currentQuestionIndex>0)
    phr = phr + 1;
    else if(currentQuestionIndex<14 && currentQuestionIndex>0)
    psr = psr + 1;
   else if(currentQuestionIndex<17 && currentQuestionIndex>0)
    sr = sr + 1;
    else if(currentQuestionIndex<25 && currentQuestionIndex>0)
    er = er + 1;
    currentQuestionIndex++;
    showQuestion(shuffleQuestion[currentQuestionIndex]);

}
if(start)
{
  startQuiz(question);
}


