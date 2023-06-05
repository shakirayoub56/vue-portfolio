<template>
  <div id="header">
    <div class="container">
      <nav>
        <a href="/"><img src="">Shakir</a>
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
      <div id="box">
      <div class="header-text">
        <p>Front End Developer</p>
        <h1>Hi, I'm <span>Shakir Ayoub</span><br/> from Kashmir</h1>
      </div>
      <div>
        <img id="imggif" src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966">
       </div>
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
#box{
  display: flex;

}
#imggif{
  height: 321px;
    width: 338px;
    margin-top: 86px;
    margin-left: 20px;
    border-radius: 21px;
}
.menuSidebar{
  position: fixed;
  right: 0;
}
#header{
  width: 100%;
  height: 100vh;
  /* background-image: url('.././assets/background.png'); */
  background-image: url('');
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