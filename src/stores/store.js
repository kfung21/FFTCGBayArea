import { defineStore } from 'pinia'
import json from '@/assets/FFTCGPrices.json'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        cardPrices: json
      }),

    getters: {
        doubleCount: (state) => state.count * 2,
    },

    actions: {
        // since we rely on `this`, we cannot use an arrow function
        increment() {
          this.count++
        },
        randomizeCounter() {
          this.count = Math.round(100 * Math.random())
        },
      },
        
  })
  