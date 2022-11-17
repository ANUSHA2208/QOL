import React,{ useEffect,useState,useRef } from 'react'
import { questions } from '../assets/data'
import { Link } from 'react-router-dom';

const Test = () => {
  
  const [phr,setPhr]=useState(0);
  const [sr,setSr]=useState(0);
  const [psr,setPsr]=useState(0);
  const [er,setEr]=useState(0);
  
  const currentQuestionIndex = useRef(0);

  const isEnded = () => currentQuestionIndex.current === questions.length

  const result1 = () =>{

   return  <>
    <h4 className="h4">Quiz Completed</h4>
    <br/>
    <h4>physical - {(((phr-7)/28)*100).toFixed(2)} </h4>
    <progress id="file1" value={phr} max="100">{phr} </progress>
    <br/>
    <h4>social - {(((sr-3)/24)*100).toFixed(2)}</h4>
    <progress id="file2" value={sr} max="100">{sr} </progress>
    <br/>
    <h4>psychological - {(((psr-6)/24)*100).toFixed(2)}</h4>
    <progress id="file3" value={psr} max="100">{psr}  </progress>
    <br/>
    <h4>environmental - {(((er-3)/24)*100).toFixed(2)}</h4>
    <progress id="file4" value={er} max="100">{er}  </progress>
    <div className="quiz-repeat">
        <button className="button-55"><Link to="/test">Take Quiz Again</Link></button>
    </div>
    </>
  }

  useEffect(() => {
    console.log(currentQuestionIndex.current);
    console.log(phr,psr,sr,er);

    
  },[phr,psr,sr,er])

  const myfunction = (points) => {
    currentQuestionIndex.current++;
    if(currentQuestionIndex.current<8)
    {
    setPhr(phr => phr + points + 1);
    }

    else if(currentQuestionIndex.current<14){

      setPsr(psr => psr+points+1 )
    }
   else if(currentQuestionIndex.current<17){

     setSr(sr => sr + points + 1);
   }
    else if(currentQuestionIndex.current<21){
    setEr(er => er + points + 1);
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
              <div id="question">
                {questions[currentQuestionIndex.current].question}
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
         )
      }
    }

    return (
      <Tests/>
    )

}

export default Test