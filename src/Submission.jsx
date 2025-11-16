// import { isCorrectArray } from './App.jsx'
import quiz_questions from '../questions.json'
import './Submission.css'


const Submission = () => {
    const result = localStorage.getItem("result")
    const correctArray = JSON.parse(localStorage.getItem("correctArray"))

    const selectedOptionArray = JSON.parse(localStorage.getItem("selectedOptionArray"))
    const questions = quiz_questions["questions"]
    console.log(correctArray)


    return (
        <div className="main-content">

            <div className="score">
                <h2>
                    {/* {isCorrectArray[0]} */}
                    Your score is {result*10}%!
                </h2>            
            </div>

            <div className="horizontal-separator"></div>

            <div className="selected-list">
                {questions.map((questionInfo, index) =>
                    (<div key = {index}>
                        <h3>
                            {questionInfo["question"]} 
                        </h3> 
                        <p>
                            {questionInfo["options"][selectedOptionArray[index]]} 
                            {correctArray[index] && (
                                " ✅"
                            )}
                            {!correctArray[index] && (
                                " ❌"
                            )}  
                        </p>
                        {!correctArray[index] && (
                                <div>
                                    <p>
                                        Correct answer was: {questionInfo["correctAnswer"]}
                                    </p>
                                </div>
                            )}
                    </div>)
                )}
            </div>


            
        </div>
    )
}

export default Submission