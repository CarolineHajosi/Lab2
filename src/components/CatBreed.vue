<script>
export default {
  created() {
    fetch('https://api.thecatapi.com/v1/breeds')
      .then((response) => response.json())
      .then((result) => {
        this.breeds = result
        this.breeds = this.breeds.slice(0, 25)
      })
  },
  data() {
    return { 
      breeds: null 
      }
  },
  props: ['maxBreeds']
}
</script>

<template>
  <ol>
    <li class="list" v-for="breed in breeds">{{ breed.name }}</li>
  </ol>
</template>
