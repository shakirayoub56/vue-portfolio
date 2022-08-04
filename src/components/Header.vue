<template>
  <div class="header">
    <div class="container">
      <nav>
        <img src="../assets/logo.png" alt="logo">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div class="header-text">
        <p>UI/UX Designer</p>
        <h1>Hi, I'm <span>Tahir Ali</span><br/> from Pakistan</h1>
      </div>
    </div>
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
  background-image: url('.././assets/background.png');
  background-size: cover;
  background-position: center center;
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
</style>