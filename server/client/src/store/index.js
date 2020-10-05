import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import swal from "sweetalert";

Vue.use(Vuex);

export const store = new Vuex.Store({
  //current state of the application for the volcano listing page
  state: {
    volcanos: [],
  },
  //gets the value of the volcanos from the state
  getters: {
    fetchVolcanos: (state) => state.volcanos,
  },
  //mutate the state of the volcanos in the application
  mutations: {
    ADD_VOLCANO: (state, payload) => {
      state.volcanos.unshift(payload);
    },
    GET_VOLCANOS: (state, payload) => {
      state.volcanos = payload;
    },
  },
  actions: {
    fetchVolcanos: (context, payload) => {
      axios({
        method: "get",
        url: "http://localhost:5000/api/volcanos/",
      })
        .then((response) => {
          //committing a mutation called GET_VOLCANOS, which mutates the vaule of volcanos in the state
          context.commit("GET_VOLCANOS", response.data.volcanos);
        })
        .catch(() => {});
    },
    addVolcano: (context, payload) => {
      return axios({
        method: "post",
        data: payload,
        url: "http://localhost:5000/api/volcanos/",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          //committing a mutation called ADD_VOLCANOS, which mutates the vaule of volcanos in the state
          context.commit("ADD_VOLCANO", response.data);
          swal("Great!", "Volcano added successfully!", "success");
        })
        .catch((error) => {
          console.log(error);
          swal("Oh no!", "Could not add the Volcano!", "error");
        });
    },
  },
});
