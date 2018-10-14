<template>

    <div class="col s3" >
      <div class="card">
        <div class="card-image">
          <img :src="image" :alt="name" class="card-img-top">
        </div>
        <div class="card-content">
          <span>{{ price | dollars }} </span>
          <br/>
          <span><a class="btn-floating btn-large waves-effect waves-light teal darken-4 " @click="addToCart(invId)" ><i class="material-icons right">shopping_cart</i>add</a>
            </span>
        </div>

      </div>
    </div>
</template>
<script>
  import { dollars } from '../filters';
  export default {
    name: 'item',
    props: ['invId', 'name', 'image', 'price','year'],
    methods: {
      addToCart(invId){
        this.$store.dispatch('addToCart',invId)

      }
    },
    filters: {
      dollars,
    },
  };
</script>
