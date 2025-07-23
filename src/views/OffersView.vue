<template>
    <section id="offers">
        <div class="offers-wrapper">
            <!-- Inne usługi filmowe -->
            <h2 class="section-title">
                <i class="fas fa-video"></i> Usługi Filmowe
            </h2>
            
            <div class="services-grid">
                <!-- Relacje z eventów -->
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-calendar-alt"></i>
                    </div>
                    <h3 class="service-title">Relacje z eventów</h3>
                    <p class="service-description">
                        Relacje filmowe z eventów, które oddają klimat chwili. Rejestruję to, co najważniejsze: emocje, ludzi, detale – wszystko, co tworzy wyjątkowy charakter wydarzenia.
                    </p>
                </div>

                <!-- Rolki -->
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h3 class="service-title">Rolki</h3>
                    <p class="service-description">
                        Krótkie, dynamiczne formy wideo idealne na social media. 
                        Skuteczny sposób na przyciągnięcie uwagi w świecie szybkiej konsumpcji treści.
                    </p>
                </div>

                <!-- Reklamy -->
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-bullhorn"></i>
                    </div>
                    <h3 class="service-title">Reklamy</h3>
                    <p class="service-description">
                        Kreatywne spoty reklamowe, które wyróżnią Twoją markę. 
                        Od koncepcji po realizację.
                    </p>
                </div>

                <!-- Filmy promocyjne -->
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3 class="service-title">Filmy promocyjne</h3>
                    <p class="service-description">
                        Tworzę filmy promocyjne, które pomagają wyróżnić się w tłumie. Stawiam na estetykę, dobrą narrację i dopasowanie do Twojej wizji.
                    </p>
                </div>
            </div>

            <div class="services-note">
                <p>Wycena każdej z tych usług odbywa się indywidualnie i jest uzależniona od potrzeb klienta.</p>
            </div>

            <!-- Filmy ślubne -->
            <h2 class="section-title wedding-section">
                <i class="fas fa-film"></i> Film Ślubny
            </h2>
            
            <div class="offers-container">
                <!-- Pakiet Podstawowy -->
                <div class="package-container">
                    <div class="package-header">
                        <div class="package-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3 class="package-title">Pakiet Podstawowy</h3>
                        <div class="package-price">3500 PLN</div>
                    </div>
                    <div class="package-content">
                        <h4>W skład pakietu wchodzi:</h4>
                        <ul class="feature-list">
                            <li>Ceremonia ślubu</li>
                            <li>Przyjęcie weselne</li>
                            <li>Kilkuminutowy clip z całego dnia</li>
                        </ul>
                        <div class="package-description">
                            Efektem końcowym jest reportaż ślubny o wybranej długości, przedstawiający najważniejsze momenty z uroczystości ślubnej oraz wesela, uwieczniony w sposób pełen emocji i wyjątkowych detali.
                        </div>
                    </div>
                </div>
                
                <!-- Pakiet Premium -->
                <div class="package-container">
                    <div class="package-header">
                        <div class="package-icon">
                            <i class="fas fa-gem"></i>
                        </div>
                        <h3 class="package-title">Pakiet Premium</h3>
                        <div class="package-price">4500 PLN</div>
                    </div>
                    <div class="package-content">
                        <h4>W skład pakietu wchodzi:</h4>
                        <ul class="feature-list">
                            <li>Przygotowania i first look</li>
                            <li>Ceremonia ślubu</li>
                            <li>Przyjęcie weselne</li>
                            <li>Mini sesja plenerowa w dniu ślubu (w formie video)</li>
                            <li>Kilkuminutowy clip z całego dnia</li>
                        </ul>
                        <div class="package-description">
                            Efektem końcowym jest reportaż ślubny o wybranej długości, przedstawiający najważniejsze momenty z uroczystości ślubnej oraz wesela, z dodatkiem 2-5 minutowego teledysku podsumowującego uroczystość. Dzięki tej opcji film zawiera pełen obraz całego dnia - od przygotowań, przez emocjonujący „first look", aż po zabawę weselną.
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Informacje końcowe -->
            <div class="bottom-info">
                <div class="note-box">
                    <p>Każda produkcja jest dostosowywana indywidualnie do potrzeb klienta. Możliwe jest np. stworzenie rolek pod social media. Jeśli masz szczególne życzenia lub pomysły, chętnie je uwzględnię, by stworzyć fantastyczny film. 😊</p>
                </div>
                
                <div class="quality-badge">
                    <i class="fas fa-video"></i>
                    <p>Filmy dostarczane są w jakości 4K w formie cyfrowej</p>
                </div>
            </div>
        </div>
    </section>
  
    <div id="contact-link-container">
        <router-link :to="{ path: '/', hash: '#form-section' }" style="text-decoration: none; color: inherit;">
            <div id="contact-link">
                <i class="fas fa-paper-plane"></i>
                <p class="welcome-text">Skontaktuj się ze mną</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import scrollMixin from "@/mixins/scrollMixin";

export default{
    mixins: [scrollMixin]
}

</script>

<style scoped>
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

#offers {
    background-color: #f5f5f5;
}

.offers-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.section-title {
    text-align: center;
    font-size: 2.2rem;
    color: #264653;
    margin-bottom: 2rem;
    position: relative;
    padding-bottom: 1rem;
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    width: 80px;
    background-color: #f4a261;
}

.wedding-section {
    margin-top: 4rem;
}

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.service-card {
    background-color: white;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.service-icon {
    font-size: 3rem;
    color: #2a9d8f;
    margin-bottom: 1.5rem;
}

.service-title {
    font-size: 1.4rem;
    color: #264653;
    margin-bottom: 1rem;
    font-weight: 600;
}

.service-description {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #555;
}

.services-note {
    text-align: center;
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 3rem;
    font-style: italic;
}

/* Wedding Packages */
.offers-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 768px) {
    .offers-container {
        grid-template-columns: 1fr 1fr;
    }
}

.package-container {
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s, box-shadow 0.3s;
}

.package-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.package-header {
    background-color: #264653;
    color: white;
    padding: 1.5rem;
    text-align: center;
    position: relative;
}

.package-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.package-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #f4a261;
}

.package-price {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 0.5rem;
    color: #f4a261;
}

.package-content {
    padding: 2rem;
}

.feature-list {
    list-style: none;
    margin: 1.5rem 0;
}

.feature-list li {
    padding: 0.6rem 0;
    position: relative;
    padding-left: 2rem;
    font-size: 1.1rem;
}

.feature-list li::before {
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    left: 0;
    color: #2a9d8f;
}

.package-description {
    margin-top: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: #555;
}

/* Bottom Info */
.bottom-info {
    margin-top: 3rem;
}

.note-box {
    margin-top: 2rem;
    background-color: #fdf0e6;
    padding: 1.5rem;
    border-left: 4px solid #f4a261;
    border-radius: 0 10px 10px 0;
}

.quality-badge {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #f0f9ff;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1.5rem;
}

.quality-badge i {
    font-size: 2rem;
    color: #2a9d8f;
}

/* Contact Link */
#contact-link-container {
    display: flex;
    position: relative;
    justify-content: center;
    padding: 3rem 0;
    z-index: 60;
}

#contact-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 2.5rem;
    background-color: #f4a261;
    color: white;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(244, 162, 97, 0.4);
}

#contact-link:hover {
    background-color: #e76f51;
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(231, 111, 81, 0.5);
}

.welcome-text {
    margin: 0;
}
</style>