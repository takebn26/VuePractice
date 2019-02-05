<template>
  <li>
    {{ todo.text }}
    <button @click="removeItem">
      X
    </button>
  </li>
</template>

<script>
  export default {
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      removeItem () {
        this.$emit('remove', this.todo.id)
      }
    }
  }
</script>