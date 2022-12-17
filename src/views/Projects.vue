<template>
<div class="container">
    <div class='modal'>
        <div class="modalContainer">
            <router-link to="/#portfolio"><div class="backIcon"><i class="fa-solid fa-arrow-left"></i>Go Back</div></router-link>
            <div class="work-list">
                <div class="work" v-for="project in projects" :key="project">
                    <img :src="project.imgUrl ? project.imgUrl : require('@/assets/no-img.jpg')" alt="Project">
                    <div class="layer">
                        <h3>{{project.name}}</h3>
                        <p>{{project.desc}}</p>
                        <div style="display: flex;">
                            <a target="_blank" :href=project.codeUrl><i class="fa-solid fa-code"></i></a>
                            <a target="_blank" :href="project.liveUrl ? project.liveUrl : '#'"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { db } from '../firebase'
import { collection, query, getDocs } from 'firebase/firestore'

export default {
    name: 'ProjectsPopup',
    data() {
        return {
            projects: []
        }
    },
    methods:{
        async fetchProjects(){
            let arr = []
            const q = query(collection(db, "projects"))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach(doc => {
                arr.push(doc.data())
            })
            arr = arr.sort((a,b)=>b.date.seconds-a.date.seconds)
            this.projects = [...arr]
        }
    },
    mounted() {
        this.fetchProjects()
    }
}
</script>
<style scoped>
.modal{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 50px;
}
.backIcon{
    font-size: 20px;
    margin-left: 1.5rem;
    margin-bottom: .5rem;
    cursor: pointer;
}
.backIcon i{
    margin-right: 10px;
}
.backIcon:hover{
    color: #00e1ff;
}
.work-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 1px;
}
.work{
    height: 225px;
    width: 325px;
    margin: 20px;
    border: .2rem solid #ff004f;
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
        height: 250px;
    }
    .layer{
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.6), #ff005167);
    }
}
</style>