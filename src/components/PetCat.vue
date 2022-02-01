<script>
export default {
  data() {
    return {
      count: 0,
      s: 15,
    }
  },
  methods: {
    pet() {
      this.count++
    },
  },
}
</script>

<template>
  <input
    class="button1 button2"
    :disabled="count === 15"
    v-on:click="pet"
    type="button"
    :value="'Klapp-knapp'"
  />
  <br />
  <span v-bind:class="{ s: s > 14 && s < 16 }" v-if="count === 15"
    >Nu räcker det.</span
  >
  <p class="meow">Du har klappat katten {{ count }} gånger!</p>
</template>

<style lang="scss" scoped>
$span-color: red;

.s {
  color: $span-color;
}
</style>
