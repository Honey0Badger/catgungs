<template>
  <div class="container">
  <Menu/>
  <router-view/>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
  name: 'App',
  components: {
    Menu
  },
  mounted(){
    this.$store.dispatch('download')
  }
}
</script>
<style scoped>

</style>
