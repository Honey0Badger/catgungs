<template>
  <div class="rows">
  <h1>Принятие на работу</h1>
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Кличка</label>
        <input v-model="staff.nickname" type="text" class="form-control" id="CatName" aria-describedby="emailHelp">
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Возраст</label>
        <input v-model="staff.age" type="text" class="form-control" id="CatAge" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Дата приема</label>
        <input v-model="staff.dateSJ" type="date" class="form-control" id="AddDate">
      </div>
      <button v-on:click="AddJob" class="btn btn-outline-success">Сохранить</button>
    </div>
  </div>
</template>

<script>
import Cat from '@/lib/Cat.js'
export default {
  name: 'AddJob',
  props: {
    msg: String
  },
  data(){
    return{
      staff:Cat
    }
  },
  methods:{
    AddJob(){
      this.$store.commit('addWorker', {...this.staff})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>