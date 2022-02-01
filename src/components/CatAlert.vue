<script>
export default {
  data() {
    return {
      catName: null,

      onClick() {
        let catName = this.catName
        alert(catName + ' är ett utmärkt kattnamn!')
      },
    }
  },
}
</script>

<template>
  <p class="meow">Vad heter din katt?</p>
  <input v-model="catName" placeholder="Kattnamn" />
  <br />
  <input
    class="button1 button2"
    v-on:click="onClick"
    type="button"
    value="OK"
  />

  <div>{{ catName }} ♥️</div>
</template>
