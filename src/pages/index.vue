<template>
  <div class="bg">
    <main>
      <h1>Vue 3 + Vite + Typescript</h1>
      <input
        v-model="message"
        placeholder="Enter your message"
        type="text"
        @input="store.updateMessage(message)"
      />

      <p>{{ message }}</p>

      <router-link to="/about" class="link">About</router-link>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useStore } from "@/stores/index";

const store = useStore();

const message = ref(store.theMessage);
</script>
<style lang="scss">
.bg {
  width: 100%;
  height: 100vh;
  background-color: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    color: #eeeeee;
    padding-bottom: 5px;

    border-bottom: 2px solid #eeeeee;
  }
}

input {
  margin: 30px 0;
  padding: 15px;
  width: 100%;
  background-color: rgba(238, 238, 238, 0.7);
  outline: none;
  border: 2px solid #eeeeee;
  border-radius: 5px;
}

p {
  color: #ff5722;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.link {
  color: #eeeeee;
  padding: 10px;
}
</style>
