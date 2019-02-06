<template>
  <div class="main l-container">
    <SideBar class="l-sidebar"/>
    <Content class="l-content"/>
  </div>
</template>

<script>
  import SideBar from './side_bars/SideBar'
  import Content from './contents/Content'

  export default {
    components: {
      SideBar, Content
    }
  }
</script>


<style lang="scss">
  .main {
    margin: 40px auto 0;
    padding: 0 0 40px;
    width: 1020px;
  }

  .l-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    .l-sidebar {
      flex-basis: 29%;
      margin-right: 40px;
    }

    .l-content {
      flex-basis: 71%;
    }
  }
</style>
