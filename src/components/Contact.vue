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
                    <a href="https://firebasestorage.googleapis.com/v0/b/react-e68ba.appspot.com/o/Muhammad%20Tahir%20Ali.pdf?alt=media" target="_blank" class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form @submit.prevent="handleSubmit()" name="contactForm">
                        <input type="text" name="name" placeholder="Your Full Name" required>
                        <input type="email" name="email" placeholder="Your Email" required>
                        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                        <button class="btn btn2" type="submit">Send Message</button>
                    </form>
                    <div class="confirmMessage none" id="confirmation">
                        <h2 >Message Sent Successfully</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Portfolio of <span>Muhammad Tahir Ali</span> | Copyright {{currentYear}}</p>
        </div>
    </div>
</template>

<script>

import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

let currentYear = new Date().getFullYear()

export default{
    name: 'Contact',
    data() {
        return {
            currentYear
        }
    },
    methods: {
        async handleSubmit(){
            let form = document.forms['contactForm']
            let confirmation = document.getElementById("confirmation")
            let name = form[0].value
            let email = form[1].value
            let message = form[2].value
            await addDoc(collection(db, "portfolioContact"), { name, email, message, datetime: Timestamp.now() })
            form.reset()
            confirmation.classList.remove("none")
            form.classList.add("none")
            setTimeout(() => {
                confirmation.classList.add("none")
                form.classList.remove("none")
            }, 3000)
        }
    }
}
</script>

<style scoped>
.none{
    display: none;
}
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
.confirmMessage h2{
    color: #ff004f;
}
.confirmMessage p{
    color: #fff;
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