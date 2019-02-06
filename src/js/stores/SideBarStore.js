import Vue from 'vue'
import axios from 'axios'

let sideBarItemId = 1

const mockData = {
  'products': [
    { id: sideBarItemId++, text: 'マイページ' },
    { id: sideBarItemId++, text: 'お知らせ' },
    { id: sideBarItemId++, text: 'やることリスト' },
    { id: sideBarItemId++, text: 'いいね！一覧' },
    { id: sideBarItemId++, text: '出品する' },
    { id: sideBarItemId++, text: '出品した商品 - 出品中' },
    { id: sideBarItemId++, text: '出品した商品 - 取引中' },
    { id: sideBarItemId++, text: '出品した商品 - 売却済み' },
    { id: sideBarItemId++, text: '購入した商品 - 取引中' },
    { id: sideBarItemId++, text: '購入した商品 - 過去の取引' },
    { id: sideBarItemId++, text: 'ニュース一覧' },
    { id: sideBarItemId++, text: '評価一覧' },
    { id: sideBarItemId++, text: 'ガイド' },
    { id: sideBarItemId++, text: 'お問い合わせ' },
  ],
  'proceed': [
    { id: sideBarItemId++, text: '売上・振込申請' },
    { id: sideBarItemId++, text: 'ポイント' },
  ],
  'profile': [
    { id: sideBarItemId++, text: 'プロフィール' },
    { id: sideBarItemId++, text: '住所変更' },
    { id: sideBarItemId++, text: '支払い方法' },
    { id: sideBarItemId++, text: 'メール/パスワード' },
    { id: sideBarItemId++, text: '本人情報' },
    { id: sideBarItemId++, text: '電話番号の確認' },
    { id: sideBarItemId++, text: 'ログアウト' },
  ]
};

const URL_BASE = '/api/sidebars';

let store = new Vue({
  data: {
    items: {}
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
