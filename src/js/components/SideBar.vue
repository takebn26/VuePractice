<template>
  <ul v-if="sideBarItems.length">
    <SideBarItem
      v-for="item in sideBarItems"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<script>
  import store from '../stores/SideBarStore'
  import SideBarItem from './SideBarItem'

  export default {
    components: {
      SideBarItem
    },
    data () {
      return {
        sideBarItems: []
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