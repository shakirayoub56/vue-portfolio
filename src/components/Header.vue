<template>
  <div id="header">
    <div class="container">
      <nav>
        <a href="/"><img src="../assets/logo.png" alt="logo"></a>
        <ul id="sidemenu">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <i class="fas fa-times" @click="closeMenu()"></i>
        </ul>
        <i class="fas fa-bars" @click="openMenu()"></i>
      </nav>
      <div class="header-text">
        <p>MERN Stack Developer</p>
        <h1>Hi, I'm <span>Tahir Ali</span><br/> from Pakistan</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    openMenu(){
      document.querySelector('ul').classList.add('menuSidebar')
    },
    closeMenu(){
      document.querySelector('ul').classList.remove('menuSidebar')
    },
  },
}
</script>

<style scoped>
.menuSidebar{
  position: fixed;
  right: 0;
}
#header{
  width: 100%;
  height: 100vh;
  /* background-image: url('.././assets/background.png'); */
  background-image: url('.././assets/background-coat-back.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
nav .fas{
  display: none;
}
.container{
  /* padding: 10px 10%; */
  padding: 0 10%;
}
nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
nav ul li{
  display: inline-block;
  margin: 10px 20px;
}
nav ul li a{
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  position: relative;
}
nav ul li a::after{
  content: '';
  width: 0%;
  height: 3px;
  background: #ff004f;
  position: absolute;
  left: 0;
  bottom: -6px;
  transition: 0.5s;
}
nav ul li a:hover::after{
  width: 100%;
}
.header-text{
  margin-top: 15%;
  font-size: 30px;
}
.header-text h1{
  font-size: 60px;
  margin-top: 20px;
  /* width: 40%; */
}
.header-text h1 span{
  color: #ff004f;
}
@media only screen and (max-width: 600px){
  #header{
    /* background-image: url('../assets/phone-background.png'); */
    background-image: url('../assets/phone-background-coat.jpg');
  }
  .header-text{
    margin-top: 80%;
    font-size: 16px;
  }
  .header-text h1{
    font-size: 30px;
  }
  nav .fas{
    display: block;
    font-size: 25px;
    cursor: pointer;
  }
  nav ul{
    background: #ff004f;
    position: fixed;
    top: 0;
    display: block;
    right: -175px;
    width: 175px;
    height: 100vh;
    padding-top: 50px;
    z-index: 2;
    transition: all 0.5s;
  }
  nav ul li {
    display: block;
    margin: 25px;
  }
  nav ul .fas{
    position: absolute;
    top: 25px;
    left: 25px;
    cursor: pointer;
  }
}
</style>