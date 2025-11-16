import { useState } from 'react'
import './App.css'
import quiz_questions from '../questions.json'
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function App() {
  const [idx, setIdx] = useState(0)
  const [isDisabledLeft, setIsDisabledLeft] = useState(true)
  const [isDisabledRight, setIsDisabledRight] = useState(false)
  const [showSubmitButton, setShowSubmitButton] = useState(false)
  const [isCorrectArray, setIsCorrectArray] = useState(Array(quiz_questions["questions"].length).fill(false))
  const [selectedOptionArray, setSelectedOptionArray] = useState(Array(quiz_questions["questions"].length).fill(-1))
  console.log(quiz_questions)
  console.log(quiz_questions["questions"][6]["question"])
  console.log(quiz_questions["quizTitle"])

  const moveLeft = () => {
    if (idx > 0) {
      setIdx(prevIdx => {
        const newIdx = prevIdx - 1

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

  const isCorrect = (option, optionID) => {
    console.log(option)
    setSelectedOptionArray(
      prevArray => {
        const newArray = [...prevArray]
        newArray[idx] = optionID
        console.log(newArray)
        return newArray
      }
    )
    if (option === quiz_questions["questions"][idx]["correctAnswer"]) {
      console.log("You are correct!")
      setIsCorrectArray(
        //isCorrectArray[idx] = true  unappropriate way, cannot change values directly in useState array
        prevArray => {
          const newArray = [...prevArray]
          newArray[idx] = true
          console.log(newArray)
          return newArray
        }
      )
    }
    else {
      setIsCorrectArray(
        prevArray => {
          const newArray = [...prevArray]
          newArray[idx] = false
          console.log(newArray)
          return newArray
        }
      )
    }
  }

  const handleSubmit = () => {
    let amountCorrect = 0
    isCorrectArray.forEach(answer => {
      if (answer == true) {
        amountCorrect += 1
      }
    })
    console.log(amountCorrect)
    localStorage.setItem("result", amountCorrect)
    localStorage.setItem("correctArray", JSON.stringify(isCorrectArray))
    localStorage.setItem("selectedOptionArray", JSON.stringify(selectedOptionArray))
    return amountCorrect
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
                  (option, optionID) => {
                    let className = "quiz-options"
                    if (optionID === selectedOptionArray[idx]) {
                      console.log("Selected option index" + {optionID})
                      className = className + " selected"
                    }
                    return (<li key = {optionID} onClick={() => isCorrect(option, optionID)} className = {className}>{option}</li>)
                  }
                )}
              </ul>
            </div>

          <button disabled={isDisabledRight} className="icon-button" onClick = {moveRight}>
            <FaAngleRight className="icon" />
          </button>
            
          </div>
          {showSubmitButton && (
            <Link to="/submission">
              <button className="submit-button" onClick = {handleSubmit}> Submit </button>
            </Link>
          )}
      </div>
    </>
  )
}

export default App
