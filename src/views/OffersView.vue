<template>
    <section id="offers">
        <div class="bg-container" :class="{ scrolled: scrollUp }"></div>

        <div class="promo-container promo-offer-container">
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/JPZK623D93k?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" loading="lazy" title="Teledysk ślubny Justyny i Rafała" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div class="desc-text-holder">
                <div class="text-container offers-text">
                    <h1 class="welcome-text">Film Ślubny</h1><br>
                    <h3 class="welcome-text">Pakiet Podstawowy</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                    <br>
                    <h3 class="welcome-text">Pakiet Premium</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                </div>
            </div>
        </div>

        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe width="1897" height="785" src="https://www.youtube.com/embed/QgsD4ihitAM" title="IV Moto Piknik w Rudkach" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
            </div>
            <div class="desc-text-holder hovered">
                <div class="text-container  offers-text">
                    <h1 class="welcome-text">Relacja z Eventu</h1><br>
                    <h3 class="welcome-text">Pakiet Podstawowy</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                    <br>
                    <h3 class="welcome-text">Pakiet Premium</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                </div>
            </div>
        </div>

        <div class="promo-container">
            <div class="promo-video-holder">
                <iframe src="https://www.youtube.com/embed/SYy9ohEcSFI?list=PLoy1Kdz_aGIFqI_r2BKa8277iG6UNL1WO" loading="lazy" title="Szczecin at Night | Lumix S5 with 50mm F1.8 | Cinematic video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
                <div class="desc-text-holder">
                <div class="text-container  offers-text">
                    <h1 class="welcome-text">Teledysk</h1><br>
                    <h3 class="welcome-text">Pakiet Podstawowy</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                    <br>
                    <h3 class="welcome-text">Pakiet Premium</h3>
                    <p class="welcome-text">8 godzin filmowania<br>
                    Profesjonalny montaż (do 15 minut)<br>
                    Nośnik USB z filmem<br>
                    Cena: 2500 PLN</p>
                </div>
            </div>
        </div>
    </section>

    <div id="contact-link-container">
        <router-link :to="{ path: '/', hash: '#form-section' }" style="text-decoration: none; color: inherit;">
            <div id="contact-link">
                <p class="welcome-text">Skontaktuj sie ze mna</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import scrollMixin from '@/mixins/scrollMixin'

export default {
    mixins: [ scrollMixin ]
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

    #offers{
        gap: 50px;
        background-color: #f5f5f5;
    }

    .text-container.offers-text{
        font-size: 1.25rem;
    }

    #contact-link-container{
        display: flex;
        justify-content: center;
        padding: 50px;
    }

    #contact-link{
        position: relative;
        display: flex;
        height: 70px;
        padding: 30px;
        background-color: #f4a261;
        align-items: center;
        border-radius: 10px;
        transition:  background-color 0.3s;
        z-index: 30;
    }

    #contact-link:hover{
        background-color: gray;
    }

    /* .hovered{
        background-color: #f4a261;
        transform: skew(-20deg, 0);
    } */
</style>