<template>
  <section id="form-section">
    <div class="form-container">
        <h2 class="welcome-text">Zapytaj o ofertę</h2>
        <form id="contact-form" ref='form' @submit.prevent="sendEmail">
            <div class="form-group">
                <label for="name">Imię\Imiona*</label>
                <input type="text" id="name" name="name" required maxlength="50">
            </div>
            
            <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" id="email" name="contact-mail" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
            </div>
            
            <div class="form-group">
                <label for="phone">Numer telefonu*</label>
                <input type="tel" id="phone" name="phone" required pattern="^[0-9]{9}">
            </div>
            
            <div class="form-group">
                <label for="video-type">Rodzaj filmu*</label>
                <select id="video-type" name="film" required>
                    <option value="">Wybierz rodzaj filmu</option>
                    <option value="wedding">Film ślubny</option>
                    <option value="commercial">Film reklamowy</option>
                    <option value="event">Film z wydarzenia</option>
                    <option value="event">Rolka</option>
                    <option value="other">Inny</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="date">Planowana data nagrania</label>
                <input type="date" id="date" name="date">
            </div>
            
            <div class="form-group">
                <label for="description">Opis projektu* <i>max 500 znaków</i></label>
                <textarea id="description" name="description" rows="5" required maxlength="500"></textarea>
            </div>
            
            <div class="required-info">Pola oznaczone '*' są obowiązkowe</div>
            
            <div class="g-recaptcha" data-sitekey="6Ldd1-IqAAAAAIjlU43gUD-uXA9j_hGguzSztLI1"></div>
            
            <button type="submit" class="submit-btn">Wyślij wiadomość</button>
        </form>

        <div id="status-message">
            <svg v-show="showFormMassage" width="20" height="20" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 459.53"><path fill-rule="nonzero" d="M9.38 212.26l91.05-1.2c1.9-.01 3.69.53 5.19 1.49 32.96 19.01 62.2 42.95 87.35 71.5 33.32-54.09 68.94-103.63 106.55-149.04C339.7 86.5 382.32 42.5 426.98 2.46a9.464 9.464 0 016.33-2.41L502.67 0c8.53 0 12.23 9.31 6.73 16.26-61.47 68.29-117.32 139.05-167.78 212a2075.014 2075.014 0 00-135.99 226.12c-2.4 4.65-8.14 6.49-12.79 4.09a9.476 9.476 0 01-4.35-4.63C146.26 363.35 86.92 286.45 4.14 229.6c-7.67-5.25-3.96-17.2 5.24-17.34z"/></svg>
            <p class="welcome-text">{{ formMassage }}</p>
        </div>
    </div>
</section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
data(){
return {
    showFormMassage: false,
    formMassage: ''
}
},
methods: {
sendEmail() {
  emailjs
        .sendForm('service_zap1626', 'template_6h0o1yn', this.$refs.form, {
        publicKey: 'BFzRiMoB3HUT6FI38',
        })
        .then(
            () => {
                this.formMassage = 'SUCCESS'
                this.showFormMassage = true
                // console.log(this.formMassage);
            },
            (error) => {
                this.formMassage = 'FAILED'
                console.log(this.formMassage, error.text);
            },
        );
    },
},
mounted() {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}
};
</script>

<style scoped>
#form-section {
background-color: #f8f8f8;
padding: 60px 0;
}

.form-container {
max-width: 800px;
margin: 0 auto;
padding: 40px;
background-color: white;
border-radius: 8px;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.welcome-text {
font-size: 28px;
font-weight: 600;
text-align: center;
margin-bottom: 30px;
color: #333;
position: relative;
}

.welcome-text:after {
content: '';
display: block;
width: 60px;
height: 3px;
background-color: #F7A443;
margin: 15px auto 0;
}

.form-group {
margin-bottom: 20px;
}

label {
display: block;
margin-bottom: 8px;
font-weight: 500;
color: #444;
}

input, select, textarea {
width: 100%;
padding: 12px 15px;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 16px;
transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
border-color: #F7A443;
outline: none;
box-shadow: 0 0 0 2px rgba(247, 164, 67, 0.2);
}

textarea {
resize: vertical;
min-height: 120px;
}

.required-info {
font-size: 14px;
color: #777;
margin-bottom: 20px;
}

i {
font-size: 0.8rem;
color: #999;
font-style: italic;
}

.submit-btn {
background-color: #F7A443;
color: white;
border: none;
border-radius: 5px;
padding: 14px 28px;
font-size: 16px;
font-weight: 500;
cursor: pointer;
transition: background-color 0.3s;
margin-top: 10px;
display: block;
width: auto;
min-width: 200px;
margin-left: auto;
margin-right: auto;
}

.submit-btn:hover {
background-color: #e5933a;
}

#status-message {
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 20px;
color: #4CAF50;
}

#status-message svg {
fill: #4CAF50;
}

.g-recaptcha {
margin: 20px 0;
display: flex;
justify-content: center;
}

@media (max-width: 768px) {
.form-container {
    padding: 30px 20px;
}

.welcome-text {
    font-size: 24px;
}

.submit-btn {
    width: 100%;
}
}
</style>