<template>
  <div class="rows">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item col-auto">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li class="nav-item col-auto">
            <router-link class="nav-link" to="/addjob">Принятие на работу</router-link>
          </li>
          <li class="nav-item col-auto">
            <router-link class="nav-link" to="/liststaff">Список сотрудников</router-link>
          </li>
          <li class="nav-item col-auto">
            <router-link class="nav-link" to="/editor">Редактор</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
