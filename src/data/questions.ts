
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

interface Test {
  id: number,
  label: string,
  questions: Question[],

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
        id: 1,
        label: '15',
        hint: "Ved uz ma bradu pomaly mal by 15",
        correct: false
      },
      {
        id: 2,
        label: '18',
        correct: false
      },
      {
        id: 3,
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
        id: 1,
        label: '1.maja 1932',
        correct: false
      },
      {
        id: 2,
        label: 'Neskoncila',
        correct: false
      },
      {
        id: 3,
        label: '9.maja 1945',
        correct: true
      }
    ]
  }

)

tests.push({
  id:1,
  label: 'dejepis',
  questions
})

//

questions = []
questions.push(
  {
    id: 2,
    label: 'Aku zbran ma Alex',
    answered: false,
    choices: [
      {
        id: 1,
        label: 'M4',
        correct: false
      },
      {
        id: 2,
        label: 'MK18',
        correct: false
      },
      {
        id: 3,
        label: 'Scar-L',
        correct: true
      }
    ]
  },
)

tests.push({
  id:2,
  label: 'Zbrane',
  questions
})
const getTest = (testId: number) => {
  const test = tests.find((test) =>{
   if(test.id === testId)
   {
    return true;
   }
   return false;
  })

  return test;
}


export default getTest;
