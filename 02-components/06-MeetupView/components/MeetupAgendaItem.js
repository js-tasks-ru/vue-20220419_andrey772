import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../api/meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,

      required: true,
    },
  },

  methods: {
    getIcon() {
      return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg';
    },

    getTitle() {
      if (this.agendaItem.title) {
        return this.agendaItem.title;
      } else {
        return agendaItemDefaultTitles[this.agendaItem.type];
      }
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="getIcon()" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ getTitle() }}</h3>
        <p class="agenda-item__talk">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p>{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
