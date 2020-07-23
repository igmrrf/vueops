<template>
  <div class="test">
    <input type="text" v-model="title" />
    <h1>{{msg}}</h1>
    <h1 v-if="active">{{title}}</h1>
    <h1 v-else>{{title2}}</h1>
    <h1>{{user.last_name}}</h1>
    <h1 v-text="user.first_name"></h1>
    <ul>
      <li v-for="item in items" v-bind:key="item.key">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('Hello World')">Say Greeting</button>
    <input type="text" v-on:keyup="keyPressed" v-on:keyup.enter="enterKey" />
    <hr />
    <label for="first_name"></label>
    <input type="text" name id v-model="user.first_name" />
    <br />
    <label for="first_name"></label>
    <input type="text" name id v-model="user.last_name" />
    <h3>{{fullName}}</h3>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: String
  },
  data() {
    return {
      title: "hello World",
      title2: "Hello There",
      user: {
        first_name: "John",
        last_name: "Lazy"
      },
      active: true,
      items: [
        { title: "Item one", key: 1 },
        { title: "Item Two", key: 2 },
        { title: "Item Three", key: 3 }
      ]
    };
  },
  methods: {
    greet: function(greeting) {
      alert(greeting);
    },
    keyPressed: function(e) {
      console.log(e.target.value);
    },
    enterKey: function(e) {
      alert(e.target.value);
    }
  },
  computed: {
    fullName: function() {
      return this.user.first_name + " " + this.user.last_name;
    }
  }
};
</script>

<style scoped>
</style>