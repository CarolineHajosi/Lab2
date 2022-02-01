<template>
  <h1>Ett</h1>
  <NavLinks />
  <CatBreed max-breeds="25" />
</template>

<script>
import CatBreed from '../components/CatBreed.vue'
import NavLinks from '../components/NavLinks.vue'

export default {
  components: {
    CatBreed,
    NavLinks,
  },
}
</script>
