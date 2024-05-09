/*********************************************************************
***
*Original Author:             Anthony Patterson *
*Date Created:                        5/07/2024 *
*Version:                                     1 *
*Date Last Modified:                  5/07/2024 *
*Modified by:                 Anthony Patterson *
*Modification log:                              *
***
******************************************************************** */
"use strict";

const app = Vue.createApp({
    data() {
      return {
        pastLifeLoading: false,
        nextLifeLoading: false,
        pastLifeCountry: '',
        pastLifeGender: '',
        nextLifeCountry: '',
        nextLifeGender: ''
      };
    },
    methods: {
      generatePastLife() {
        this.pastLifeLoading = true;
        setTimeout(() => {
          this.pastLifeCountry = this.getRandomCountry();
          this.pastLifeGender = this.getRandomGender();
          this.pastLifeLoading = false;
        }, 5000);
      },
      generateNextLife() {
        this.nextLifeLoading = true;
        setTimeout(() => {
          this.nextLifeCountry = this.getRandomCountry();
          this.nextLifeGender = this.getRandomGender();
          this.nextLifeLoading = false;
        }, 5000);
      },
      getRandomCountry() {
        const countries = ['USA', 'UK', 'Canada', 'Australia', 'Japan', 'Brazil', 'France', 'Germany', 'India', 'Bavaria'];
        return countries[Math.floor(Math.random() * countries.length)];
      },
      getRandomGender() {
        const genders = ['Male', 'Female'];
        return genders[Math.floor(Math.random() * genders.length)];
      }
    }
  });

  app.mount('#app');