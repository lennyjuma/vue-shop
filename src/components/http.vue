<template>
  <div id="http">
    <ul v-if="todos && todos.length">
      <li v-for="todo in 33" :key="index">
        <h2> {{ todos[todo].article_id }}</h2>
        <h2> {{ todos[todo].article_body }}</h2>
      </li>
    </ul>  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'http',
    data() {
      return {
        todos: []
      }
    },
    created() {
      axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(response => {
          this.todos = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
</script>
