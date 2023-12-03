
interface Test {
  id: number,
  label: string,
  questions: Question[],

}

interface Question {
  id: number,
  label: string,
  choices: Choice[],
  answered?: boolean
}

interface Choice {
  id: number,
  label: string,
  hint?: string,
  correct: boolean
}


let questions: Question[] = []
const tests: Test[] = []

questions.push(
  {
    id: 1,
    label: 'Kolko rokov ma Alex',
    answered: false,
    choices: [
      {
        id: 1001,
        label: '15',
        hint: "Ved uz ma bradu pomaly mal by 15",
        correct: false
      },
      {
        id: 1002,
        label: '18',
        correct: false
      },
      {
        id: 1003,
        label: '17',
        correct: true
      }
    ]
  },
  {
    id: 2,
    label: 'Kedy skoncila druha svetova vojna?',
    choices: [
      {
        id: 2001,
        label: '1.maja 1932',
        correct: false
      },
      {
        id: 2002,
        label: 'Neskoncila',
        correct: false
      },
      {
        id: 2003,
        label: '9.maja 1945',
        correct: true
      }
    ]
  }

)

tests.push({
  id: 1,
  label: 'dejepis',
  questions
})

//

questions = []
questions.push(
  {
    id: 3,
    label: 'Aku zbran ma Alex',
    answered: false,
    choices: [
      {
        id: 3001,
        label: 'M4',
        correct: false
      },
      {
        id: 3002,
        label: 'MK18',
        correct: false
      },
      {
        id: 3003,
        label: 'Scar-L',
        correct: true
      }
    ]
  },
)

tests.push({
  id: 2,
  label: 'Zbrane',
  questions
})

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
