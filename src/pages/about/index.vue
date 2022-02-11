<template>
  <div class="bg">
    <main>
      <h1>About</h1>
      <router-link to="/" class="link">Back</router-link>
    </main>
  </div>
</template>
<script setup lang="ts"></script>
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
    color: #ff5722;
    padding-bottom: 5px;
    border-bottom: 2px solid #eeeeee;
    margin-bottom: 20px;
  }
}
.link{
  color: #eeeeee;
  padding: 10px;
}
</style>
