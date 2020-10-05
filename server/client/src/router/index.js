import Vue from "vue";
import Router from "vue-router";
import Welcome from "@/components/Welcome";
import Volcano from "@/components/Volcano";
import AddVolcano from "@/components/AddVolcano";
import Help from "@/components/Help";
import Register from "@/components/Register";
import Login from "@/components/Login";

import VolcanoDetails from "@/components/VolcanoDetails";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/volcano",
      name: "Volcano",
      component: Volcano,
    },
    {
      path: "/volcano/add",
      name: "AddVolcano",
      component: AddVolcano,
    },

    {
      path: "/Volcano/:id",
      name: "VolcanoDetails",
      component: VolcanoDetails,
    },
    {
      path: "/help",
      name: "Help",
      component: Help,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});
