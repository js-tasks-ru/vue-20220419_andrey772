import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: ['count'],
  // props: {
  //   count: {
  //     type: [Number, String],
  //     required: true,
  //   },

  //   default: () => 0,
  // },  

  template: `<button type="button" v-on:click="$emit('add-count')">{{ count }}</button>`,
});