<template>
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="subtitle">Contact Me</h1>
                    <p><i class="fa-solid fa-envelope"></i>tahiralidc@gmail.com</p>
                    <p><i class="fa-solid fa-phone"></i>+92 320 2238490</p>
                    <div class="social-icons">
                        <a target="_blank" href="https://github.com/TahirAli32"><i class="fa-brands fa-github"></i></a>
                        <a target="_blank" href="https://linkedin.com/in/tahirali32"><i class="fa-brands fa-linkedin"></i></a>
                        <a target="_blank" href="https://stackoverflow.com/users/14988695/muhammad-tahir-ali"><i class="fa-brands fa-stack-overflow"></i></a>
                        <a target="_blank" href="https://wa.me/03202238490"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                    <a href="https://my.indeed.com/p/muhammadtahira-03jld9n" download class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form @submit.prevent="handleSubmit()" name="contactForm">
                        <input type="text" name="name" placeholder="Your Full Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                        <button class="btn btn2" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Portfolio of <span>Muhammad Tahir Ali</span> | Copyright {{currentYear}}</p>
        </div>
    </div>
</template>

<script>

let currentYear = new Date().getFullYear()

export default{
    name: 'Contact',
    data() {
        return {
            currentYear
        }
    },
    methods: {
        handleSubmit(){
            let form = document.forms['contactForm']
            form.reset()
            // alert('Message sent successfully')
            alert("Form is not accepting any data at the moment. Consider contacting on email")
        }
    }
}
</script>

<style scoped>
.contact-left{
    flex-basis: 35%;
    margin-right: 20px;
}
.contact-left p{
    margin-top: 30px;
}
.contact-right{
    flex-basis: 65%;
}
.contact-left p i{
    color: #ff004f;
    margin-right: 15px;
    font-size: 25px;
}
.social-icons{
    margin-top: 30px;
}
.social-icons a{
    font-size: 30px;
    margin-right: 35px;
    display: inline-block;
    color: #ababab;
    transition: all .5s;
}
.social-icons a:hover{
    color: #ff004f;
    transform: translateY(-5px);
}
.btn2{
    display: inline-block;
    background-color: #ff004f;
}
.contact-right form{
    width: 97%;
}
form input, form textarea{
    width: 100%;
    border: none;
    outline: none;
    background: #262626;
    padding: 15px;
    margin: 15px 0;
    color: #fff;
    font-size: 18px;
    border-radius: 6px;
}
form .btn2{
    padding: 14px 60px;
    font-size: 18px;
    margin: 20px 0;
    cursor: pointer;
}
.copyright p{
    text-align: center;
    padding: 20px 0;
    background: #262626;
    font-weight: 400;
    font-size: 15px;
    margin-top: 20px;
    letter-spacing: .08rem;
}
.copyright span{
    color: #ff004f
}
@media only screen and (max-width: 600px){
    .row{
        display: block;
    }
    .contact-left{
        margin-bottom: 40px;
    }
    .contact-left h1{
        font-size: 50px;
    }
}
</style>