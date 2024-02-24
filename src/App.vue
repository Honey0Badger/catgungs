<template>
  <div class="container">
  <Menu />
  <nav>
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
