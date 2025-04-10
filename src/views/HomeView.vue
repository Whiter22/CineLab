<template>
  <div class="home">
    <!-- Niezmieniony section z filmem w tle -->
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

    <!-- Przeprojektowana sekcja "Dlaczego CineLab?" -->
    <section id="welcome-message">
        <div class="welcome-heading">
            <h1 class="section-title">Dlaczego CineLab?</h1>
        </div>
        <div class="welcome-container">
            <div class="welcome-box">
                <div class="icon-wrapper">
                    <i class="fi fi-rr-lightbulb-on"></i>
                </div>
                <h2>Kreatywność</h2>
                <p>Tworzymy filmy z duszą, pełne świeżych pomysłów i artystycznej wizji.</p>
            </div>
            <div class="welcome-box">
                <div class="icon-wrapper">
                    <i class="fi fi-br-leadership-alt"></i>
                </div>
                <h2>Zadowoleni klienci</h2>
                <p>Nasze produkcje mówią same za siebie — pozytywne opinie mówią wszystko.</p>
            </div>
            <div class="welcome-box">
                <div class="icon-wrapper">
                    <i class="fi fi-br-camera-movie"></i>
                </div>
                <h2>Nowoczesny sprzęt</h2>
                <p>Pracujemy na profesjonalnym sprzęcie filmowym, by dostarczać kinową jakość.</p>
            </div>
        </div>
    </section>

    <!-- Przeprojektowana sekcja "Promo" -->
    <section id="promo-section">
        <!-- Pierwszy blok promo -->
        <div class="promo-container">
            <div class="promo-video-holder">
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/JPZK623D93k?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="Teledysk ślubny Justyny i Rafała" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="desc-text-holder main-page">
                <div class="service-icon">
                    <i class="fi fi-rr-rings-wedding"></i>
                </div>
                <h2 class="service-title">Film Ślubny</h2>
                <div class="service-divider"></div>
                <p class="welcome-text slide-in">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, assumenda tempore? Quis esse eaque, vel molestias a repellendus autem excepturi. Excepturi libero culpa, non hic rerum ipsum nostrum quas explicabo consectetur quisquam officia, architecto inventore vel quae. Quaerat ex natus quae laborum tenetur amet perspiciatis delectus nisi corrupti nesciunt quos voluptates qui praesentium harum neque, facere voluptatem assumenda veniam ut iure itaque aspernatur recusandae est a!</p>
                <div class="service-action">
                    <router-link to="/offers" class="service-button">Zobacz ofertę</router-link>
                </div>
            </div>
        </div>

        <!-- Drugi blok promo (środkowy) -->
        <div class="promo-container mid-promo">
            <div class="desc-text-holder main-page">
                <div class="service-icon">
                    <i class="fi fi-br-hastag"></i>
                </div>
                <h2 class="service-title">Rolki</h2>
                <div class="service-divider"></div>
                <p class="welcome-text slide-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto animi eaque error laborum maiores sunt a perferendis quo delectus autem, eos inventore suscipit nobis tempore possimus modi corrupti sed!</p>
                <div class="service-action">
                    <router-link to="/offers" class="service-button">Zobacz więcej</router-link>
                </div>
            </div>
            <div class="promo-video-holder">
                <div class="video-wrapper vertical">
                    <iframe src="https://www.youtube.com/embed/dgnc3e7DIQQ" title="Jasne Błonia w Szczecinie" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <!-- Trzeci blok promo -->
        <div class="promo-container">
            <div class="promo-video-holder">
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/QgsD4ihitAM" title="IV Moto Piknik w Rudkach" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="desc-text-holder main-page">
                <div class="service-icon">
                    <i class="fi fi-rr-calendar-star"></i>
                </div>
                <h2 class="service-title">Relacje z wydarzeń</h2>
                <div class="service-divider"></div>
                <p class="welcome-text slide-in">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto animi eaque error laborum maiores sunt a perferendis quo delectus autem, eos inventore suscipit nobis tempore possimus modi corrupti sed!</p>
                <div class="service-action">
                    <router-link to="/offers" class="service-button">Zobacz ofertę</router-link>
                </div>
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
// W sekcji methods w komponencie
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
  },
  checkSlide() {
    const sliders = document.querySelectorAll('.slide-in');
    sliders.forEach(slider => {
      // Obliczamy pozycję, przy której element powinien się pokazać
      // Pokazujemy element, gdy jest 25% widoczny w oknie przeglądarki
      const slideInAt = window.scrollY + window.innerHeight - slider.offsetHeight / 4;
      const elementBottom = slider.offsetTop + slider.offsetHeight;
      const isPartiallyVisible = slideInAt > slider.offsetTop;
      const isNotScrolledPast = window.scrollY < elementBottom;
      
      if (isPartiallyVisible && isNotScrolledPast) {
        slider.classList.add('active');
      }
    });
  }
},
mounted() {
  window.addEventListener('scroll', this.checkSlide);
  // Wywołaj checkSlide od razu po zamontowaniu komponentu
  this.$nextTick(() => {
    this.checkSlide();
    // Wywołujemy jeszcze raz po niewielkim opóźnieniu dla elementów, które są już w widoku
    setTimeout(() => this.checkSlide(), 300);
  });
  this.scrollToHash(this.$route.hash);
}
}
</script>

