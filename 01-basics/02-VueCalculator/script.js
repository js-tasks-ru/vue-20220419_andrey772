import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'root-task02',

  data() {
    return {
      num1: 0,
      num2: 0,
      operator: '',
    };
  },

  computed: {
    sum() {
      return this.num1 + this.num2;
    },
    subtract() {
      return this.num1 - this.num2;
    },
    multiply() {
      return this.num1 * this.num2;
    },
    divide() {
      return this.num1 / this.num2;
    },
  },
});

createApp(Root).mount('#app');
