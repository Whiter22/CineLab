<template>
      <nav class="navbar" :class="{ scrolled: isScrolled}">
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
            <li @click="scrollToContact"><a href="#">Kontakt</a></li>

            <li><a href="https://www.youtube.com/@cine-lab" target="_blank"><i class="fab fa-youtube"></i></a></li>
            <li><a href="https://www.instagram.com/cinelab.art/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100063625446737" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.tiktok.com/@cinelab.art" target="_blank"><i class="fa-brands fa-tiktok"></i></a></li>
        </ul>
    </nav>
</template>

<script>
export default {
  props: ['sideBarShown'],
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 600
    },
    turnOnSidebar() {
      this.$emit('turnOnSidebar')
    },
    turnOffSidebar() {
      this.$emit('turnOffSidebar')
    },
    scrollToContact() {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          this.$nextTick(() => {
            const form = document.getElementById('form-section');
            if (form) form.scrollIntoView({ behavior: 'smooth' });
          });
        });
      } else {
        const form = document.getElementById('form-section');
        if (form) form.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  computed: {
    showSbButton() {
      return !this.sideBarShown;
    }
  }
}
</script>

<style>

</style>