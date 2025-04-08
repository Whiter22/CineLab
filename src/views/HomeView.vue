
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
                <p class="welcome-text1">Sztuka przekazywania emocji</p>
                <p class="welcome-text2">…w każdym kadrze</p>
            </div>
        </div>
    </section>

    <section id="welcome-massage">
    <h1 class="welcomeText">Dlaczego CineLab?</h1>
    <div class="welcome-container">
        <div class="welcome-box">
            <i class="fi fi-rr-lightbulb-on" style="font-size: 50px; color: #f4a261;"></i>
            <h2>Kreatywność</h2>
            <p>Tworzymy filmy z duszą, pełne świeżych pomysłów i artystycznej wizji.</p>
        </div>
        <div class="welcome-box">
            <i class="fi fi-br-leadership-alt" style="font-size: 50px; color: #f4a261;"></i>
            <h2>Zadowoleni klienci</h2>
            <p>Nasze produkcje mówią same za siebie — pozytywne opinie mówią wszystko.</p>
        </div>
        <div class="welcome-box">
            <i class="fi fi-br-camera-movie" style="font-size: 50px; color: #f4a261;"></i>
            <h2>Nowoczesny sprzęt</h2>
            <p>Pracujemy na profesjonalnym sprzęcie filmowym, by dostarczać kinową jakość.</p>
        </div>
    </div>
</section>

    <section id="promo-section">
        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/JPZK623D93k?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="Teledysk ślubny Justyny i Rafała" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="desc-text-holder main-page">
                <i class="fi fi-rr-rings-wedding"style="font-size: 50px; color: #f4a261;"></i>
                <h2>Film Ślubny</h2>
                <p class="welcome-text slide-in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, assumenda tempore? Quis esse eaque, vel molestias a repellendus autem excepturi. Excepturi libero culpa, non hic rerum ipsum nostrum quas explicabo consectetur quisquam officia, architecto inventore vel quae. Quaerat ex natus quae laborum tenetur amet perspiciatis delectus nisi corrupti nesciunt quos voluptates qui praesentium harum neque, facere voluptatem assumenda veniam ut iure itaque aspernatur recusandae est a! Amet nisi unde dicta sapiente numquam impedit doloremque id suscipit architecto? Odit iste vitae, quam, et facilis corrupti saepe ducimus ipsam natus iusto, ab deserunt? Aliquid aut eius repudiandae natus impedit deleniti, odio maxime accusamus dolor dicta fuga, inventore harum possimus nulla earum totam doloribus ad, cum delectus! Illum dolor porro autem dicta praesentium cupiditate consectetur. Laborum, officiis corrupti. Pariatur praesentium aliquid impedit saepe.</p>
            </div>
        </div>

        <div class="promo-container mid-promo">
            <div class="desc-text-holder main-page">
                <i class="fi fi-br-hastag"style="font-size: 50px; color: #f4a261;"></i>
                <h2>Rolki</h2>
                <p class="welcome-text slide-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto animi eaque error laborum maiores sunt a perferendis quo delectus autem, eos inventore suscipit nobis tempore possimus modi corrupti sed!</p>
            </div>
            <div class="promo-video-holder">
                <iframe width="664" height="1181" src="https://www.youtube.com/embed/dgnc3e7DIQQ" title="Jasne Błonia w Szczecinie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>

        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe width="2545" height="1108" src="https://www.youtube.com/embed/QgsD4ihitAM" title="IV Moto Piknik w Rudkach" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="desc-text-holder main-page">
                <i class="fi fi-rr-calendar-star"style="font-size: 50px; color: #f4a261;"></i>
                <h2>Relacje z wydarzeń</h2> 
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
 .welcome-text1 {
    font-size: 58px;
    font-weight: bold;
  }

  .welcome-text2 {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    .welcome-text1 {
      font-size: 28px;
      font-weight: bold;
    }

    .welcome-text2 {
      font-size: 14px;
    }
  }
</style>