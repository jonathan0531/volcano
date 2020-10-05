import Api from "@/services/Api";

export default {
  //not used, handled by vuex
  // fetchVolcanos() {
  //   return Api().get("volcanos");
  // },
  //not used, handled by vuex
  // addVolcano(params) {
  //   return Api().post("volcanos", params);
  // },

  updateVolcano(params) {
    return Api().put("/" + params.id, params);
  },

  getVolcano(params) {
    return Api().get("/" + params.id);
  },

  deleteVolcano(id) {
    return Api().delete("/" + id);
  },
};
