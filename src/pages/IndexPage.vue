<template>
  <h5>{{ test.label }}</h5>
  <q-list v-for="question in questions" :key="question.id" :class="question.answered ? 'bg-green-2' : ''">
    <q-item>
      <q-item-section side class="text-h5">{{ question.id }}.</q-item-section>
      <q-item-label header>{{ question.label }}</q-item-label>
    </q-item>

    <q-item tag="label" v-ripple v-for="choice in question.choices" :key="choice.id * 1000 + choice.id">
      <q-item-section side class="text-bold">{{ choice.id }}.</q-item-section>
      <q-item-section side top>
        <q-checkbox v-model="answers" :val="question.id * 1000 + choice.id" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ choice.label }}</q-item-label>
        <q-item-label caption v-if="choice.hint">
          {{ choice.hint }}
        </q-item-label>
      </q-item-section>
    </q-item>


    <q-separator spaced />
  </q-list>
  <div class="q-pa-md flex flex-center">
  </div>
</template>

<script lang="ts">
import { toValue } from 'vue';
import { defineComponent, ref } from 'vue';
import getTest from '../data/questions'




export default defineComponent({
  name: 'IndexPage',
  setup() {
    const testId = 1
    const test = getTest(testId);

    if (!test) {
      throw new Error('Unable to load test with id: ' + testId)
    }

    const questions = test.questions
    const v1 = ref(12)
    const answers = ref([])
    return {
      questions,
      answers,
      test
    }
  }
});
</script>
