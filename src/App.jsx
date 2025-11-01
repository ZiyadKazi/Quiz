import { useState } from 'react'
import './App.css'
import quiz_questions from '../questions.json'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
function App() {
  const [idx, setIdx] = useState(0)
  const [isDisabledLeft, setIsDisabledLeft] = useState(true)
  const [isDisabledRight, setIsDisabledRight] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [isCorrectArray, setIsCorrectArray] = useState(Array(quiz_questions["questions"].length).fill(false))
  console.log(quiz_questions)
  console.log(quiz_questions["questions"][6]["question"])
  console.log(quiz_questions["quizTitle"])

  const moveLeft = () => {
    if (idx > 0) {
      setIdx(prevIdx => {
        const newIdx = prevIdx - 1
        // if (newIdx == 0) {
        //   setIsDisabledLeft(true)
        // } else {
        //   setIsDisabledLeft(false)
        // }

        // fun myFunc(num) {}

        // myFunc(10)  

        setIsDisabledLeft(newIdx == 0)
        setIsDisabledRight(newIdx == quiz_questions["questions"].length-1)
        setShowSubmitButton(newIdx == quiz_questions["questions"].length-1)
        return newIdx 
      })
    }
  }

  const moveRight = () => {
    if (idx < quiz_questions["questions"].length-1) {
      setIdx(prevIdx => {
        const newIdx = prevIdx + 1
        setIsDisabledLeft(newIdx == 0)
        setIsDisabledRight(newIdx == quiz_questions["questions"].length-1)
        setShowSubmitButton(newIdx == quiz_questions["questions"].length-1)
        return newIdx
      })
    }
  }

  const isCorrect = (option) => {
    console.log(option)
    if (option == quiz_questions["questions"][idx]["correctAnswer"]) {
      console.log("You are correct!")
    }
  }

  const handleSubmit = () => {}
  

  return (
    <>
      <div className = "main-content">
        <h1>{quiz_questions["quizTitle"]}</h1>
        <p>Question Number: {idx+1} out of {quiz_questions["questions"].length}</p>
          <div className = "quiz-content">
          <button disabled={isDisabledLeft} className="icon-button" onClick = {moveLeft} >
            <FaAngleLeft className="icon" />
          </button>
            
            <div className = "question-info"> 
              <h2>{quiz_questions["questions"][idx]["question"]}</h2>
              <ul className = "options-box">
                {quiz_questions["questions"][idx]["options"].map(
                  (option, optionID) => (
                    <li key = {optionID} onClick={() => isCorrect(option)} className = "quiz-options">{option}</li>
                  )
                )}
              </ul>
            </div>

          <button disabled={isDisabledRight} className="icon-button" onClick = {moveRight}>
            <FaAngleRight className="icon" />
          </button>
            
          </div>
          {showSubmitButton && (
            <button className="submit-button" onClick = {handleSubmit}> Submit </button>
          )}
      </div>
    </>
  )
}

export default App
