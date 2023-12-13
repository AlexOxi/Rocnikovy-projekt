import { Test } from "./data-layer"

export const tests: Test[] =
[
  {
    id: 1,
    label: 'Dejepis',
    questions: [{
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
    }]
  },
  {
    id: 2,
    label: 'Ako dobre poznas Alexa',
    questions: [{
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
    }]
  },
]







