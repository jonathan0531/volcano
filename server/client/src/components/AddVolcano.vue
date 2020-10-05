<template>
  <div id="app">
    <v-flex xs12>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              label="Volcano Name"
              placeholder="VOLCANO NAME"
              v-model="name"
              :rules="nameRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-textarea
              name="input-7-1"
              placeholder="DESCRIPTION"
              label="Volcano Description"
              v-model="description"
              :rules="descRules"
              required
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              label="Image URL"
              placeholder="LINK TO IMAGE URL"
              v-model="image"
              :rules="imgRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              label="Location"
              placeholder="LOCATION"
              v-model="location"
              :rules="locationRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-select
              label="Volcano Status"
              v-model="status"
              required
              :rules="statusRules"
              :items="options"
            ></v-select>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              label="Elevation"
              placeholder="ELEVATION IN FT."
              v-model="elevation"
              :rules="elevationRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              label="Skydiving Price $"
              placeholder="USD"
              v-model="price"
              :rules="priceRules"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn class="button" color="disabled" v-bind:to="{ name: 'Volcano' }">Back</v-btn>
        <v-btn class="button" color="success" @click="submit" :disabled="!valid">submit</v-btn>
        <v-btn class="button" @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
export default {
  data: () => ({
    volcano: null,
    valid: true,
    name: "",
    description: "",
    image: "",
    location: "",
    status: "",
    elevation: "",
    price: "",
    //using form validation to make sure fields are filled out
    nameRules: [v => !!v || "Volcano name is required"],
    descRules: [v => !!v || "Volcano description is required"],
    imgRules: [v => !!v || "Image URL is required"],
    locationRules: [v => !!v || "Volcano location is required"],
    statusRules: [v => !!v || "Volcano status is required"],
    elevationRules: [v => !!v || "Volcano elevation is required"],
    priceRules: [v => !!v || "Price is required"],
    select: null,
    options: ["Active", "Inactive"]
  }),
  methods: {
    submit() {
      //if the form is filled out, the document is added to the db by updating the store
      if (this.$refs.form.validate()) {
        const volcano = {
          name: this.name,
          description: this.description,
          image: this.image,
          location: this.location,
          status: this.status,
          elevation: this.elevation,
          price: this.price
        };
        //dispatching the action "addVolcano" along with the variable"
        this.$store.dispatch("addVolcano", volcano);
        this.$refs.form.reset();
        this.$router.push({ name: "Volcano" }); //redirects the user to the homepage
      }
      return true;
    },
    clear() {
      this.$refs.form.reset();
    }
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
.button {
  margin: 10px 10px;
}
#form {
  margin: 0;
  padding: 0;
}
v-text-field {
  margin: 0;
  padding: 0;
}
</style>