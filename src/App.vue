<template>
  <div id="app">
    <div class="max-w-6xl mx-auto">
      <AddTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>

</style>
