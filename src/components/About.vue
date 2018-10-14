<template>
  <div class="about">
    <h1>What is a Crypto-Currency?</h1>
    <div class="row">
      <div class="col s4" v-for="todo in todos">
        <h1>
          {{ todo.title }}
        </h1>
        <input type="text" title="date" class="datepicker">


      </div>

    </div>
    <p>
      It's a digital currency in which encryption techniques are used to regulate the generation of units of currency and verify the transfer of funds, operating independently of a central bank.
    </p>
  </div>
</template>

<script>

export default {
  name: 'About',
  computed: {
    todos() { return this.$store.getters.todos; },
  },
}
</script>
