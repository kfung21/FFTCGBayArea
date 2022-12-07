<template>
  <NavBar></NavBar>
  <v-btn  
    variant="flat"
    href="https://calendar.google.com/calendar/u/0/embed?src=fftcgbayarea@gmail.com&ctz=America/Los_Angeles&pli=1"
  >
    <v-icon
      start
      icon="mdi-calendar"
    ></v-icon>
    View in App
  </v-btn>
  <br>
  <iframe src="https://calendar.google.com/calendar/embed?src=fftcgbayarea%40gmail.com&ctz=America%2FLos_Angeles" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</template>

<script setup>
  import NavBar from '@/components/Nav-Bar'

</script>

<style>

</style>