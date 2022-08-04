<template>
  <div class="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
            <img src="../assets/user.png" alt="">
        </div>
        <div class="about-col-2">
            <h1 class="subtitle">About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt delectus magnam assumenda omnis quibusdam dolorem tempore molestias vel impedit, obcaecati repellendus temporibus inventore dolore fugiat natus mollitia cupiditate voluptatum !</p>
            <div class="tab-titles">
              <p class="tab-links active-link">Skills</p>
              <p class="tab-links">Experience</p>
              <p class="tab-links">Education</p>
            </div>
            <div class="tab-contents">
              <ul>
                <li><span>UI/UX</span><br/>Designing Web/App Interface</li>
                <li><span>Web Development</span><br/>Building Web Apps</li>
                <li><span>App Development</span><br/>Building Android/IOS Apps</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    
  }
}
</script>

<style scoped>
.about{
    padding: 80px 0;
    color: #ababab;
}
.container{
  padding: 10px 10%;
}
.row{
    display: flex;
    justify-content: space-between;
}
.about-col-1{
    flex-basis: 35%;
}
.about-col-1 img{
    width: 100%;
    border-radius: 15px;
}
.about-col-2{
    flex-basis: 60%;
}
.subtitle{
  font-size: 60px;
  font-weight: 600;
  color: #fff;
}
.tab-titles{
  display: flex;
  margin: 20px 0 40px;
}
.tab-links{
  margin-right: 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
}
.tab-links::after{
  content: '';
  width: 0;
  height: 3px;
  background: #ff004f;
  position: absolute;
  left: 0;
  bottom: -8px;
  transition: 0.5;
}
.tab-links.active-link:after{
  width: 50%;
}
</style>