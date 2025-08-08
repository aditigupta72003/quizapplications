import { questions as originalQuestions } from "../data/questions.js"

let shuffledQuestions = []
let index = 0
let score = 0

function shuffleQuestions() {
    shuffledQuestions = [...originalQuestions] 
        .sort(() => Math.random() - 0.5)        
        .slice(0, 10)                    
}

shuffleQuestions(); 

export function current() {
    return shuffledQuestions[index]
}

export function submit(choiceIndex) {
    if (choiceIndex === current().answer) {
        score++
    }
    index++
    return index < shuffledQuestions.length
}

export function getScore() {
    return { score, total: shuffledQuestions.length };
}

export function reset() {
    score = 0
    index = 0
    shuffleQuestions() 
}
