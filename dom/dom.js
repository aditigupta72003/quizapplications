import { current, getScore, reset, submit } from "../state/quiz.js";

let quizCard = document.createElement("div")
quizCard.id = "quiz-card"
document.body.append(quizCard)

export function showQuestion(){
    let q = current();
    quizCard.innerHTML = `
    <h2>${q.text}</h2>
    <div id="choices">  </div>
    <p id="progress"> </p>
    `

    let choiceBox = document.querySelector("#choices")
    q.choices.forEach((el,i)=> {

        let button = document.createElement("button")
        button.innerText = el
        button.onclick = ()=>{
            let more = submit(i)
            more ? showQuestion() : showResult()

        }
        choiceBox.append(button)

    })



}
export function getprogress() {
    const {score,total} = getScore()
        quizCard.querySelector("#progress").textContent= `Score: ${score} / total: ${total}`

}

export function showResult(){
    const {score,total} = getScore()
    quizCard.innerHTML = ` 
    <h2> Quiz is findihsed </h2>
    <p> your score: ${score} / ${total} </p>
    <button id = "retry"> try agian </button>`

    quizCard.querySelector ("#retry").onclick = () =>
    {
        reset()
        showQuestion()
    }
}