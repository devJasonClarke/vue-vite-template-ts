import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useSchoolDetails = defineStore("main", {
  state: () => ({
    name: "Name"
  }),
  getters: {
    theName: (state) => state.name
  }
});
