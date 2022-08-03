<template>
  <Header />
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #080808;
  color:#fff;
}
a{
  color: inherit;
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>
