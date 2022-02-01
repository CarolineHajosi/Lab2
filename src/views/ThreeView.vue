<template>
  <h1>Tre</h1>
  <NavLinks />
  <HelloNinja />
  <br />
  <MeowButton />
</template>

<script>
import NavLinks from '../components/NavLinks.vue'
import HelloNinja from '../components/HelloNinja.vue'
import MeowButton from '../components/MeowButton.vue'

export default {
  components: {
    NavLinks,
    HelloNinja,
    MeowButton,
  },
}
</script>
