<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          v-model="user.firstName"
          name="firstName"
          class="form-control"

        />

      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          v-model="user.lastName"
          name="lastName"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="user.username"
          name="username"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="text"
          id="password"
          v-model="user.password"
          name="password"
          class="form-control"
        />

      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="status.registering">
          Register
        </button>
        <img v-show="status.registering" src alt="Registering Loading" />
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      },
      submitted: false
    };
  },
  created() {
    console.log(process.env.VUE_APP_API_URL)
  },
  computed: {
    ...mapState("account", ["status"])
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      e.preventDefault();
      this.submitted = true;
      this.register(this.user);

    }
  }
};
</script>
