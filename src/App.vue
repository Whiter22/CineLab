<template>
  <Navbar @turnOnSidebar="turnOnSidebar" @turnOffSidebar="turnOffSidebar" :sideBarShown="showSideBar"/>
  <Sidebar :isVisible="showSideBar" @turnOff="turnOffSidebar"/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'

export default {
  data(){
    return {
      showSideBar: false,
    }
  },
  components: { Navbar, Sidebar, Footer },
  methods: {
    turnOnSidebar(){
      this.showSideBar = true
    },
    turnOffSidebar(){
      this.showSideBar = false
    }
  }
}
</script>

<style>
</style>
