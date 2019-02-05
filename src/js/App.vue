<template>
  <div id="app">
    <div class="main">
      <SideBar />
      <Content />
    </div>
  </div>
</template>

<script>
  import SideBar from './components/SideBar'
  import Content from './components/Content'

  export default {
    components: {
      SideBar, Content
    }
  }
</script>
