<template>
  <div id="app">
    <v-flex xs12>
      <v-form id="form" v-model="valid" ref="form" lazy-validation>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Volcano Name"
              v-model="name"
              :rules="nameRules"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-textarea
              v-bind:disabled="isBeingEdit"
              label="Volcano Description"
              v-model="description"
              :rules="descRules"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Image URL"
              :rules="imgRules"
              v-model="image"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Location"
              :rules="locationRules"
              v-model="location"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Volcano Status"
              :rules="statusRules"
              v-model="status"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Elevation in ft."
              :rules="elevationRules"
              v-model="elevation"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="10" sm="6">
            <v-text-field
              v-bind:disabled="isBeingEdit"
              label="Skydiving Price $(USD)"
              :rules="priceRules"
              v-model="price"
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-btn class="button" color="primary" v-show="hide" @click="beginEdit">Begin Edit</v-btn>
          <v-btn class="button" v-show="visible" color="primary" @click="updateVolcano">Update</v-btn>
          <v-btn
            class="button"
            v-show="visible"
            color="disabled"
            v-bind:to="{ name: 'Volcano' }"
          >Return Home</v-btn>
          <v-btn
            class="button"
            v-show="visible"
            color="error"
            @click="deleteVolcano($route.params.id)"
          >Delete</v-btn>
        </div>
      </v-form>
    </v-flex>
  </div>
</template>

<script>
import VolcanoService from "@/services/VolcanoService";
import swal from "sweetalert";

export default {
  name: "Volcano",
  data() {
    return {
      name: "",
      description: "",
      image: "",
      location: "",
      status: "",
      elevation: "",
      valid: true,
      isBeingEdit: true,
      visible: false,
      hide: true,
      nameRules: [v => !!v || "Volcano name is required"],
      descRules: [v => !!v || "Volcano description is required"],
      imgRules: [v => !!v || "Image URL is required"],
      locationRules: [v => !!v || "Volcano location is required"],
      statusRules: [v => !!v || "Volcano status is required"],
      elevationRules: [v => !!v || "Volcano elevation is required"],
      priceRules: [v => !!v || "Price is required"]
    };
  },
  mounted() {
    this.getVolcano();
  },

  methods: {
    async getVolcano() {
      const response = await VolcanoService.getVolcano({
        id: this.$route.params.id
      });
      this.name = response.data.name;
      this.description = response.data.description;
      this.image = response.data.image;
      this.location = response.data.location;
      this.status = response.data.status;
      this.elevation = response.data.elevation;
      this.price = response.data.price;
    },
    async updateVolcano() {
      await VolcanoService.updateVolcano({
        id: this.$route.params.id,
        name: this.name,
        description: this.description,
        image: this.image,
        location: this.location,
        status: this.status,
        elevation: this.elevation,
        price: this.price
      });
      swal("Success!", `The Volcano has been updated!`, "success");
      this.$router.push({ name: "Volcano" });
    },

    //if user clicks on begin edit button, display the other buttons that allow editing and delete
    beginEdit() {
      this.isBeingEdit = false;
      this.visible = true;
      this.hide = false;
    },
    //delete volcano by taking in the _id parameter and making axios call
    async deleteVolcano(id) {
      VolcanoService.deleteVolcano(id);
      swal("Success!", `The Volcano has been Deleted!`, "success");
      this.$router.push({ name: "Volcano" });
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