
import heart1 from '../assets/undraw_Connection_re_lcud (2).png'
import phypain from '../assets/pain.png'
import med from '../assets/undraw_doctor_kw5l.png'
import energy from '../assets/energy.png'
import sleep from '../assets/sleep.png'
import dailyact from '../assets/activity.png'
import getaround from '../assets/getaround.jpg'
import money from '../assets/money.png'
import capforwork from '../assets/work.png'
import concentrate from '../assets/concentrate.png'
import meaningfullife from '../assets/life.png'
import enjoylife from '../assets/chilling.png'
import bodilyapp from '../assets/appearance.png'
import env from '../assets/environment.png'
import anxious from '../assets/anxious.png'
import perrel from '../assets/personal.png'
import friends from '../assets/freinds.png'
import transport from '../assets/transport.png'
import info from '../assets/info.png'
import house from '../assets/home.png'
import safe from '../assets/safe.png'
import task from '../assets/task.png'
import love from '../assets/love.png'
export const  questions = [
  {
    question:"Your relationship status",
    option1:"Single",
    option2:"Married",
    option3:"Widowed",
    option4:"Divorced",
    option5:"living as married",
    image:<img class="qimage" src={heart1} alt="Logo"/>
  },
    {
        question: "1.To what extent do you feel that physical pain prevents you from doing what you need to do?",
        option1: "An extreme amount",
        option2: "Very much",
        option3: "A moderate amount",
        option4: "A little",
        option5: "Not little",
        image:<img class="qimage" src={phypain} alt="Logo"/>
    },
    
    {
        question: "2.How much do you need any medical treatment to function in your daily life?",
        option1: "An extreme amount",
        option2: "Very much",
        option3: "A moderate amount",
        option4: "A little",
        option5: "Not little",
        image:<img src={med} class="qimage" alt="Logo"/>
        
    },
    
    {
        question: "3.Do you have enough energy for everyday life?",
        option1: "Not at all",
        option2: "A little",
        option3: "A moderate amount",
        option4: "Mostly",
        option5: "Completely",
        image:<img src={energy} class="qimage" alt="Logo"/>
        
    },
    {
      question: "4.How well are you able to get around?",
      option1: "Ver poor",
      option2: "Poor",
      option3: "Neither poor nor well",
      option4: "Well",
      option5: "Very well",
      image:<img src={getaround} alt="Logo"class="qimage"/>
  },
  {
      question: "5.How satisfied are you with your sleep",
      option1: "Very dissatisfied",
      option2: "Dissatisfied",
      option3: "Neither satisfied nor dissatisfied",
      option4: "Satisfied",
      option5: "Very satisfied",
      image:<img src={sleep} alt="Logo"class="qimage"/>
      
  },
  
  {
      question: "6.How satisfied are you with your ability to perform your daily living activities?",
      option1: "Very dissatisfied",
      option2: "Dissatisfied",
      option3: "Neither satisfied nor dissatisfied",
      option4: "Satisfied",
      option5: "Very satisfied",
      image:<img src={dailyact} alt="Logo"class="qimage"/>
  },

{
  question: "7.How satisfied are you with your capacity for work?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied",
  image:<img src={capforwork} alt="Logo"class="qimage"/>
  
},
{
question: "8.How much do you enjoy life?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount",
image:<img src={enjoylife} alt="Logo"class="qimage"/>

},
{
question: "9.To what extent do you feel your life to be meaningful?",
option1: "Not at all",
option2: "A little",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount",
image:<img src={meaningfullife} alt="Logo"class="qimage"/>

},
{
  question: "10.How well are you able to concentrate?",
  option1: "Not at all",
  option2: "A little",
  option3: "A moderate amount",
  option4: "Very much",
  option5: "An extreme amount",
  image:<img src={concentrate} alt="Logo"class="qimage"/>
},
{
question: "11.Are you able to accept your bodily appearance?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely",
image:<img src={bodilyapp} alt="Logo"class="qimage"/>

},
{
question: "12.How satisfied are you with yourself?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied",
image:<img src={task} alt="Logo"class="qimage"/>

},
{
  question: "13.How often do you have negative feelings such as blue mood, despair, anxiety, depression?",
  option1: "Always",
  option2: "Very often",
  option3: "Quite often",
  option4: "Never",
  option5: "Seldom",
  image:<img src={anxious} alt="Logo"class="qimage"/>
},

{
question: "14.How satisfied are you with your personal relationships?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied",
image:<img src={perrel} alt="Logo"class="qimage"/>
},
{
question: "15.How satisfied are you with your sex life?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied",
image:<img src={love} alt="Logo"class="qimage"/>

},
{
question: "16.How satisfied are with the support you get from your friends?",
option1: "Very dissatisfied",
option2: "Dissatisfied",
option3: "Neither satisfied nor dissatisfied",
option4: "Satisfied",
option5: "Very satisfied",
image:<img src={friends} alt="Logo"class="qimage"/>

},
{
question: "17.How safe do you feel in your daily life?",
option1: "Not at all",
option2: "Slightly",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount",
image:<img src={safe} alt="Logo"class="qimage"/>

},
{
question: "18.How healthy is your physical environment?",
option1: "Not at all",
option2: "Slightly",
option3: "A moderate amount",
option4: "Very much",
option5: "An extreme amount",
image:<img src={env} alt="Logo"class="qimage"/>

},
{
question: "19.Have you enough money to meet your needs?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely",
image:<img src={money} alt="Logo"class="qimage"/>
},
{
question: "20.How available to you is the information that you need in your daily-to-day life?",
option1: "Not at all",
option2: "A little",
option3: "Moderately",
option4: "Mostly",
option5: "Completely",
image:<img src={info} alt="Logo" class="qimage"/>
},
{
  question: "21.To what extent do you have the opportunity for leisure activities?",
  option1: "Not at all",
  option2: "A little",
  option3: "Moderately",
  option4: "Mostly",
  option5: "Completely",
  image:<img src={enjoylife} alt="Logo" class="qimage"/>
},
  {
    question: "22.How satisfied are you with the condition of your living place?",
    option1: "Very dissatisfied",
    option2: "Dissatisfied",
    option3: "Neither satisfied nor dissatisfied",
    option4: "Satisfied",
    option5: "Very satisfied",
    image:<img src={house} alt="Logo"class="qimage"/>
    
    },
 {
  question: "23.How satisfied are you with your access to health services?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied",
  image:<img src={med} alt="Logo"class="qimage"/>
  
},
{
  question: "24.How satisfied are you with your transport?",
  option1: "Very dissatisfied",
  option2: "Dissatisfied",
  option3: "Neither satisfied nor dissatisfied",
  option4: "Satisfied",
  option5: "Very satisfied",
  image:<img src={transport} alt="Logo" class="qimage"/>
}

   
]