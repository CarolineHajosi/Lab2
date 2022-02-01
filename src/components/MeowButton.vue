<script>
export default {
  data() {
    return {
      onClick() {
        alert('Mjau!')
      },
    }
  },
}
</script>

<template>
  <input
    class="button1 button2"
    v-on:click="onClick"
    type="button"
    value="Mjau?"
  />
</template>
