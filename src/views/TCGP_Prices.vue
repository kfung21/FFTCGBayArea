<template>
  <NavBar></NavBar>
  
  <v-text-field label="Card Name" typ="text" v-model="cardFind" @change="setCardLookup"></v-text-field>
  <v-btn href="https://drive.google.com/file/d/1JEDb0trl-0A60GBWayHQY21EgKbrLE89/view?usp=sharing" style="float: right">Get All Cards in Excel</v-btn>
  
  <li v-for="card in getCards" :key="card.set" style="display:flex; gap: 10px">
    <a :href=card.Url_Details>{{card.Name.replaceAll("\"","")}}</a>
    <p>{{card.Set.replaceAll("#","[")}}]</p>
    <p><strong>{{card.Price}}</strong></p>
  </li>
</template>

<script setup>
  import NavBar from '@/components/Nav-Bar'
  import { FFTCGCardPrices } from '../stores/store'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'


  const cardFind = ref('')
  const store = FFTCGCardPrices();
  
  store.setCardLookup(cardFind)

  // storeToRefs lets todoList keep reactivity:
  const { cardPrices, count, getCards} = storeToRefs(store)


</script>

<style>

</style>