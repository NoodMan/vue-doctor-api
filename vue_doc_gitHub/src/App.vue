<script setup lang="ts"></script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Oh! Putain! 👏🏻💪🏼" />

      <nav>
        <button class="btn btn-dark">
          <RouterLink to="/login"
            ><span class="material-icons"> login </span> Login</RouterLink>
        </button>
        <br />
        <button class="btn btn-dark">
          <RouterLink to="/consultations"
            ><span class="material-icons"> person_search </span>
            Consultation</RouterLink>
        </button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  background-color: black;
  font-weight: normal;
}

body {
  background-color: black;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

button {
  border-radius: 10px;
  padding-bottom : 10px;
  border: 3px solid rgb(247, 29, 76);
  display: contents;  /* pour que le bouton aparaisse ou non selon notre choix  */
  

}

a,
.green {
  text-decoration: none;
  color: rgb(189, 0, 47);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
