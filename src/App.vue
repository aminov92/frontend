<template>
  <div id="app">
    <!-- navbar -->
    <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
      <div class="container">
        <div class="w3-bar w3-top w3-red w3-large" style="z-index: 4">
          <span class="w3-bar-item w3-right">Pizzahouse</span>
          <span class="w3-left w3-mobile">
            <router-link to="/" class="navbar-brand w3-bar-item w3-button"
              >PriseCommandes</router-link
            >
            <router-link
              class="nav-link w3-bar-item w3-button w3-teal"
              to="/FilAttente"
              >FilAttente</router-link
            >
          </span>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>


