<template>
    <div id="portfolio">
        <div class="container">
            <h1 class="subtitle">My Work</h1>
            <div class="work-list">
                <div class="work">
                    <img src="../assets/projects/firebase-chat.jpg" alt="work">
                    <div class="layer">
                        <h3>Realtime Chat Application</h3>
                        <p>Realtime Chat Application built on React JS and Firebase</p>
                        <div style="display: flex;">
                            <a target="_blank" href="https://github.com/TahirAli32/firebase-chat"><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" href="https://chat-app-by-dc.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src="../assets/projects/quiz.jpg" alt="work">
                    <div class="layer">
                        <h3>Quiz App</h3>
                        <p>Fully Functional Quiz App built on Vanilla JS. Authentication is done using Browser Local Storage.</p>
                        <div style="display: flex;">
                            <a target="_blank" href="https://github.com/TahirAli32/quiz-app-vanilla-js"><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" href="https://quiz-app-by-dc.netlify.app/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <div class="work">
                    <img src="../assets/projects/classroom.jpg" alt="work">
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
            <router-link class="btn" to="/projects"><p>See More</p></router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Portfolio',
}
</script>

<style scoped>
#portfolio{
    padding: 15px 0 60px;
    min-height: max-content;
}
.btn{
    cursor: pointer;
}
.work-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 50px 10px 0;
    padding: 0 30px;
}
.work{
    height: 250px;
    width: 350px;
    margin: 20px auto;
    border: .15rem solid #ff004f;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

}
.work img{
    width: 100%;
    height: 100%;
    display: block;
    transition: transform .5s;
}
.work:hover img{
    transform: scale(1.1);
}

.layer{
    width: 100%;
    height: 0%;
    background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    transition: height .5s;
}
.layer p {
    padding: 0 5px;
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
    .work-list{
        margin-top: 20px;
        padding: 0;
    }
    .work{
        height: 225px;
    }
    h1{
        font-size: 50px;
    }
    .btn{
        margin-top: 25px;
    }
    .layer{
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.6), #ff005167);
    }
}
</style>