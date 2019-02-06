<template>
  <div>
    <nav class="mypage-nav">
      <ul class="mypage-nav-list" v-if="sideBarItems.products.length">
        <SideBarItem
          v-for="item in sideBarItems.products"
          :key="item.id"
          :item="item"
        />
      </ul>
      <h3 class="mypage-nav-head">売上・ポイント</h3>
      <ul class="mypage-nav-list" v-if="sideBarItems.proceed.length">
        <SideBarItem
          v-for="item in sideBarItems.proceed"
          :key="item.id"
          :item="item"
        />
      </ul>
      <h3 class="mypage-nav-head">設定</h3>
      <ul class="mypage-nav-list" v-if="sideBarItems.profile.length">
        <SideBarItem
          v-for="item in sideBarItems.profile"
          :key="item.id"
          :item="item"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
  import store from '../../../stores/SideBarStore'
  import SideBarItem from './SideBarItem'

  export default {
    components: {
      SideBarItem
    },
    data () {
      return {
        sideBarItems: {}
      }
    },
    created () {
      store.$on('GET_AJAX_COMPLETE', () => {
        this.sideBarItems = store.get_data('items')
      });
      store.get_sidebars('', 'items');
    }
  }
</script>

<style lang="scss">
  .mypage-nav {
    &-list {
      background-color: #fff;
    }

    &-head {
      margin: 40px 0 0;
      font-weight: bold;

      &+.mypage-nav-list {
        margin: 8px 0 0;
      }
    }
  }
</style>
