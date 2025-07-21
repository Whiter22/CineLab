<template>
    <div id="side-bar" v-if="turnOn">
        <i class="fa fa-times mobile-menu-btn" @click="closeSidebar"></i>
        <ul class="nav-links side-bar-links">
            <li><router-link :to="{ name: 'About' }" @click="closeSidebar">O mnie</router-link></li>
            <li><router-link :to="{ name: 'Offers' }" @click="closeSidebar">Oferta</router-link></li>
            <li @click.prevent="scrollToFormInHomePage"><router-link to="/#form-section" @click="closeSidebar">Kontakt</router-link></li>
            <li><a href="https://www.youtube.com/@cine-lab"><i class="fab fa-youtube"></i></a> &nbsp;&nbsp; <a href="https://www.instagram.com/cinelab.art/"><i class="fab fa-instagram"></i></a> &nbsp;&nbsp; <a href="https://www.facebook.com/profile.php?id=100063625446737"><i class="fab fa-facebook-f"></i></a> &nbsp;&nbsp; <a href="https://www.tiktok.com/@cinelab.art" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
        </ul>
    </div>
</template>

<script>
import goToFormMixin from '@/mixins/goToFormMixin'

export default {
    mixins: [goToFormMixin],
    props: ['isVisible'],
    data() {
        return{
            turnOn: false
        }
    },
    methods: {
        closeSidebar(){
            this.turnOn = false
            this.$emit('turnOff', false)
        }
    },
    updated() {
        this.turnOn = this.isVisible
    }
}
</script>

<style scoped>

#side-bar{
    display: block;
    /* position: absolute; */
}

</style>