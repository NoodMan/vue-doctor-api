<template>
  <div id="center">
    <form
      @submit.prevent="handleSubmit"
      class="d-flex flex-column align-items-center"
    >
      <br />
      <div class="col-md-4">
        <h1>Login</h1>
        <br />
        <pre>
 👋🏼 Please log in 
     to see the consultations...</pre
        >
        <br />

        <label for="username" class="form-label">Username</label>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <span class="material-icons">person</span></span
          >
          <input
            type="text"
            class="form-control"
            placeholder="Enter your username..."
            v-model="user.username"
            id="username"
            name="username"
          />
        </div>

        <label for="username" class="form-label">Password</label>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            <span class="material-icons"> password </span></span
          >
          <input
            type="password"
            class="form-control"
            placeholder="Enter your password..."
            v-model="user.password"
            id="password"
            name="password"
          />
        </div>
        <br />
        <center>
          <input type="submit" value="Login" name="valider" id="valider" />
        </center>
      </div>
    </form>
  </div>
</template>

<script>
import MonMixin from "../mixins/fetch";
import { mapState, mapWritableState } from "pinia";
import { useUserStore } from "../stores/token";

export default {
  mixins: [MonMixin],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    // ACTION
    ...mapWritableState(useUserStore, ["token", "refresh_token"]),
    ...mapState(useUserStore, ["getToken", "getRefreshToken"]),
  },
  methods: {
    handleSubmit() {
      this.fetchLogin(this.user).then((credentials) => {
        this.token = credentials?.token;
        this.refresh_token = credentials?.refresh_token;

        this.$router.push("consultations");
      });
    },
  },
};
</script>

<style scoped>
body {
  background-color: blanchedalmond;
}
form {
  margin: 50px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  color: blueviolet;
}

h1 {
  text-align: center;
}

input {
  text-align: center;
}

p {
  font-size: 25px;
}
</style>
