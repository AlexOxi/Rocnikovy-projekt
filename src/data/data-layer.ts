import { tests } from "./tests"



export interface Test {
  id: number,
  label: string,
  questions: Question[],

}

interface Question {
  id: number,
  label: string,
  choices: Choice[],
  answered?: boolean
  isCorrectlyAnswered?: boolean
}

interface Choice {
  id: number,
  label: string,
  hint?: string,
  correct: boolean
}



export const getTest = (testId: number) => {
  const test = tests.find((test) => {
    if (test.id === testId) {
      return true;
    }
    return false;
  })

  return test;
}

export const clearAllAnswerFlags = (questions: Question[]) => {
  for (const question of questions) {
    question.answered = false
  }

}


export const getCorrectChoiceForQuestion = (question: Question) => {
  const correctChoice = question.choices.find((c) => c.correct)
  return correctChoice
}

export const getQuestionFromChoiceId = (choiceId: number, questions: Question[]) => {
  for (const q of questions) {
    for (const c of q.choices) {
      if (c.id === choiceId) {
        return q
      }
    }
  }

  return
}
