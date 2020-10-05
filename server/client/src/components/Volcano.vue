<template>
  <div id="nav">
    <v-btn text v-bind:to="{ name: 'AddVolcano' }">Click here to Add Volcano</v-btn>
    <v-layout row wrap>
      <v-flex xs4 v-for="volcano in volcanos" :key="volcano._id">
        <v-card class="cardspacer" hover max-width="400" height="100%">
          <v-img
            class="white--text align-end"
            height="250px"
            width="400px"
            v-bind:src="volcano.image"
          >
            <v-card-title v-bind:to="`/volcanos/${volcano._id}`">{{ volcano.name }}</v-card-title>
          </v-img>
          <v-card-title primary-title>
            <div>
              <div class="headline"></div>
              <span class="grey--text">
                {{ volcano.status }} Volcano ‧ Altitude: {{
                volcano.elevation }} ft.
              </span>
            </div>
          </v-card-title>
          <v-card-text>{{ volcano.description }}</v-card-text>
          <div class="padding">
            <v-card-actions class="justify-center">
              <v-btn class="button" color="primary" v-bind:to="`/volcano/${volcano._id}`">Select</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Volcanos",
  data() {
    return {
      message: "Select one of the volcano destinations to go skydiving!"
    };
  },
  computed: {
    volcanos() {
      //once fetched successfully, it is mapped the volcanos variable used in the template
      return this.$store.getters.fetchVolcanos;
    }
  },
  mounted() {
    //dispatching an action called "fetchVolcanos"
    this.$store.dispatch("fetchVolcanos");
  }
};
</script>

<style scoped>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: center;
  align-items: center;
}
#image {
  width: 400px;
  height: 250px;
}
.cardspacer {
  margin: 10px 10px;
  position: relative;
}
.button {
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
}
.padding {
  padding-top: 10px;
}
</style>