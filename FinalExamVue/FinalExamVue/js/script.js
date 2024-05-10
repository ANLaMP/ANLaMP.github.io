"use strict";

const app = Vue.createApp({
    data() {
        return {
            aboutMe: "About a decade ago I became very interested in the work of a man called Dr. John Lilly. Dr. Lilly was a neuroscientist and a computer scientist, and he is best known for the work he did with dolphins, including his attempt to create a medium to facilitate communication between dolphins and humans",
            lillyQuote: "In the province of the mind, what one believes to be true is true or becomes true, within certain limits to be found experientially and experimentally. These limits are further beliefs to be transcended. In the mind there are no limits. ― John C. Lilly, M.D.",
            images: [
                { src: 'images/dolphin.jpg' },
                { src: './images/drlilly.jpg' },
                { src: './images/solidState.jpg' }
            ],
            formData: {
                firstName: '',
                lastName: '',
                subject: ''
            }
        };
    },
});
app.mount('#app');