<style scoped>
/* Główne kolory strony */
:root {
  --primary-color: #f4a261;
  --secondary-color: #2a9d8f;
  --background-color: #f8f9fa;
  --text-color: #333;
  --accent-color: #e76f51;
  --light-accent: #fdf0e6;
  --dark-accent: #264653;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Zachowujemy oryginalne style dla tekstów welcome */
.welcome-text1 {
  font-size: 58px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1s ease-in-out;
}

.welcome-text2 {
  font-size: 28px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Sekcja "Dlaczego CineLab?" */
#welcome-message {
  padding: 5rem 2rem;
  background-color: #f8f9fa;
}

.welcome-heading {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  color: #264653;
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #f4a261;
}

.welcome-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-box {
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.welcome-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background-color: #fdf0e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.welcome-box i {
  font-size: 40px;
  color: #f4a261;
}

.welcome-box h2 {
  margin-bottom: 1rem;
  color: #264653;
  font-size: 1.5rem;
}

.welcome-box p {
  color: #555;
  line-height: 1.6;
}

/* Sekcja promo */
#promo-section {
  padding: 2rem;
  background-color: white;
}

.promo-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
  border-bottom: 1px solid #eaeaea;
}

.promo-container:last-child {
  border-bottom: none;
}

.promo-video-holder, .desc-text-holder {
  flex: 1;
  min-width: 300px;
  padding: 1rem;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Stosunek 16:9 */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.video-wrapper.vertical {
  padding-bottom: 177.8%; /* Stosunek 9:16 */
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.service-icon {
  display: inline-block;
  margin-bottom: 1rem;
}

.service-icon i {
  font-size: 50px;
  color: #f4a261;
}

.service-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #264653;
}

.service-divider {
  width: 60px;
  height: 3px;
  background-color: #f4a261;
  margin-bottom: 1.5rem;
}

.welcome-text.slide-in {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  line-height: 1.7;
  color: #555;
}

.welcome-text.slide-in.active {
  opacity: 1;
  transform: translateX(0);
}

.service-action {
  margin-top: 2rem;
}

.service-button {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background-color: #f4a261;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(244, 162, 97, 0.3);
}

.service-button:hover {
  background-color: #e76f51;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(231, 111, 81, 0.4);
}

/* Responsywność */
@media (max-width: 768px) {
  .welcome-text1 {
    font-size: 28px;
  }

  .welcome-text2 {
    font-size: 14px;
  }

  .promo-container {
    flex-direction: column;
    padding: 2rem 0;
  }

  .mid-promo {
    flex-direction: column-reverse;
  }

  .promo-video-holder, .desc-text-holder {
    width: 100%;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .welcome-box {
    margin-bottom: 1.5rem;
  }
}
@media (prefers-reduced-motion: reduce) {
  .welcome-text.slide-in {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
