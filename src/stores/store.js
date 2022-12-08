import { defineStore } from 'pinia'
import json from '@/assets/FFTCGPrices.json'
// import testCards from 'https://drive.google.com/file/d/1JEDb0trl-0A60GBWayHQY21EgKbrLE89/view?usp=sharing'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const FFTCGCardPrices = defineStore('counter', {
    state: () => ({
        count: 0,
        cardPrices: json,
        cardLookup: ''
        // CP2: testCards
      }),

    getters: {
        doubleCount: (state) => state.count * 2,
        getCards (state) {
            if(state.cardLookup.length > 0){
                return state.cardPrices.filter(cn => cn.Name.toLocaleLowerCase().includes(state.cardLookup.toLocaleLowerCase()) || cn.Set.toLocaleLowerCase().includes(state.cardLookup.toLocaleLowerCase()))
            }
        }
    },

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        increment() {
          this.count++
        },
        randomizeCounter() {
          this.count = Math.round(100 * Math.random())
        },
        setCardLookup(str) {
          this.cardLookup = str
        },
      },
        
  })
  