<template>
  <div class="rows">
    <div>
      <div class="card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">{{nickname}}</h5>
          <p class="card-text">
            Номер: {{id}} <br>
            Возраст: {{age}} <br>
            Дата приема: {{startDate}} <br>
            Место патрулирования: {{street}}
          </p>
          <a href="#" class="btn btn-success">ADD</a>
          <router-link class="btn btn-primary" :to="{name: 'edit', params:{id: id }}">EDIT</router-link>
          <button v-on:click="delCat" type="button" class="btn btn-danger">DEL</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobCard',
  emits:['delete', 'edit'],
  props: {
    id: '',
    nickname: '',
    age: '',
    startDate: '',
    street: ''
  },
  methods:{
    delCat(){
      this.$emit('delete', this.$props.id)
    }
  }
}
</script>
