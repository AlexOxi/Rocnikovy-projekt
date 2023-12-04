<template>
  <h5>{{ test.label }}</h5>
  <q-list v-for="(question, idx) in questions" :key="question.id" :class="question.answered ? 'bg-green-2' : ''">
    <q-item>
      <q-item-section side class="text-h5">{{ idx + 1 }}.</q-item-section>
      <q-item-label header>{{ question.label }}</q-item-label>
      <q-item-section v-if="question.answered">Answered</q-item-section>
    </q-item>

    <q-item tag="label" v-ripple v-for="(choice, idx) in question.choices" :key="choice.id * 1000 + choice.id">
      <q-item-section side class="text-bold">{{ idx + 1 }}.</q-item-section>
      <q-item-section side top>
        <q-checkbox v-model="selectedChoices" :val="choice.id" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ choice.label }}</q-item-label>
        <q-item-label caption v-if="choice.hint">
          {{ choice.hint }}
        </q-item-label>
      </q-item-section>
    </q-item>


  </q-list>


  <q-btn label="Vyhodnotit" color="positive" @click="checkTest" :disable="!hasAllAnswers"></q-btn>
  <q-btn label="Ukoncit bez vyhodnotenia" color="negative" class="on-right" @click="exitTest"></q-btn>
  <q-btn label="Reset" color="amber " @click="resetTest" class="on-right"></q-btn>

  <result-component v-if="isShowResult" :test="test" :answers="selectedChoices" />
</template>

<script lang="ts">
import { Ref, defineComponent, ref, watch } from 'vue';
import { getTest, clearAllAnswerFlags, getQuestionFromChoiceId } from '../data/questions'
import { computed } from 'vue';
import ResultComponent from '../components/ResultComponent.vue'



export default defineComponent({

  name: 'IndexPage',
  components: { ResultComponent },
  setup() {
    const testId = 1
    const isShowResult = ref(false)
    const test = getTest(testId);

    if (!test) {
      throw new Error('Unable to load test with id: ' + testId)
    }

    const questions = ref(test.questions)
    const v1 = ref(12)
    const selectedChoices: Ref<number[]> = ref([])


    const exitTest = () => {
      // TODO: implement

    }

    const resetTest = () => {
      isShowResult.value = false
      selectedChoices.value = []
    }

    const checkTest = () => {
      isShowResult.value = true
    }

    const checkAnswers = () => {
      clearAllAnswerFlags(questions.value)
      selectedChoices.value.forEach(sc => {
        const question = getQuestionFromChoiceId(sc, questions.value)
        if (question) {
          console.log('Question ', question, 'has been answered')
          question.answered = true

        } else {
          console.error('Question for ', sc, ' not found')
        }
      })
    }

    const hasAllAnswers = computed(() => {
      const answeredQuestions = questions.value.filter(q => q.answered === true)
      return answeredQuestions.length === questions.value.length
    })

    watch(selectedChoices, (val, oldval) => {
      checkAnswers()
    })

    return {
      questions,
      selectedChoices,
      test,
      exitTest,
      checkTest,
      hasAllAnswers,
      isShowResult,
      resetTest
    }
  }
});
</script>
