<template>
    <footer>
        <div class="logo footer-logo">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/sources/logo.png" alt="logo">
            </router-link>
        </div>
        <div id="footer-links">
            <a href="https://www.youtube.com/@cine-lab" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/cinelab.art/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100063625446737" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100063625446737" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
        </div>
    </footer>
</template>