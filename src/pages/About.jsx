import React from 'react'
import about from '../assets/5.png'
import Nav from '../componants/Nav'

export const About = () => {
  return (
    <div>
    <Nav/>
  <div className="about">
    <h3>About Quality Of Life</h3>
  </div>
  <div className="para">
    <img src={about} />
    <p>
      What does "quality of life" mean to you? Financial comfort? Physical
      health? Mental? All the answers are correct and contribute - along with
      other aspects - to the quality of your life.
    </p>
    <p>
      Wellbeing is an experience of health, happiness and prosperity. This
      includes good mental health, high life satisfaction, a sense of purpose
      but also the ability to manage stress. Generally speaking, well-being is
      about feeling well and is something desired by almost everyone, because it
      includes many positive things such as: feeling of happiness, health,
      social connection, a clear and well-defined goal.
    </p>
    <p>
      The WHOQOL-BREF scale is a predictor of quality of life in adults past a
      certain age. The test includes 26 elements, which measure the following
      general areas: physical health, mental health, social relationships and
      the environment, all essential for an accurate assessment of your quality
      of life.
    </p>
    <p>
      Measure your well-being. It will give you details about the aspects of
      your life that can be improved or it will show you where you need to take
      attitude to solve certain deficiencies.
    </p>
  </div>
</div>

  )
}

export default About