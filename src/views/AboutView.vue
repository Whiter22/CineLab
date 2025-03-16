<template>
    <div class="bg-container" :class="{ scrolled: scrollUp }"></div>

  <div class="about">
        <div id="about">
        <div class="image-holder"></div>
        <div class="about-text">
            <h1 class="welcome-text">Cześć!</h1>
            <p class="welcome-text">Mam na imię Mikołaj. Tworzenie emocjonujących i przyciągających uwagę widza filmów to moja pasja. Dążę do tego, by moje kadry niosły ze sobą emocje, a wszystkie projekty traktuję indywidualnie, dbając o to, by każdy film opowiadał unikalną historię, która na długo zostanie w pamięci. Zapraszam do kontaktu!</p>
        </div>
    </div>

    <section class="about-sections">
        <div class="about-section">
            <div class="about-image about-image-1"></div>
            <div class="section-text slide-in">
                <h2 class="welcome-text">Moja Historia</h2>
                <p class="welcome-text">CineLab to projekt, który tworzę już od 2018 roku, choć początki produkcji pierwszych filmów sięgają jeszcze wcześniej. Filmy z tych pierwszych lat są ukryte – z perspektywy czasu wiem, że miały swoje wady, ale to dzięki nim nauczyłem się tak wiele i mogłem rozwijać swoją pasję. Tworzenie filmów, od pomysłu przez realizację aż po postprodukcję, stało się czymś więcej niż hobby – przerodziło się w projekt wspomniany na początku, czyli CineLab. Jego celem, oprócz oczywiście tworzenie pięknych filmów jest również współpraca z ludźmi, którzy podzielają moją pasję. W zależności od skali projektu, współpracuję z dźwiękowcem, operatorem drona, mistrzem oświetlenia czy scenarzystą. Natomiast projekty takie jak film ślubny czy relacja z eventu, realizuję osobiście. Dbam o to aby każdy film był dostosowany indywidualnie do potrzeb klienta, a w wolnych chwilach CineLab staje się moją przestrzenią do tworzenia własnych filmów i nieustannego doskonalenia swoich umiejętności, aby być coraz lepszym w tym co robię.</p>
            </div>
        </div>

        <div class="about-section reverse">
            <div class="about-image about-image-2"></div>
            <div class="section-text slide-in from-right">
                <h2 class="welcome-text">Moje Podejście</h2>
                <p class="welcome-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a excepturi hic voluptates aperiam omnis voluptate perferendis exercitationem ut dolorem cupiditate est, architecto ipsa temporibus natus ullam. Ex, corporis laudantium.</p>
            </div>
        </div>

        <div class="about-section">
            <div class="about-image about-image-3"></div>
            <div class="section-text slide-in">
                <h2 class="welcome-text">Coś o sprzecie</h2>
                <p class="welcome-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rerum praesentium, commodi recusandae libero dicta quia sunt nemo accusantium assumenda, corrupti aspernatur! Reiciendis nobis autem, dolore iste cum maiores quos.</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin'

export default {
  mixins: [ scrollMixin ],
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>

<style scoped>
  .bg-container{
    top: 0;
    position: sticky;
    width: 100%;
    height: 120px;
    background-image: url('../assets/sources/bg-about.png');
    transition: height 0.7s;
  }

  .scrolled{
    height: 80px;
  }

  #about {
      width: 100%;
      /* margin-top: 100px; */
      padding: 50px;
      display: flex;
      gap: 2rem;
      justify-content: center;
      border-bottom: solid black 1px;
  }

  .image-holder {
      height: 533px;
      width: 400px;
      background-image: url(../assets/sources2/about.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .about-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 1.2em;
      line-height: 1.6;
  }

  @media (max-width: 700px){
      #about{
          flex-direction: column;
      }

      .image-holder{
          width: auto;
      }
  }

  .about-sections {
      padding: 50px 20px;
      background-color: white;
  }

  .about-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px;
      margin: 20px 0;
      gap: 50px;
  }

  .about-section.reverse {
      flex-direction: row-reverse;
      background-color: #f5f5f5;
  }

  .about-image {
      width: 500px;
      height: 400px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .about-image-1 {
      background-image: url(../assets/sources2/about1.jpg);
  }

  .about-image-2 {
      background-image: url(../assets/sources2/about3.jpg);
  }

  .about-image-3 {
      background-image: url(../assets/sources2/about5.jpg);
  }

  .section-text {
      flex: 1;
      padding: 20px;
  }

  .section-text h2 {
      font-size: 2.5em;
      margin-bottom: 20px;
      color: #333;
  }

  .section-text p {
      font-size: 1.2em;
      line-height: 1.6;
      color: #666;
  }

  @media (max-width: 1024px) {
      #about {
          grid-template-columns: 1fr;
          text-align: center;
      }

      .image-holder {
          /* margin: 0 auto; */
      }

      .about-section {
          flex-direction: column;
          text-align: center;
      }

      .about-section.reverse {
          flex-direction: column;
      }

      .about-image {
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
      }
  }

</style>
