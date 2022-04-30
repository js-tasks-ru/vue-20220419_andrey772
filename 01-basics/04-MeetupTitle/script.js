import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const Root = defineComponent({
  name: 'root-task04',

  data() {
    return {
      choose: '',
      title: 'Blank title...',
    };
  },

  watch: {
    choose(newValue) {
      this.fetchMeetupById(newValue).then((result) => {
        this.title = result.title;
      });
    },
  },

  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
});

createApp(Root).mount('#app');
