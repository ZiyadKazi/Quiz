import { useState } from 'react'
import './App.css'
import quiz_questions from '../questions.json'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
function App() {
  const [idx, setIdx] = useState(0)
  console.log(quiz_questions)
  console.log(quiz_questions["questions"][6]["question"])
  console.log(quiz_questions["quizTitle"])
  

  return (
    <>
      <div className = "main-content">
        <h1>{quiz_questions["quizTitle"]}</h1>
        <p>Question Number: {idx+1} out of {quiz_questions["questions"].length}</p>
          <div className = "quiz-content">
            <div className = "previous">
            <FaAngleLeft className = "icon"/>
            </div>
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

            <FaAngleRight className = "icon"/>
            
          </div>
      </div>
    </>
  )
}

export default App
