
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
          question: "1. To what extent do you feel that physical pain prevents you from doing what you need to do?",
          option1: "An extreme amount",
          option2: "Very much",
          option3: "A moderate amount",
          option4: "A little",
          option5: "Not at all"
          
      },
      
      {
          question: "2. How much do you need any medical treatment to function in your daily life?",
          option1: "An extreme amount",
          option2: "Very much",
          option3: "A moderate amount",
          option4: "A little",
          option5: "Not at all"
          
      },
      
      {
          question: "3. Do you have enough energy for everyday life?",
          option1: "Not at all",
          option2: "A little",
          option3: "A moderate amount",
          option4: "Very much",
          option5: "An extreme amount"
          
      },
      {
        question: "4. How well are you able to get around?",
        option1: "Not at all",
        option2: "A little",
        option3: "A moderate amount",
        option4: "Very much",
        option5: "An extreme amount"
        
    },
    {
        question: "5. How satisfied are you with your sleep",
        option1: "Not at all",
        option2: "A little",
        option3: "A moderate amount",
        option4: "Very much",
        option5: "An extreme amount"
        
    },
    
    {
        question: "6. How satisfied are you with your ability to perform your daily living activities?",
        option1: "Not at all",
        option2: "A little",
        option3: "A moderate amount",
        option4: "Very much",
        option5: "An extreme amount"
        
    },
    {
      question: "7. Do you have enough energy for everyday life?",
      option1: "Not at all",
      option2: "A little",
      option3: "A moderate amount",
      option4: "Very much",
      option5: "An extreme amount"
      
  },
  {
      question: "8. Do you have enough energy for everyday life?",
      option1: "Not at all",
      option2: "A little",
      option3: "A moderate amount",
      option4: "Very much",
      option5: "An extreme amount"
      
  },
  
  {
    question: "9. How satisfied are you with your capacity for work?",
    option1: "Not at all",
    option2: "A little",
    option3: "A moderate amount",
    option4: "Very much",
    option5: "An extreme amount"
    
},
{
  question: "10. How much do you enjoy life?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
  question: "11. To what extent do you feel your life to be meaningful?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
    question: "12. How well are you able to concentrate?",
    option1: "Not at all",
    option2: "A little",
    option3: "A moderate amount",
    option4: "Very much",
    option5: "An extreme amount"
    
},
{
  question: "13. Are you able to accept your bodily appearance?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
  question: "14. How satisfied are you with yourself?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
    question: "15. How often do you have negative feelings such as blue mood, despair, anxiety, depression?",
    option1: "An extreme amount",
    option2: "Very much",
    option3: "A moderate amount",
    option4: "A little",
    option5: "Not at all"
    
},

{
  question: "16. How satisfied are you with your personal relationships?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
question: "17. How satisfied are you with your sex life?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
question: "18. How satisfied are with the support you get from your friends?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
  question: "19. How safe do you feel in your daily life?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount"
  
},
{
question: "20. How healthy is your physical environment?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

},
{
question: "21. Have you enough money to meet your needs?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount"

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
      questionElement.innerText = question.question;
      answerText1.innerHTML = question.option1;
      answerText2.innerText = question.option2;
      answerText3.innerText = question.option3;
      answerText4.innerText = question.option4;
      answerText5.innerText = question.option5;
    }
  }
  function showScores()
  {
    phr=(((phr-7)/28)*100).toFixed(2);
    psr=(((psr-6)/24)*100).toFixed(2);
    sr=(((sr-3)/12)*100).toFixed(2);
    er=(((er-3)/12)*100).toFixed(2);
    //result.innerText="physical domain: "+phr+"socical domain: "+sr+"psychological domain: "+psr+"env domain: "+er;
    let result1=    `
    <h4 class="h4">Quiz Completed</h4>
    <br>
    <h4>physical - ${phr} </h4>
    <progress id="file1" value=${phr} max="100"> </progress>
    <br>
    <h4>social - ${sr}</h4>
    <progress id="file2" value=${sr} max="100"> </progress>
    <br>
    <h4>psychological - ${psr}</h4>
    <progress id="file3" value=${psr} max="100">  </progress>
    <br>
    <h4>environmental - ${er}</h4>
    <progress id="file4" value=${er} max="100">  </progress>
    <div class="quiz-repeat">
        <button class="button-55"><a href="./test.html">Take Quiz Again</a>
    </div>

    `;
  
    result.innerHTML =result1;
  }
  
  function myfunction4(){
      currentQuestionIndex++;
      if(currentQuestionIndex<8)
      phr = phr + 5;
      else if(currentQuestionIndex<14)
      psr = psr + 5;
     else if(currentQuestionIndex<17)
      sr = sr + 5;
      else if(currentQuestionIndex<20)
      er = er + 5;
      showQuestion(shuffleQuestion[currentQuestionIndex]);   
  }
  
  function myfunction3(){
    currentQuestionIndex++;
    if(currentQuestionIndex<8)
    phr = phr + 4;
    else if(currentQuestionIndex<14)
    psr = psr + 4;
   else if(currentQuestionIndex<17)
    sr = sr + 4;
    else if(currentQuestionIndex<20)
    er = er + 4;
    showQuestion(shuffleQuestion[currentQuestionIndex]);
  }
  function myfunction2(){
    currentQuestionIndex++;
    if(currentQuestionIndex<8)
    phr = phr + 3;
    else if(currentQuestionIndex<14)
    psr = psr + 3;
   else if(currentQuestionIndex<17)
    sr = sr + 3;
    else if(currentQuestionIndex<20)
    er = er + 3;
    showQuestion(shuffleQuestion[currentQuestionIndex]);
}

function myfunction1(){
    currentQuestionIndex++;
    if(currentQuestionIndex<8)
    phr = phr + 2;
    else if(currentQuestionIndex<14)
    psr = psr + 2;
   else if(currentQuestionIndex<17)
    sr = sr + 2;
    else if(currentQuestionIndex<20)
    er = er + 2;
    showQuestion(shuffleQuestion[currentQuestionIndex]); 
}
function myfunction(){
    currentQuestionIndex++;
      if(currentQuestionIndex<8)
      phr = phr + 1;
      else if(currentQuestionIndex<14)
      psr = psr + 1;
     else if(currentQuestionIndex<17)
      sr = sr + 1;
      else if(currentQuestionIndex<20)
      er = er + 1;
      showQuestion(shuffleQuestion[currentQuestionIndex]);
}
  if(start)
  {
    startQuiz(question);
  }