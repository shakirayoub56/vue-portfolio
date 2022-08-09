<template>
    <div id="services">
        <div class="container">
            <h1 class="subtitle">My Services</h1>
            <div class="services-list">
                <div>
                    <i class="fas fa-code"></i>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis temporibus ea dolorum quos molestiae? Tempore illum rerum dolores itaque voluptate?</p>
                    <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    <i class="fas fa-crop-alt"></i>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis temporibus ea dolorum quos molestiae? Tempore illum rerum dolores itaque voluptate?</p>
                    <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div>
                    <i class="fa-brands fa-app-store-ios"></i>
                    <h2>UI/UX Design</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis temporibus ea dolorum quos molestiae? Tempore illum rerum dolores itaque voluptate?</p>
                    <a href="#">Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>

<style scoped>
#services{
    padding: 30px 0 25px;
}
.services-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-top: 50px;
}
.services-list div{
    background: #262626;
    /* width: 250px;
    height: 250px; */
    padding: 40px;
    font-size: 13px;
    font-weight: 300;
    border-radius: 10px;
    transition: all .5s;
}
.services-list div i{
    font-size: 50px;
    margin-bottom: 30px;
}
.services-list h2{
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 15px;
}
.services-list a{
    color: #fff;
    font-size: 12px;
    margin-top: 20px;
    display: inline-block;
}
.services-list a i{
    padding-left: 2px;
    font-size: 11px;
}
.services-list div:hover{
    background: #ff004f;
    transform: translateY(-10px);
}
@media only screen and (max-width: 600px){
    #services{
        padding: 30px 0 20px;
    }
    .services-list{
        gap: 25px;
    }
    .services-list div i {
        font-size: 28px;
        margin-bottom: 20px;
    }
    .services-list div h2 {
        font-size: 25px;
    }
    .services-list div, .services-list div a, .services-list div a i {
        font-size: 12px;
        letter-spacing: .01rem;
    }
}
</style>