<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
export default {
  props: [
    'count',
    'evenOrOdd',
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
  ],
};
</script>
