<template>
  <div class="header">
    <img alt="Logo" src=".././assets/logo.png">
    <ul>
      <li><a href="#">vue-router</a></li>
      <li><a href="#">vuex</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 100vh;
}
ul {
  display: flex;
}
</style>