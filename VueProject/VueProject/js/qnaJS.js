/*********************************************************************
***
*Original Author:             Anthony Patterson *
*Date Created:                        5/07/2024 *
*Version:                                     2 *
*Date Last Modified:                  5/07/2024 *
*Modified by:                 Anthony Patterson *
*Modification log:                            
2- Added <button> for "Need a Question?"  *
***
******************************************************************** */
"use strict";

const app = Vue.createApp({
    data() {
      return {
        isShaking: false,
        answers: [
          "Reflect on your inner self, and you shall find the answer.",
          "The truth lies within you; seek and you shall find.",
          "The answer may not be clear now, but trust in your journey.",
          "Look deep into your heart for guidance.",
          "The path to enlightenment starts with self-discovery."
        ],
        questions: [
          "What is the essence of your being?",
          "What does happiness mean to you?",
          "How do you perceive the passage of time?",
          "What role do you play in the interconnected web of existence?",
          "In what ways do you seek to better understand yourself?"
        ],
        answer: "",
        randomQuestion: ""
      };
    },
    methods: {
      shake() {
        this.isShaking = true;
        setTimeout(() => {
          this.isShaking = false;
          this.answer = this.getRandomAnswer();
        }, 1000);
      },
      getRandomAnswer() {
        const index = Math.floor(Math.random() * this.answers.length);
        return this.answers[index];
      },
      generateRandomQuestion() {
        const index = Math.floor(Math.random() * this.questions.length);
        this.randomQuestion = this.questions[index];
      }
    }
  });

  app.mount('#app');