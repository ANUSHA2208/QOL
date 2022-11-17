import React,{ useEffect,useState } from 'react'
import { questions } from '../assets/data'
import { Link } from 'react-router-dom';

const Test = () => {
  
  const [phr,setPhr]=useState(0);
  const [sr,setSr]=useState(0);
  const [psr,setPsr]=useState(0);
  const [er,setEr]=useState(0);
  
  const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0);

  const isEnded = () => currentQuestionIndex === questions.length

  const result1 = () =>{

   return  <>
    <h4 className="h4">Quiz Completed</h4>
    <br/>
    <h4>physical - {(((phr-7)/28)*100).toFixed(2)} </h4>
    <progress id="file1" value={phr} max="100"> </progress>
    <br/>
    <h4>social - {(((sr-6)/24)*100).toFixed(2)}</h4>
    <progress id="file2" value={sr} max="100"> </progress>
    <br/>
    <h4>psychological - {(((psr-6)/24)*100).toFixed(2)}</h4>
    <progress id="file3" value={psr} max="100">  </progress>
    <br/>
    <h4>environmental - {(((er-6)/24)*100).toFixed(2)}</h4>
    <progress id="file4" value={er} max="100">  </progress>
    <div class="quiz-repeat">
        <button class="button-55"><Link to="./test">Take Quiz Again</Link></button>
    </div>
    </>
  }

  useEffect(() => {
    console.log(currentQuestionIndex);
  },[phr,psr,sr,er])

  const myfunction = (points) => {
    if(currentQuestionIndex<8)
    setPhr(phr => phr + points + 1);
    else if(currentQuestionIndex<14)
    setPsr(psr => psr+points+1 )
   else if(currentQuestionIndex<17)
    setSr(sr => sr + points + 1);
    else if(currentQuestionIndex<20){
    setEr(er => er + points + 1);
    }

    setCurrentQuestionIndex(prev => prev + 1);

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
              <div id="question">
                {questions[currentQuestionIndex].question}
              </div>
            </div>
            <button className="btn1" onClick={() => myfunction(0)} >
              <p className="ans1">
              {questions[currentQuestionIndex].option1}
              </p>
            </button><button className="btn2" onClick={() => myfunction(1)} >
              <p className="ans2">
              {questions[currentQuestionIndex].option2}
              
              </p>
            </button><button className="btn3" onClick={() => myfunction(2)}>
              <p className="ans3">
              {questions[currentQuestionIndex].option3}
              
              </p>
            </button><button className="btn4" onClick={() => myfunction(3)}>
              <p className="ans4">
              {questions[currentQuestionIndex].option4}
              
              </p>
            </button><button className="btn5" onClick={() => myfunction(4)}>
              <p className="ans5">
              {questions[currentQuestionIndex].option5}
              </p>
            </button>  
     
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