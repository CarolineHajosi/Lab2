<script>
export default {
  created() {
    fetch('https://meowfacts.herokuapp.com/')
      .then((response) => response.json())
      .then((result) => {
        this.datas = result
      })
  },
  data() {
    return { datas: null }
  },
}
</script>

<template>
  <p class="meow" v-for="data in datas">{{ data[0] }}</p>
</template>
