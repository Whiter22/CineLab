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
                <p>Naszym priorytetem jest Twoje zadowolenie — opinie to nasza najlepsza wizytówka.</p>
            </div>
            <div class="welcome-box">
                <div class="icon-wrapper">
                    <i class="fi fi-br-camera-movie"></i>
                </div>
                <h2>Nowoczesny sprzęt</h2>
                <p>Pracujemy na nowoczesnym sprzęcie filmowym, by zapewniać wysoką jakość obrazu i dźwięku.</p>
            </div>
        </div>
    </section>

    <!-- Przeprojektowana sekcja "Promo" -->
    <section id="promo-section">
        <!-- Pierwszy blok promo -->
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
                <p class="welcome-text slide-in">Każde wydarzenie ma swoją unikalną atmosferę i energię. Koncerty, konferencje, eventy firmowe, uroczystości - wszystko to momenty, które warto uchwycić i podzielić się nimi ze światem.
                Profesjonalny materiał filmowy pozwala nie tylko zachować wspomnienia, ale też pokazać innym to, czego nie mogli doświadczyć osobiście. To także doskonały sposób na promocję przyszłych wydarzeń.
                Niech Twoje wydarzenie zostanie zapamiętane i inspiruje innych do uczestnictwa.</p>
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
                <p class="welcome-text slide-in">Twoje pomysły zasługują na profesjonalną realizację. Każda rolka to szansa na zbudowanie zasięgu, zaangażowanie odbiorców i wyróżnienie się w mediach społecznościowych.
                  Wysokiej jakości obraz, dynamiczny montaż i treści, które przyciągają uwagę - tak powstają rolki, które działają. Niezależnie czy promujiesz biznes, dzielisz się pasją, czy po prostu chcesz stworzyć coś kreatywnego.
                  Spraw, żeby Twoja historia wyróżniła się w morzu treści i dotarła do odpowiednich ludzi.</p>
                <div class="service-action">
                    <a href="https://www.youtube.com/@cine-lab" class="service-button" target="_blank" rel="noopener">Zobacz więcej</a>

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
                    <iframe src="https://www.youtube.com/embed/JPZK623D93k?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" title="Teledysk ślubny Justyny i Rafała" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div class="desc-text-holder main-page">
                <div class="service-icon">
                    <i class="fi fi-rr-rings-wedding"></i>
                </div>
                <h2 class="service-title">Film Ślubny</h2>
                <div class="service-divider"></div>
                <p class="welcome-text slide-in">Wasze najważniejsze chwile zasługują na to, by zostać utrwalone na zawsze. Każdy uśmiech, każde wzruszenie, każdy moment radości - wszystko to może stać się piękną historią opowiedzianą przez obraz.
                Wyobraźcie sobie, że za kilka lat będziecie mogli ponownie przeżyć ten wyjątkowy dzień, zobaczyć reakcje najbliższych i usłyszeć słowa, które padły podczas ceremonii.
                Pozwólcie, że Wasz ślub stanie się filmem, do którego będziecie wracać przez całe życie.</p>
                <div class="service-action">
                    <router-link to="/offers" class="service-button">Zobacz ofertę</router-link>
                </div>
            </div>
        </div>
        
    </section>

    <Form/>

    <!-- Sekcja kontaktowa -->
    <section id="contact-info">
        <div class="contact-container">
          <h2 class="contact-title">Skontaktuj się ze mną</h2>
              <div class="contact-wrapper">
                  <div class="contact-box">
                      <div class="contact-icon">
                        <i class="fi fi-rr-marker"></i>
                      </div>
                        <h3>Obszar działania</h3>
                        <p>Zachodniopomorskie i okolice</p>
                      </div>
                  <div class="contact-box">
                      <div class="contact-icon">
                        <i class="fi fi-rr-phone-call"></i>
                      </div>
                      <h3>Telefon</h3>
                      <p><a href="tel:+48123456789">+48 781 581 436</a></p>
                  </div>
                  <div class="contact-box">
                      <div class="contact-icon">
                        <i class="fi fi-rr-envelope"></i>
                      </div>
                      <h3>Email</h3>
                      <p><a href="mailto:kontakt@cinelab.pl">kontakt@cinelab.com.pl</a></p>
                  </div>
              </div>
          </div>
    </section>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import scrollMixin from '../mixins/scrollMixin.js';

export default {
  mixins: [ scrollMixin ],
  components: { Form },
  mounted() {
    this.scrollToHash(this.$route.hash)
  },

methods: {
  scrollToHash(hash){
      if (hash){
          let element = document.querySelector(hash);
          
          if (element)
              element.scrollIntoView({ behaviour: 'smooth'});
      }
      else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
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

.welcome-text{
  color: #555;
  line-height: 1.6;
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

  text-align: justify;
  text-justify: inter-word;

  width: 100%;
  margin-bottom: 2rem;
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

/* .welcome-text.slide-in {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  line-height: 1.7;
  color: #ff0000;
} */

/* .welcome-text.slide-in.active {
  opacity: 1;
  transform: translateX(0);
} */

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

/* Sekcja kontaktowa */
#contact-info {
  padding: 5rem 2rem;
  background-color: #264653;
  color: white;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
}

.contact-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #f4a261;
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
}

.contact-box {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
}

.contact-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background-color: rgba(244, 162, 97, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.contact-box:hover .contact-icon {
  background-color: rgba(244, 162, 97, 0.3);
}

.contact-icon i {
  font-size: 40px;
  color: #f4a261;
}

.contact-box h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #f4a261;
}

.contact-box p {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.contact-box a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-box a:hover {
  color: #f4a261;
}

/* Responsywność */
@media (max-width: 768px) {
  #contact-info {
    padding: 3rem 1rem;
  }

  .contact-title {
    font-size: 2rem;
  }

  .contact-wrapper {
    gap: 2rem;
  }

  .contact-box {
    margin-bottom: 1rem;
  }
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
