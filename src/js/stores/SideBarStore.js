import Vue from 'vue'
import axios from 'axios'

let sideBarItemId = 1

const mockData = [
  { id: sideBarItemId++, text: 'マイページ' },
  { id: sideBarItemId++, text: 'お知らせ' },
  { id: sideBarItemId++, text: 'やることリスト' }
];

const URL_BASE = '/api/sidebars';

let store = new Vue({
  data: {
    items: []
  },
  methods: {
    get_sidebars(endpoint, name) {
      Vue.set(this, name, mockData);
      this.$emit('GET_AJAX_COMPLETE');
    },
    get_data(name) {
      return this.$data[name];
    }
  }
});

export default store;
