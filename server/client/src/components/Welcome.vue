<template>
  <div id="app">
    <v-layout row wrap>
      <v-flex xs12>
        <div id="headerText">{{headerText}}</div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rqCNs-NRasc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div id="subText">{{subText}}</div>
        <v-btn class="button1" color="primary" v-bind:to="{ name: 'Login' }">Login</v-btn>
        <p>Not a Member?</p>
        <v-btn class="button2" color="primary" v-bind:to="{ name: 'Register' }">Sign Up!</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      headerText: "Welcome to Volcanic Skydiving Web Application",
      subText:
        "Introducing the worlds first volcanic skydiving web appication that allows you to pick a location around the world to experince the beauty of skydiving across the worlds most exotic volcanos!"
    };
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  height: 200px;
  width: 200px;
}
#headerText {
  font-size: 30px;
  margin: 20px 20px;
}
#subText {
  font-size: 15px;
  margin-right: 100px;
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.button1 {
  margin-bottom: 10px;
}
</style>