<template>
  <div class="row">
    <div class="col-6">

      <q-knob show-value class="text-light-green" v-model="correctChoiceCount" size="70px" color="green" :min="0"
        :max="answers.length" readonly />
    </div>
    <div class="col-6">

      <q-knob show-value class="text-red" v-model="incorrectChoiceCount" size="70px" color="red" :min="0"
        :max="answers.length" readonly />
    </div>
  </div>
  <q-list>
    <q-item v-for="q in test.questions" :key="q.id">
      {{ q.label }}
    </q-item>
  </q-list>
</template>
<script setup lang="ts">

import { Test, getCorrectChoiceForQuestion } from 'src/data/questions';
import { onMounted, ref } from 'vue';
import { PropType } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  test: {
    type: Object as PropType<Test>,
    required: true
  },
  answers: {
    type: Object as PropType<number[]>,
    required: true
  }

})

let correctChoiceCount = ref(0)
let incorrectChoiceCount = ref(0)
onMounted(() => {



  props.test.questions.forEach(q => {
    const correctChoice = getCorrectChoiceForQuestion(q)
    if (correctChoice) {
      if (props.answers.includes(correctChoice.id)) {
        correctChoiceCount.value++
      } else {
        incorrectChoiceCount.value++
      }

    }
  });
})

</script>
