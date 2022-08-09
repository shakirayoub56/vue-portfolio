<template>
    <div id="portfolio">
        <div class="container">
            <h1 class="subtitle">My Work</h1>
            <div class="work-list">
                <div class="work">
                    <!-- <div class="bg-img" style="background-image: url('../assets/yt-downloader.jpg');"></div> -->
                    <div class="bg-img"></div>
                    <!-- <img src="../assets/yt-downloader.jpg" alt="work"> -->
                    <div class="layer">
                        <h3>YouTube Video Downloader</h3>
                        <p>Frontend is build on ReactJs and Backend is on ExpressJs</p>
                        <div style="display: flex;">
                            <a target="_blank" href="https://github.com/TahirAli32/Youtube-Video-Downloader"><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" href="https://yt-downloader-by-dc.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <div class="bg-img"></div>
                    <!-- <img src="../assets/work-2.png" alt="work"> -->
                    <div class="layer">
                        <h3>Covid 19 Case Tracker</h3>
                        <p>Android Application build on Java.</p>
                        <div style="display: flex;">
                            <a target="_blank" href="https://github.com/TahirAli32/Covid19App"><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" href="https://drive.google.com/file/d/1Ov-bgESvsbFRXokzi7m7cc5icM_6PXJK/view?usp=sharing"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <div class="bg-img"></div>
                    <!-- <img src="../assets/work-3.png" alt="work"> -->
                    <div class="layer">
                        <h3>Classroom</h3>
                        <p>Built on MERN Stack. Currently in Development</p>
                        <div style="display: flex;">
                            <a target="_blank" href="https://github.com/TahirAli32/classroom"><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" href="https://classroom-by-dc.vercel.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="https://github.com/TahirAli32" target="_blank" class="btn">See More</a>
        </div>
        <ProjectsPopup />
    </div>
</template>

<script>
import ProjectsPopup from './ProjectsPopup.vue'

export default {
    name: 'Portfolio',
    components: {
        ProjectsPopup
  }
}
</script>

<style scoped>
#portfolio{
    padding: 15px 0 60px;
}
.work-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
}
.work{
    /* height: 400px; */
    /* Added by Me */
    height: 250px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
div.bg-img{
    background-image: url("../assets/yt-downloader.jpg");
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    background-position: center;
    transition: transform .5s;
}
.work:hover .bg-img{
    transform: scale(1.1);
}
/* .work img{
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform .5s;
}
.work:hover img{
    transform: scale(1.1);
}
*/
.layer{
    width: 100%;
    height: 0%;
    background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding: 0 40px; */
    text-align: center;
    font-size: 14px;
    transition: height .5s;
}
.layer h3{
    font-weight: 500;
    margin-bottom: 20px;
}
.layer a{
    margin-top: 20px;
    color: #ff004f;
    font-size: 17px;
    line-height: 40px;
    background: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    margin: 20px 5px 0;
}
.work:hover .layer{
    height: 100%;
}
@media only screen and (max-width: 600px){
    .work{
        height: 350px;
    }
}
</style>