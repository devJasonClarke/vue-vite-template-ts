<template>
  <router-view />
</template>
<script setup lang="ts"></script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto";
  scroll-behavior: smooth;
  overflow-x: hidden;
  line-height: 1.5;
}

img {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
}

a {
  text-decoration: none;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 45px;
}

p {
  font-size: 16px;
}

button {
  cursor: pointer;
}
</style>
