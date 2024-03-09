<template>
  <div class="rows">
    <h1>Редактировать сотрудника {{id}}</h1>
    <div>
      <div class="mb-3">
        <label for="catName" class="form-label">Кличка</label>
        <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div>
        <label for="catAge" class="form-label">Возраст</label>
        <input v-model="staff.age" type="text" class="form-control" id="EditAge" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="catDate" class="form-label">Дата приема</label>
        <input v-model="staff.dateSJ" type="date" class="form-control" id="EditDate">
      </div>
      <div class="mb-3">
        <label for="catStreet" class="form-label">Место патрулирования</label>
        <input v-model="staff.street" type="text" class="form-control" id="place">
      </div>
      <button v-on:click="editJob" class="btn btn-outline-success">Сохранить</button>
    </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'JobEdit',
  props: {
    id: ''
  },
  data(){
    return{
      staff: Cat
    }
  },
  methods:{
    editJob(){
      this.$store.commit('editWorker', {...this.staff})
    }
  },
  mounted(){
    this.$el.staff = this.$store.getters.getCatId(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>