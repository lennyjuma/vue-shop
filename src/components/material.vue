<template>
  <div id="app">
    <md-card md-with-hover>
      <md-ripple>
      <md-card-header>
        <div class="md-title">Material Design with Vue.js 2 Demo</div>
        <div class="md-subhead">by CodingTheSmartWay.com</div>
      </md-card-header>
      <md-card-content>

        <md-button class="md-raised md-primary" v-on:click="fillTable()">Fill table</md-button>
        <md-button class="md-raised md-primary" v-on:click="clearTable()">Clear table</md-button>
        <br />
        <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>First name</md-table-head>
              <md-table-head>Last name</md-table-head>
              <md-table-head>Email</md-table-head>
              <br>
            </md-table-row>
          </md-table-header>
          <br/>
          <md-table-body>
            <md-table-row v-for="contact in contacts">
              <md-table-cell>{{contact.firstname}}</md-table-cell>
              <md-table-cell>{{contact.lastname}}</md-table-cell>
              <md-table-cell>{{contact.email}}</md-table-cell>
              <br/>
            </md-table-row>
          </md-table-body>
        </md-table>
      </md-card-content>
        </md-ripple>
    </md-card>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data: function () {
      return {
        contacts: []
      }
    },
    methods: {
      fillTable: function() {
        this.contacts.push({firstname: 'Sebastian', lastname: 'Eschweiler', email: 's.eschweiler@mail.com'});
        this.contacts.push({firstname: 'Bill', lastname: 'Smith', email: 'b.smith@mail.com'});
        this.contacts.push({firstname: 'Ann', lastname: 'Parker', email: 'a.parker@mail.com'});
      },
      clearTable: function() {
        this.contacts.pop();
      }
    }
  }
</script>
