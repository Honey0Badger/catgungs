<template>
  <div class="container">
  <Menu />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style scoped>

</style>
