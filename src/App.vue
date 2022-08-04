<template>
  <Header />
  <About />
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    About
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
  font-family: 'Poppins', sans-serif;
}
a{
  color: inherit;
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>
