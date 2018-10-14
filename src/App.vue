<template>
  <div id="app" >
    <nav class="teal darken-4 " >
      <div class="nav-wrapper ">
        <a href="#" class="brand-logo lime-textz">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li> <router-link class="lime-text" to="/">HOME</router-link> </li>
          <li> <router-link class="lime-text" to="/about">ABOUT</router-link> </li>
          <li><router-link class="lime-text" to="/market">MARKET</router-link></li>
          <li><router-link class="lime-text" to="/material">MATERIAL</router-link></li>
          <li><router-link class="lime-text" to="/http">JSON</router-link></li>

        </ul>
      </div>
    </nav>
    <br>
    <div class="row">
      <div class=" col s9" >
        <h1 class="teal-text text-darken-3 center" > SAVANNA </h1>
      </div>
      <div class="col s3">
        <ShoppingCart />
      </div>
    </div>
    <router-view></router-view>

    <br/>

    <div class="row">

      <Item
        v-for="item in mali"
        :key="item.invId"
        v-bind:invId="item.invId"
        :name="item.name"
        v-bind:image="item.image"
        :year="item.year"
        v-bind:price="item.price" />
    </div>
    {{ inCart }}
    <footer class="page-footer teal darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Footer Content</h5>
            <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
          <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
  import Item from './components/item.vue';
  import ShoppingCart from './components/ShoppingCart'

  export default {
    name: 'app',
    computed: {
      mali() { return this.$store.getters.mali },
    },
    components: {
      Item,
      ShoppingCart,
    },
  };

</script>
