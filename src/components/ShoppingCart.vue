
<template>
  <div>
  <span class="btn modal-trigger badge" data-target="shoppingcart" >Cart {{ numInCart }}</span>
    <div id="shoppingcart" class="modal">
      <div class="modal-content">
        <h4>YOUR CART</h4>
      </div>
      <div class="modal-content">
        <table class="table">
          <tbody>
          <tr v-for="(item, index) in cart">
            <td>{{ item.name }}</td>
            <td>{{ item.year }}</td>
            <td>{{ item.price | dollars }}</td>
            <td>
              <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
            </td>
          </tr>
          <tr>
            <th></th>
            <th>{{ total | dollars }}</th>
            <th></th>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">KEEPSHOPIN</a>
        <a class="waves-effect waves-effect waves-light btn-flat">CHECKOUT</a>

      </div>
    </div>
  </div>
</template>
<script>
  import { dollars } from '../filters'
  export default {
    name: 'shoppingCart',
    computed: {
      inCart() { return this.$store.getters.inCart; },
      numInCart() { return this.inCart.length; },
      cart() {
        return this.$store.getters.inCart.map((cartItem) => {
          return this.$store.getters.mali.find((maliItem) => {
            return cartItem === maliItem.invId;
          });
        });
      },
      total() {
        return this.cart.reduce((initialvalue, valueofaddeditem) => initialvalue + valueofaddeditem.price, 0/*initial value */);
      },
    },

    filters: {
      dollars,
    },
    methods: {
      removeFromCart(index) {
        this.$store.dispatch('removeFromCart', index);
      },
    },

  };
  </script>
