<template>
  <div class="rows">
    <div>
      <div class="card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">{{nickname}}</h5>
          <p class="card-text">
            Возраст: {{age}} <br>
            Дата приема: {{startDate}}
          </p>
          <a href="#" class="btn btn-success">ADD</a>
          <a href="#" class="btn btn-primary">EDIT</a>
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
  emits:['delete'],
  props: {
    nickname: '',
    age: '',
    startDate: ''
  },
  methods:{
    delCat(){
      this.$emit('delete', this.$props.nickname)
    }
  }
}
</script>
