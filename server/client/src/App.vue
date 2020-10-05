<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <router-link v-bind:to="{ name: 'Welcome' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>home</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text">Welcome</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Volcano' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>gavel</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text">Volcano Destinations</v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link v-bind:to="{ name: 'Help' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-action>
              <v-icon>info</v-icon>
            </v-list-item-action>
            <v-list-item-content class="text">Help</v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="orange" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        Volcanic
        <span id="sky">Skydiving</span>
        <img class="logo" height="50px" width="50px" src="@/assets/logo.png" alt="logo" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text v-bind:to="{ name: 'Login' }">Sign In</v-btn>
      <v-btn text v-bind:to="{ name: 'Register' }">Register</v-btn>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-content>
    <v-footer color="orange" class="footer" app>
      <span class="white--text">Copyright &copy; 2020 by Jonathan Cisneros</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#inspire {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.footer {
  justify-content: right;
}
#sky {
  font-weight: bolder;
  text-shadow: 2px 2px 2px red;
  margin-right: 10px;
}
</style>