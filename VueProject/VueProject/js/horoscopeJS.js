/*********************************************************************
***
*Original Author:             Anthony Patterson *
*Date Created:                        5/07/2024 *
*Version:                                     1 *
*Date Last Modified:                  5/07/2024 *
*Modified by:                 Anthony Patterson *
*Modification log:
1- Modified to reflect transition from text input to a drop down menu for horoscope                              *
***
******************************************************************** */
"use strict";

const app = Vue.createApp({
    data() {
      return {
        zodiacInput: '',
        zodiac: '',
        horoscope: '',
        loading: false,
        errorMessage: ''
      };
    },
    methods: {
      async getHoroscope() {
        if (!this.zodiacInput) {
          this.errorMessage = 'Please select your zodiac sign.';
          return;
        }
        this.errorMessage = '';
        this.loading = true;

        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          const horoscopes = [
            "Today is a good day for new beginnings. Embrace change and explore new opportunities.",
            "You may face some challenges today, but remember to stay positive and keep moving forward.",
            "Your intuition will be strong today. Trust your instincts and follow your heart.",
            "Focus on self-care today. Take some time to relax and recharge your energy.",
            "You may receive unexpected news today. Stay open-minded and adaptable.",
            "Take some time to connect with loved ones today. They may need your support.",
            "Today is a great day for creativity. Express yourself through art, music, or writing."
          ];
          this.horoscope = horoscopes[Math.floor(Math.random() * horoscopes.length)];
          this.zodiac = this.zodiacInput;
        } catch (error) {
          console.error('Error casting horoscope:', error.message);
          this.errorMessage = 'Failed to cast horoscope. Please try again later.';
        } finally {
          this.loading = false;
        }
      }
    }
  });

  app.mount('#app');
