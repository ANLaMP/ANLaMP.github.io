/*********************************************************************

*Original Author:             Anthony Patterson *
*Date Created:                        4/20/2024 *
*Version:                                     2 *
*Date Last Modified:                  5/08/2024 *
*Modified by:                 Anthony Patterson *
*Modification log: *
***- 
2- Updated initial text in data()
2- Adjusted text content for toggleAnimation()
2- Updated archetype and theme arrays in generateOracle()
******************************************************************** */
"use strict";

const app = Vue.createApp({
    data() {
      return {
        question: '',
        oracleGenerated: false,
        oracle: {
          archetype: '',
          archetypeDescription: '',
          theme: '',
          themeDescription: ''
        }
      };
    },
    methods: {
      consultOracle() {
        if (this.question.trim() !== '') {
          this.oracle = this.generateOracle();
          this.oracleGenerated = true;
        } else {
          alert('Please enter a question.');
        }
      },
      generateOracle() {
        const archetypes = [
          ["The Mentor", "Offering guidance and wisdom to those who seek it."],
          ["The Seeker", "Encouraging exploration and discovery in your journey."],
          ["The Catalyst", "Sparking transformative change and growth."],
          ["The Resilient", "Embracing challenges as opportunities for growth and strength."],
          ["The Visionary", "Inspiring others with your innovative ideas and bold dreams."]
        ];
  
        const themes = [
          ["Seizing Opportunities", "Embrace new beginnings and take bold steps towards your dreams."],
          ["Navigating Challenges", "Stay resilient in the face of adversity and emerge stronger than ever."],
          ["Embracing Change", "Welcome change as a catalyst for personal growth and transformation."],
          ["Discovering Purpose", "Explore your passions and talents to uncover your true calling."],
          ["Finding Balance", "Prioritize self-care and harmony in all aspects of your life."],
          ["Embracing Authenticity", "Be true to yourself and let your unique light shine brightly."]
        ];
  
        const archetypeIndex = this.getRandomIndex(archetypes.length);
        const themeIndex = this.getRandomIndex(themes.length);
  
        return {
          archetype: archetypes[archetypeIndex][0],
          archetypeDescription: archetypes[archetypeIndex][1],
          theme: themes[themeIndex][0],
          themeDescription: themes[themeIndex][1]
        };
      },
      getRandomIndex(max) {
        return Math.floor(Math.random() * max);
      }
    }
  });
  
  app.mount('#app');
