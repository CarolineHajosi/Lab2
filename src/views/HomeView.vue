<template>
  <h1>Hem</h1>
  <NavLinks />
  <CatAlert />
</template>

<script>
import NavLinks from '../components/NavLinks.vue'
import CatAlert from '../components/CatAlert.vue'

export default {
  components: {
    NavLinks,
    CatAlert,
  },
}
</script>
