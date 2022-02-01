<template>
  <h1>Fyra</h1>
  <NavLinks />
  <HelloPixel />
  <br />
  <PetCat />
</template>

<script>
import NavLinks from '../components/NavLinks.vue'
import HelloPixel from '../components/HelloPixel.vue'
import PetCat from '../components/PetCat.vue'

export default {
  components: {
    NavLinks,
    HelloPixel,
    PetCat,
  },
}
</script>
