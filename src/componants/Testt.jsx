import React from 'react'
import '../pages/Test/test.css'

export const Testt = () => {
  return (
    <div className="header">
  <div className="center">
    <div className="qcontainer">
      <div id="question-container">
        <div id="question">Question</div>
      </div>
      <button onclick="myfunction();" className="btn1">
        <p className="ans1" />
      </button>
      <br />
      <button onclick="myfunction1();" className="btn2">
        <p className="ans2" />
      </button>
      <br />
      <button onclick="myfunction2();" className="btn3">
        <p className="ans3" />
      </button>
      <br />
      <button onclick="myfunction3();" className="btn4">
        <p className="ans4" />
      </button>
      <br />
      <button onclick="myfunction4();" className="btn5">
        <p className="ans5" />
      </button>
      <br />
      <div id="result" />
    </div>
  </div>
</div>

  )
}
