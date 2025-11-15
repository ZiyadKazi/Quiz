// import { isCorrectArray } from './App.jsx'
import quiz_questions from '../questions.json'


const Submission = () => {
    const result = localStorage.getItem("result")
    const correctArray = JSON.parse(localStorage.getItem("correctArray"))

    //const selectedOptionsArray = JSON.parse(localStorage.getItem("selectedOptionArray"))
    const questions = quiz_questions["questions"]
    console.log(correctArray)


    return (
        <div className="main-content">
            <div className="selected-list">
                <ul>
                    {questions.map((questionInfo, index) =>
                        (<li key = {index}>
                            {questionInfo["question"]}
                        </li>)
                    )}
                </ul>
            </div>


            <div className="score">
                <p>
                    {/* {isCorrectArray[0]} */}
                    Your score is {result*10}%!
                </p>            
            </div>
        </div>
    )
}

export default Submission