<template>
<q-select v-model="selectedTest" :options="options" label="Vyberte si test" />
<q-btn label = 'Vykonat Test' :disable="selectedTest === null" color="positive" to="testing"></q-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { tests } from "../data/tests"
import { QSelectOption } from "quasar";


const selectedTest = ref(null)
const options:QSelectOption[] = tests.map(
  test =>{
    return{
      label: test.label,
      value: test.id.toString()
    }
  }
)

</script>
