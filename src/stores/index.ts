import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("main", {
  state: () => ({
    message: "A wonderful day to code!"
  }),
  getters: {
    theMessage: (state) => state.message
  },
  actions: {
    updateMessage(person: string) {
      console.log(person);
      this.message = person;
    }
  }
});
