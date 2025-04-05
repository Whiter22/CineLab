<template>
  <div class="home">
    <section id="background-video">
        <div class="video-container">
            <video id="main-BG-video" autoplay loop muted playsinline>
                <source src="../assets/sources/background_video_mobile.mp4" type="video/mp4" media="(max-width: 1280px)">
                <source src="../assets/sources/background_video_full_HD.mp4" type="video/mp4" media="(min-width: 1281px) and (max-width: 1920px)">
                <source src="../assets/sources/background_video_2k.mp4" type="video/mp4" media="(min-width: 1921px) and (max-width: 2560px)">
                <source src="../assets/sources/background_video_4k.mp4" type="video/mp4" media="(min-width: 2561px)">
                Twoja przeglądarka nie obsługuje tagu wideo.
            </video>
            <div class="content">
                <h1 class="welcome-text">Filmy nie dla każdego</h1>
                <p class="welcome-text">… bo to, co jest dla każdego, jest dla nikogo</p>
            </div>
        </div>
    </section>

    <section id="welcome-massage">
        <div id="welcome-text-container">
            <h1 class="welcome-text">Produkcja video i filmy reklamowe</h1>
            <p class="welcome-text">Szukasz profesjonalnej produkcji video i filmów reklamowych w Szczecinie? Świetnie trafiłeś!
                Nasze doświadczenie oraz kreatywne podejście do pracy sprawi, że Twoja produkcja reklamowy będzie unikalna i wyróżni się na tle konkurencji. Niezależnie od tego, czy interesuje Cię filmowanie ślubów, studniówki, chrzcin, teledysku, materiału promocyjnego czy filmu korporacyjnego, nasze produkcje video dostarczą Ci najlepszych rozwiązań. Poznaj naszą ofertę!</p>
        </div>  
    </section>
    
    <section id="promo-section">
        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/JPZK623D93k?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="Teledysk ślubny Justyny i Rafała" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="desc-text-holder main-page">
                <p class="welcome-text slide-in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, assumenda tempore? Quis esse eaque, vel molestias a repellendus autem excepturi. Excepturi libero culpa, non hic rerum ipsum nostrum quas explicabo consectetur quisquam officia, architecto inventore vel quae. Quaerat ex natus quae laborum tenetur amet perspiciatis delectus nisi corrupti nesciunt quos voluptates qui praesentium harum neque, facere voluptatem assumenda veniam ut iure itaque aspernatur recusandae est a! Amet nisi unde dicta sapiente numquam impedit doloremque id suscipit architecto? Odit iste vitae, quam, et facilis corrupti saepe ducimus ipsam natus iusto, ab deserunt? Aliquid aut eius repudiandae natus impedit deleniti, odio maxime accusamus dolor dicta fuga, inventore harum possimus nulla earum totam doloribus ad, cum delectus! Illum dolor porro autem dicta praesentium cupiditate consectetur. Laborum, officiis corrupti. Pariatur praesentium aliquid impedit saepe.</p>
            </div>
        </div>

        <div class="promo-container mid-promo">
            <div class="desc-text-holder main-page">
                <p class="welcome-text slide-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto animi eaque error laborum maiores sunt a perferendis quo delectus autem, eos inventore suscipit nobis tempore possimus modi corrupti sed!</p>
            </div>
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/IRquY4ymx9c?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="6. Festiwal Dwóch Jezior - Wałcz 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/SYy9ohEcSFI?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="Szczecin at Night | Lumix S5 with 50mm F1.8 | Cinematic video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="desc-text-holder main-page">
                <p class="welcome-text slide-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto animi eaque error laborum maiores sunt a perferendis quo delectus autem, eos inventore suscipit nobis tempore possimus modi corrupti sed!</p>
            </div>
        </div>
    </section>

    <Form/>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import scrollMixin from '../mixins/scrollMixin.js';

export default {
  mixins: [ scrollMixin ],
  components: { Form },
  mounted() {
    window.addEventListener('scroll', this.checkSlide)
    this.scrollToHash(this.$route.hash)
  },
  methods: {
    scrollToHash(hash){
        if (hash){
            let element = document.querySelector(hash)
            
            if (element)
                element.scrollIntoView({ behaviour: 'smooth'})
        }
        else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
  },
  updated() {
    this.scrollToHash(this.$route.hash)
  }
}
</script>

<style>

</style>