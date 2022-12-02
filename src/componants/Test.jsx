import React,{ useEffect,useState,useRef } from 'react'
import { questions } from '../assets/data'
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../pages/style.css';
import work from '../assets/energy.png';
import '../pages/style.css'

let single=false;
let sq=0;
let seq=3;
const Test = () => {
  
  const [phr,setPhr]=useState(0);
  const [sr,setSr]=useState(0);
  const [psr,setPsr]=useState(0);
  const [er,setEr]=useState(0);
  const currentQuestionIndex = useRef(0);

  const isEnded = () => currentQuestionIndex.current === questions.length

  const result1 = () =>{

   return  <>
   <div class="rbox">
        <h4 className='num'>Physical - {(((phr-7-sq)/28)*100).toFixed(2)} </h4>
        <progress id="file1" value={(((phr-sq-7)/28)*100)} max="100">{phr} </progress>
        <h4 className='num'>Mental - {(((psr-6)/24)*100).toFixed(2)} </h4>
        <progress id="file2" value={(((psr-6)/24)*100)} max="100">{phr} </progress>
        <h4 className='num'>Social - {(((sr-seq)/(seq*4))*100).toFixed(2)} </h4>
        <progress id="file3" value={(((sr-seq)/(seq*4))*100)} max="100">{phr} </progress>
        <h4 className='num'>Environmental - {(((er-8)/32)*100).toFixed(2)} </h4>
        <progress id="file4" value={(((er-8)/32)*100)} max="100">{phr} </progress>
        </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="sug">
    <Tabs 
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
      
    >
      <Tab eventKey="physical" title="Physical">
      {
           ((((phr-7-sq)/28)*100) > 50) &&
           (<div>
            <h5>Your physical health is satisfying
            Satisfying does not mean perfectly healthy. Although this goal is difficult to achieve, prevention and regular check-ups at the doctor can only contribute to better physical health.</h5>
            </div>
           )
          
        
         }
         {
           ((((phr-7-sq)/28)*100) <= 50) &&
           (<div>
            <h5>Your physical health is unsatisfying
            Whether we are talking about chronic or acute diseases, they affect your quality of life. Your focus should be on diagnosing, healing or keeping it under control as much as possible.</h5>
            <br/>
            <br/>
            <h4>Suggestions from Experts</h4>
            <br/>
            <div class="flex-container">
            <div class="ph-sug">
              <h3><a href='https://www.headtohealth.gov.au/meaningful-life/physical-health/physical-health'>Head to Health</a></h3>
            </div>
            <div class="ph-sug"><h3><a href='https://theworldbook.org/physical-health/'>The World Book</a></h3></div>
            </div>

            </div>)
         }
      </Tab>
      <Tab eventKey="mental" title="Mental">
      {
           ((((psr-6)/24)*100) > 50) &&
           (<h5>Your mental health is satisfying
            Mental health has major implications and controls the way your life unfolds. Even if you are well now, it is always better to inform yourself. This way you can recognize the symptoms much easier if they start to appear in your everyday life.</h5>)
         }
         {
           ((((psr-6)/24)*100) <= 50) &&
           (<div>
            <h5>Your mental health is unsatisfying
            What's bothering you? Let's have a talk. You don't have to go through all these alone. Whether it's depression, anxiety, stress or burnout, you need to know how they affect you.</h5>
            <br/>
            <br/>
            <h4>Suggestions from Experts</h4>
            <br/>
            <div class="flex-container">
            <div class="ph-sug">
              <h3><a href='https://mantracare.org/therapy/self-care/mental-health-tips/'>MantraCare</a></h3>
            </div>
            <div class="ph-sug"><h3><a href='https://www.talkspace.com/blog/good-mental-health-12-therapist-approved-tips/'>Talk Space</a></h3></div>
            </div>

            </div>)
         }
      </Tab>
      <Tab eventKey="social" title="Social">
         {
           ((((sr-seq)/seq*4)*100) > 50) &&
           (<h5>Your social relationships are satisfying
            When your social life is satisfactory, then the general well-being is also favoured.</h5>)
         }
         {
           ((((sr-seq)/seq*4)*100) <= 50) &&
           (<div>
            <h5>Your social relationships are unsatisfying
            Maybe you are an introvert or you face loneliness. You may find it difficult to communicate with other people because you feel you are not compatible. There can be many reasons why you are not happy with how your relationships in society go. This does not necessarily mean that they are your fault, or that they cannot be improved. Whether it's personal, sexual or professional relationships, it's always good to talk to someone.</h5>
            <br/>
            <br/>
            <h4>Suggestions from Experts</h4>
            <br/>
            <div class="flex-container">
            <div class="ph-sug">
              <h3><a href='https://www.wikihow.life/Cope-With-an-Unsatisfying-Social-Life'>Wikihow</a></h3>
            </div>
            <div class="ph-sug"><h3><a href='https://www.lifehack.org/articles/communication/12-ways-improve-social-skills-and-make-you-sociable-anytime.html'>Life Hack</a></h3></div>
            </div>
            </div>)
         }
      </Tab>
      <Tab eventKey="environmental" title="Environmental">
      {
           ((((er-8)/32)*100) > 50) &&
           (<h5>You are satisfied with the environment you live in.</h5>)
         }
         {
           ((((er-8)/32)*100) <= 50) &&
           (<div>
            <h5>You are not satisfied with the environment in which you live.
            Certain details related to the environment in which you live your life do not satisfy you. What are the things that bother you and why? What can you do to change them? How much do they affect your life?</h5>
            <br/>
            <br/>
            <h4>Suggestions from Experts</h4>
            <br/>
            <div class="flex-container">
            <div class="ph-sug">
              <h3><a href='https://health.ph360.me/shaewellness/how-your-environment-can-make-you-happy/'>ph360Blog</a></h3>
            </div>
            {/* <div class="ph-sug"><h3><a href='https://theworldbook.org/physical-health/'>The World Book</a></h3></div> */}
            </div>
            </div>)
         }
        </Tab>
    </Tabs>
    </div>

    <div class="quiz-repeat">
        <button class="button-55"><Link to="/signin">Take Quiz Again</Link></button>
    </div>

    <div className='sugg'>
    
    </div>

    </>
  }

  useEffect(() => {
    console.log(currentQuestionIndex.current);
    console.log(phr,psr,sr,er)
    console.log(single);
  },[phr,psr,sr,er])

  const myfunction = (points) => {
  
    if(single===true && currentQuestionIndex.current===14)
    {
      currentQuestionIndex.current++;
      seq=2;
    }
    else{
      currentQuestionIndex.current++;
      if(currentQuestionIndex.current<9 )
    {
      if(currentQuestionIndex.current===1)
      {
        if(points===0)
        {single=true;
         sq=points+1;
        }
        else{
          sq=points+1;
        }
      }
    setPhr(phr => phr + points + 1);
      
    }

    else if(currentQuestionIndex.current<15 ){

      setPsr(psr => psr+points+1 );
    }
   else if(currentQuestionIndex.current<18){

     setSr(sr => sr + points + 1);
   }
    else if(currentQuestionIndex.current<26 ){
    setEr(er => er + points + 1);
    }
  }
}

    function Tests(){  
      if(isEnded()){
       return result1()
      }
      
      else{
       return (
          <div className='center'>
          <div className="qcontainer">
            <div id="question-container">
              <div id="question"style={{display:'flex'}}>
              <div class="img"style={{flex:'80.33%',padding:'5px'}}>
               <center> {questions[currentQuestionIndex.current].question}</center>
                </div>
                <div class="img"style={{flex: '30.33%',padding: '5px'}}>
                {questions[currentQuestionIndex.current].image }
                </div>
            </div>
            <button className="btn1" onClick={() => myfunction(0)} >
              <p className="ans1">
              {questions[currentQuestionIndex.current].option1}
              </p>
            </button><button className="btn2" onClick={() => myfunction(1)} >
              <p className="ans2">
              {questions[currentQuestionIndex.current].option2}
              
              </p>
            </button><button className="btn3" onClick={() => myfunction(2)}>
              <p className="ans3">
              {questions[currentQuestionIndex.current].option3}
              
              </p>
            </button><button className="btn4" onClick={() => myfunction(3)}>
              <p className="ans4">
              {questions[currentQuestionIndex.current].option4}
              
              </p>
            </button><button className="btn5" onClick={() => myfunction(4)}>
              <p className="ans5">
              {questions[currentQuestionIndex.current].option5}
              </p>
            </button>  
             </div>
             </div>
        </div>
         )
      }
    }

    return (
      <Tests/>
    )

}

export default Test