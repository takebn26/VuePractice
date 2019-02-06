<template>
  <li>
    <a class="mypage-nav-list-item" href="#">
      {{ item.text }}
      <font-awesome-icon icon="angle-right" />
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .mypage-nav-list {
    li {
      border-top: 1px solid #eee;

      &:first-child {
        border: 0;
      }
    }
    &-item {
      min-height: 48px;
      display: block;
      padding: 16px;
      font-size: 14px;
      position: relative;

      &:hover {
        background-color: #FCFCFC;

        .fa-angle-right {
          opacity: 1.0;
          right: 12px;
        }
      }

      .fa-angle-right {
        opacity: 0.25;
        position: absolute;
        width: 20px;
        height: 20px;
        top: 32%;
        right: 16px;
      }
    }

    &-item.active {
      background-color: #eee;
      font-weight: 600;
    }
  }
</style>
