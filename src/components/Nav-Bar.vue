<template>
    
    <v-toolbar  density="comfortable" class="hidden-sm-and-down"> 
        <!-- for large screens -->
        <v-btn>
            <router-link :to="{ name: 'Home' }">Home</router-link>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn>
            <router-link :to="{ name: 'TCGP_Prices' }">Prices</router-link>
        </v-btn>
        <v-btn>
            <router-link :to="{ name: 'Calendar' }">Calendar</router-link>
        </v-btn>
        <v-btn>
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
        </v-btn>
        <v-btn>
            <router-link :to="{ name: 'About' }">About</router-link>
        </v-btn>
    </v-toolbar>


    <!-- <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Final Fantasy TCG Bay Area</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" flat>{{
            item.title
          }}</v-btn>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>

      </v-toolbar> -->
</template>

<script>
export default {

}
</script>

<style>

</style>