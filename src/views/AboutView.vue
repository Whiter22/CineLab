<template>  
    <div class="about-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-image"></div>
        <div class="hero-content">
          <h1>Cześć!</h1>
          <p class = "slide-in show">Mam na imię Mikołaj. Tworzenie emocjonujących i przyciągających uwagę widza filmów to moja pasja. Dążę do tego, by moje kadry niosły ze sobą emocje, a wszystkie projekty traktuję indywidualnie, dbając o to, by każdy film opowiadał unikalną historię, która na długo zostanie w pamięci.
          W swoich filmach staram się osiągnąć cinematic look - ten filmowy, kinowy charakter, który nadaje każdemu kadrowi głębi i sprawia, że obraz wygląda jak z prawdziwego filmu. To właśnie ta estetyka pozwala przenieść widza w sam środek opowiadanej historii.</p>
        </div>
      </section>
  
      <!-- About Sections -->
      <div class="content-sections">
        <!-- History Section -->
        <section class="content-section">
          <div class="section-text">
            <h2>Moja historia</h2>
            <div class="section-underline"></div>
            <p class = "slide-in">CineLab to projekt, który tworzę już od 2018 roku, choć początki mojej przygody z produkcją filmów sięgają jeszcze wcześniejszych lat. Przez ten czas zrobiłem duży progres – to właśnie dzięki doświadczeniom z pierwszych produkcji mogłem rozwijać swoją pasję i umiejętności. <br> <br>

            Tworzenie filmów – od pomysłu, przez realizację, aż po postprodukcję – stało się dla mnie czymś więcej niż tylko hobby. Z czasem przerodziło się w pełnoprawny projekt, jakim jest CineLab. Jego celem, poza tworzeniem pięknych filmów, jest także współpraca z ludźmi, którzy podzielają moją pasję. <br> <br>

            W zależności od skali przedsięwzięcia, współpracuję z dźwiękowcem, operatorem drona, mistrzem oświetlenia czy scenarzystą. Natomiast projekty takie jak film ślubny czy relacja z eventu realizuję samodzielnie. Dbam o to, aby każdy film był indywidualnie dopasowany do potrzeb klienta. <br> <br>

            W wolnych chwilach CineLab staje się moją przestrzenią do tworzenia autorskich produkcji i nieustannego doskonalenia swoich umiejętności, by z każdym projektem być coraz lepszym w tym, co robię.</p>
          </div>
          <div class="section-image history-image"></div>
        </section>
  
        <!-- Approach Section -->
        <section class="content-section reverse">
          <div class="section-text">
            <h2>Moje podejście</h2>
            <div class="section-underline"></div>
            <p class = "slide-in">Każdy projekt to dla mnie nowa historia do opowiedzenia. Nie ma dwóch identycznych filmów, bo nie ma dwóch identycznych momentów. Słucham, obserwuję i staram się zrozumieć, co jest najważniejsze dla moich klientów.
            Wierzę, że najlepsze kadry powstają naturalnie - kiedy ludzie zapominają o kamerze i po prostu żyją chwilą. Moja rola to wychwycić te autentyczne emocje i przekształcić je w opowieść, która porusza.</p>
          </div>
          <div class="section-image approach-image"></div>
        </section>
  
        <!-- Equipment Section -->
        <section class="content-section">
          <div class="section-text">
            <h2>Coś o sprzęcie</h2>
            <div class="section-underline"></div>
            <p class = "slide-in">Zaczynałem od nagrywania telefonem, ale z czasem zacząłem inwestować w lepszy sprzęt. Dziś pracuję na zestawie, który zapewnia mi swobodę działania i wysoką jakość obrazu oraz dźwięku. To nie wszystko, ale ma duże znaczenie – szczególnie wtedy, gdy liczy się każdy detal.</p>
          </div>
          <div class="section-image equipment-image"></div>
        </section>
      </div>
    </div>
</template>
  
<script>
import scrollMixin from '@/mixins/scrollMixin'
  
export default {
  mixins: [scrollMixin],
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>
  
<style scoped>
/* Container */
.about-container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  display: flex;
  gap: 40px;
  padding: 60px 40px;
  margin-bottom: 30px;
  border-bottom: 1px solid #F7A443;
  align-items: center;
}

.hero-image {
  flex: 0 0 400px;
  height: 533px;
  background-image: url(../assets/sources2/about0.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.hero-image:hover {
  transform: scale(1.02);
}

.hero-content {
  flex: 1;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
}

.hero-content h1::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #F7A443;
  margin-top: 15px;
}

.hero-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
}

/* Content Sections */
.content-sections {
  padding: 20px;
}

.content-section {
  display: flex;
  margin: 80px 0;
  gap: 50px;
  align-items: center;
}

.content-section.reverse {
  flex-direction: row-reverse;
}

.section-text {
  flex: 1;
  padding: 20px;
}

.section-text h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 15px;
}

.section-underline {
  width: 60px;
  height: 3px;
  background-color: #F7A443;
  margin-bottom: 25px;
}

.section-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.section-image {
  flex: 0 0 500px;
  height: 400px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.section-image:hover {
  transform: translateY(-5px);
}

.history-image {
  background-image: url(../assets/sources2/about8.jpg);
}

.approach-image {
  background-image: url(../assets/sources2/about3.jpg);
}

.equipment-image {
  background-image: url(../assets/sources2/about6.jpg);
  background-position: 0 20%;
}

/* Alternating Section Background */
.content-section:nth-child(even) {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 40px;
  margin: 60px -20px;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
  
  .hero-content h1::after {
    margin-left: auto;
    margin-right: auto;
  }
  
  .content-section,
  .content-section.reverse {
    flex-direction: column;
    text-align: center;
    gap: 30px;
    margin: 60px 0;
  }
  
  .section-underline {
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .hero-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 30px;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .section-text h2 {
    font-size: 2rem;
  }
  
  .hero-content p,
  .section-text p {
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .content-section {
    padding: 30px 15px;
  }
  
  .content-section:nth-child(even) {
    padding: 30px 15px;
    margin: 30px -10px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 30px 15px;
  }
  
  .hero-image {
    height: 400px;
  }
  
  .section-image {
    height: 300px;
  }
}
</style>