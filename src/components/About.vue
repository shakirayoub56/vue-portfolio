<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="about-col-1">
            <img src="../assets/about-coat.jpg" alt="">
        </div>
        <div class="about-col-2">
            <h1 class="subtitle">About Me</h1>
            <p>I'm a MERN Stack Developer based in Karachi, Pakistan. I am in 3rd Year of my Bachelor of Computer Sciences from the University of Karachi. My objective is simply to be the best web developer that I can be and to contribute to the technology industry.</p>
            <div class="tab-titles">
              <p class="tab-links active-link" @click="(event) => openTab('skills', event)">Skills</p>
              <p class="tab-links" @click="(event) => openTab('education', event)">Education</p>
              <p class="tab-links" @click="(event) => openTab('experience', event)">Experience</p>
            </div>
            <div class="tab-contents active-tab" id="skills">
              <ul>
                <li><span>Front-end Developer</span><br/>Building Single Page Application using Vanilla JS, React/Next JS, Vue JS</li>
                <li><span>Back-end Developer</span><br/>Building Backend Server for Web and Mobile Applications</li>
                <li><span>Other Programming Languages</span><br/>Java (Android Studio), Python(Django)</li>
              </ul>
            </div>
            <div class="tab-contents" id="education">
              <ul>
                <li><span>Started in 2021</span><br/>MERN Stack Course from SMIT Karachi</li>
                <li><span>2020 - 2023<sub>(Expected)</sub></span><br/>BSCS from University of Karachi</li>
                <li><span>Completed in 2019</span><br/>Intermediate in Pre-Engineering with A Grade</li>
                <li><span>Completed in 2017</span><br/>Matriculation in Computer Science with A1 Grade</li>
              </ul>
            </div>
            <div class="tab-contents" id="experience">
              <ul>
                <li><span>Fresh</span><br/>MERN Stack Developer</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let tablinks = document.getElementsByClassName("tab-links")
let tabcontents = document.getElementsByClassName("tab-contents")
export default {
  name: 'About',
  methods: {
    openTab(tabName, event){
      for(let i=0; i<tablinks.length;i++){
        tablinks[i].classList.remove("active-link")
      }
      for(let i=0; i<tabcontents.length;i++){
        tabcontents[i].classList.remove("active-tab")
      }
      event.currentTarget.classList.add("active-link")
      document.getElementById(tabName).classList.add("active-tab")
    }
  },
}
</script>

<style scoped>
#about{
    padding: 80px 0;
    color: #ababab;
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
  transition: 0.5s;
}
.tab-links.active-link:after{
  width: 50%;
}
.tab-contents ul li{
  margin: 10px 0;
}
.tab-contents ul li span{
  color: #b54769;
  font-size: 14px;
}
.tab-contents{
  display: none;
}
.tab-contents.active-tab{
  display: block;
}
@media only screen and (max-width: 600px){
  #about{
    padding: 50px 0 25px;
  }
  .subtitle{
    font-size: 40px;
  }
  .row{
    display: flex;
    flex-direction: column;
  }
  .about-col-1{
    text-align: center;
    margin-bottom: 15px;
  }
  .about-col-1 img{
    width: 100%;
  }
  .about-col-2{
    font-size: 15px;
  }
}
</style>