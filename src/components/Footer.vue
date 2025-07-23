<template>
    <footer>
        <div class="logo footer-logo">

            <img src="../assets/sources/logo.png" alt="logo">
           
        </div>
        <div id="footer-links">
            <a href="https://www.youtube.com/@cine-lab" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.instagram.com/cinelab.art/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100063625446737" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.tiktok.com/@cinelab.art" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <div class="footer-copyright">
            <p><a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rubinxv01@gmail.com&su=Zlecenie%20strony%20internetowej&body=Dzień%20dobry%2C%0AChciałbym%20zlecić%20stronę%20internetową." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style="text-decoration: none; color: inherit;">
                    &copy; {{ currentYear }} CineLab. Wszystkie prawa zastrzeżone.
                </a>
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
.footer-copyright {
    text-align: center;
    padding-top: 1.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    padding-bottom: 2rem;
}

.footer-copyright p {
    margin: 0;
}
</style>