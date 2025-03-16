export default {
    data() {
        return {
            scrollUp: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.checkSlide);
        window.addEventListener('scroll', this.scrollUpElement);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkSlide);
        window.removeEventListener('scroll', this.scrollUpElement);
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
        },
        scrollUpElement(){
            this.scrollUp = window.scrollY > 600
        }
    }
}
  