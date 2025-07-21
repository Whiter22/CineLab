export default {
    mounted() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.addEventListener('scroll', this.checkSlide);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkSlide);
    },
    methods: {
        checkSlide() {
            const slideElements = document.querySelectorAll('.slide-in');
            
            slideElements.forEach(element => {
                const slideInAt = (window.scrollY + window.innerHeight) - element.offsetHeight / 2;
                const isHalfShown = slideInAt > element.offsetTop;
                
                if (isHalfShown) {
                    element.classList.add('show');
                }
            });
        }
    }
}
  