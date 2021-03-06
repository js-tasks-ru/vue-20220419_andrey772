import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

import MeetupDescription from './components/MeetupDescription.js';
import MeetupCover from './components/MeetupCover.js';
import MeetupInfo from './components/MeetupInfo.js';
import MeetupAgenda from './components/MeetupAgenda.js';
import MeetupAgendaItem from './components/MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <!-- meetup cover-->
      <meetup-cover :title="meetup.title" :image="meetup.image"></meetup-cover>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"></meetup-description>

            <template v-if="meetup.agenda.length > 0" >
              <h3>Программа</h3>
              <meetup-agenda :agenda="meetup.agenda"></meetup-agenda>
            </template>
            <ui-alert v-else-if="meetup.agenda.length === 0" >Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <meetup-info
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            ></meetup-info>
          </div>
        </div>
      </ui-container>
    </div>`,
});
