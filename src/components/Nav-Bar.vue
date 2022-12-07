<template>
    
    <v-toolbar  density="comfortable" >
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
            <router-link :to="{ name: 'About' }">About</router-link>
        </v-btn>



    </v-toolbar>

</template>

<script>
export default {

}
</script>

<style>

</style>