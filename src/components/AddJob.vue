<template>
  <div class="rows">
  <h1>Принятие на работу</h1>
    <div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Кличка</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Возраст</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div>
        <label for="exampleInputEmail1" class="form-label">Порода</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Окрас</label>
        <input type="text" class="form-control" id="exampleInputPassword1">
      </div>
      <button class="btn btn-outline-success">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddJob',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
