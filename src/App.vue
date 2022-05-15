<template>
  <div id="app">
    <TodoApp></TodoApp>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp.vue'

export default {
  name: 'App',
  components: {
    TodoApp
  },
  metaInfo: {
    title: 'Awei\'s Todo App',
  }
}
</script>
