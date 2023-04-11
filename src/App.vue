<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container mb-15">
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <router-link to="/" class="nav-link" active-class="active-link">Dane autorów</router-link>
              <router-link to="/map" class="nav-link" active-class="active-link">Mapa</router-link>
              <router-link to="/sos" class="nav-link" active-class="active-link">SOS</router-link>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.active-link {
  color: black;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap-reverse;
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
