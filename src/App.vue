<template>
  <router-view></router-view>
  <a href="#" id="moveTop" class="hide"><i class="fa-solid fa-circle-arrow-up"></i></a>
</template>

<script>
addEventListener('scroll', () => {
  if(window.scrollY > 300){
    document.getElementById('moveTop').classList.remove('hide')
  }
  else{
    document.getElementById('moveTop').classList.add('hide')
  }
});

export default {
  name: 'App',
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  width: 7px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #262626; 
}
::-webkit-scrollbar-thumb {
  background: #ff004d; 
}
::-webkit-scrollbar-thumb:hover {
  background: #fa417c; 
}

.hide{
  display: none;
}
#moveTop{
  position: fixed;
  z-index: 100;
  font-size: 30px;
  cursor: pointer;
  right: 20px;
  bottom: 20px;
}
#moveTop:hover{
  color: #ff004f;
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