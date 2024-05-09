/*********************************************************************
***
*Original Author:             Anthony Patterson *
*Date Created:                        5/07/2024 *
*Version:                                     1 *
*Date Last Modified:                  5/07/2024 *
*Modified by:                 Anthony Patterson *
*Modification log:                      
3- Updated to fetch the author's name as well as the quote
***
******************************************************************** */
"use strict";

const app = Vue.createApp({
    data() {
      return {
        currentQuote: '',
        currentAuthor: ''
      };
    },
    methods: {
      async fetchQuote() {
        try {
          const response = await fetch('https://api.quotable.io/random');
          const data = await response.json();
          this.currentQuote = data.content;
          this.currentAuthor = data.author;
        } catch (error) {
          console.error('Failed to fetch quote:', error);
        }
      }
    }
  });

app.mount('#app');
