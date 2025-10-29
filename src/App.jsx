import { useState } from 'react'
import './App.css'
import quiz_questions from '../questions.json'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
function App() {
  const [idx, setIdx] = useState(0)
  const [isDisabledLeft, setIsDisabledLeft] = useState(true)
  const [isDisabledRight, setIsDisabledRight] = useState(false)
  console.log(quiz_questions)
  console.log(quiz_questions["questions"][6]["question"])
  console.log(quiz_questions["quizTitle"])

  const moveLeft = () => {
    if (idx > 0) {
      setIdx(idx - 1)
    }
    if (idx <= 0) {
      setIsDisabledLeft(true)
    } else {
      setIsDisabledLeft(false)
    }
  }

  const moveRight = () => {
    if (idx < quiz_questions["questions"].length-1) {
      setIdx(idx + 1)
    }
    if (idx <= 0) {
      setIsDisabledLeft(true)
    } else {
      setIsDisabledLeft(false)
    }
  }
  

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
                  option => (
                    <li className = "quiz-options">{option}</li>
                  )
                )}
              </ul>
            </div>

          <button disabled={isDisabledRight} className="icon-button" onClick = {moveRight}>
            <FaAngleRight className="icon" />
          </button>
            
          </div>
      </div>
    </>
  )
}

export default App
