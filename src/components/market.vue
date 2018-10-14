<template>
  <div >
    <div class="row">
      <item
        v-for="item in mali"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :year="item.year"
        :price="item.price" />
    </div>
  </div>
</template>
<script>
  import item from './item.vue'
  export default {
    name: 'market',
    components: {
      item,
    },
    computed: {
      mali() { return this.$store.getters.mali },
    },
  };
</script>
