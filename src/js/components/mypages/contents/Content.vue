<template>
  <div>
    <div class="mypage-content">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Content'
      }
    }
  }
</script>

<style lang="scss">
  .mypage-content {
    background-color: #fff;
    min-height: 400px;
  }
</style>
