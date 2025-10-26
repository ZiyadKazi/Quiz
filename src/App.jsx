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
          <div className = "quiz-content">
            <div className = "previous">
            <FaAngleLeft/>
            </div>
            <div className = "question-info"> 
              <h2>{quiz_questions["questions"][idx]["question"]}</h2>
              <ul>
                <li>
                  {quiz_questions["questions"][idx]["options"][0]}
                </li>
                <li>
                  {quiz_questions["questions"][idx]["options"][1]}
                </li>
                <li>
                  {quiz_questions["questions"][idx]["options"][2]}
                </li>
                <li>
                  {quiz_questions["questions"][idx]["options"][3]}
                </li>
              </ul>
            </div>

            <FaAngleRight/>
            
          </div>
      </div>
    </>
  )
}

export default App
