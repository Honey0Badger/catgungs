<template>
  <div class="rows">
    <Editor/>
  </div>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'
export default {
  name: 'HomeView',
  components: {
    Editor
  }
}
</script>
