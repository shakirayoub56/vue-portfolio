<template>
  <Header />
  <About />
  <Services />
  <Portfolio />
  <Contact />
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Services,
    Portfolio,
    Contact,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  padding: 10px 10%;
}
.row{
    display: flex;
    justify-content: space-between;
}
.btn{
    display: block;
    margin: 50px auto 0 auto;
    width: fit-content;
    border: 1px solid #ff004f;
    padding: 14px 50px;
    border-radius: 6px;
    color: #fff;
    transition: all .5s;
}
.btn:hover{
    background: #ff004f;
}
.subtitle{
  font-size: 60px;
  font-weight: 600;
  color: #fff;
}
body{
  overflow-x: hidden;
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