<template>
      <nav class="navbar" :class="{ scrolled: isScrolled, 
                                    altNavbar: ['About', 'Offers'].includes($route.name)}">
        <div class="logo" @click="turnOffSidebar">
            <router-link :to="{name: 'Home'}">
                <img src="../assets/sources/logo.png" alt="logo">
            </router-link>
        </div>

        <div class="mobile-menu-btn hamburger-menu" @click="turnOnSidebar" v-show="showSbButton">
            <i class="fas fa-bars"></i>
        </div>

        <ul class="nav-links normal-size-links">
            <li><router-link :to="{ name: 'About' }">O mnie</router-link></li>
            <li><router-link :to="{ name: 'Offers' }">Oferta</router-link></li>
            <li @click.prevent="scrollToFormInHomePage"><router-link to="/#form-section">Kontakt</router-link></li>
            <li><a href="https://www.youtube.com/@cine-lab" target="_blank"><i class="fab fa-youtube"></i></a></li>
            <li><a href="https://www.instagram.com/cinelab.art/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100063625446737" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.tiktok.com/@cinelab.art" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
        </ul>
    </nav>
</template>

<script>
import goToForm from '@/mixins/goToFormMixin.js'
// import { watch } from 'vue'

export default {
    mixins: [goToForm],
    props: [ 'sideBarShown' ],
    data() {
        return {
            isScrolled: false,
            scrollCooldawn: false,
            scrollPivot: 750,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll(){
            if(this.scrollCooldawn){
                return;
            }

            this.isScrolled = window.scrollY >= this.scrollPivot;
            this.scrollCooldawn = true;

            setTimeout(() => {
                this.scrollCooldawn = false;
            }, 100);
        },
        turnOnSidebar(){
            this.$emit('turnOnSidebar')
        },
        turnOffSidebar(){
            this.$emit('turnOffSidebar')
        }
    },
    computed: {
        showSbButton() {
            if (this.sideBarShown)
                return false
            else
                return true
        }
    },
    watch: {
        '$route.name'(newName){
            if(newName !== 'Home'){
                // console.log("scrollpivot updated");
                this.scrollPivot = 120;
            }
            else {
                // console.log("scrollpivot updated again");
                this.scrollPivot = 750;
            }
        }
    }
}
</script>

<style scoped>

.altNavbar{
    background-color: black;
    position: sticky;
}

</style>