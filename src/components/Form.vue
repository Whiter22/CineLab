<template>
      <section id="form-section">
        <div class="form-container">
            <h2 class="welcome-text">Skontaktuj się ze mna</h2>
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
                
                Pola oznaczone '*' są obowiazkowe
                
                <br>
                <br>

                <div class="g-recaptcha" data-sitekey="6Ldd1-IqAAAAAIjlU43gUD-uXA9j_hGguzSztLI1"></div>
                
                <br>
                
                <button type="submit" class="submit-btn">Wyślij wiadomość</button>
            </form>

            <div id="status-massage">
                <svg v-show="showFormMassage" width="10" height="10" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 459.53"><path fill-rule="nonzero" d="M9.38 212.26l91.05-1.2c1.9-.01 3.69.53 5.19 1.49 32.96 19.01 62.2 42.95 87.35 71.5 33.32-54.09 68.94-103.63 106.55-149.04C339.7 86.5 382.32 42.5 426.98 2.46a9.464 9.464 0 016.33-2.41L502.67 0c8.53 0 12.23 9.31 6.73 16.26-61.47 68.29-117.32 139.05-167.78 212a2075.014 2075.014 0 00-135.99 226.12c-2.4 4.65-8.14 6.49-12.79 4.09a9.476 9.476 0 01-4.35-4.63C146.26 363.35 86.92 286.45 4.14 229.6c-7.67-5.25-3.96-17.2 5.24-17.34z"/></svg>
                <p class="welocme-text">{{ formMassage }}</p>
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
        .sendForm('service_9ptm6g5', 'template_b87a12g', this.$refs.form, {
          publicKey: '77z53EQtFAPzbrevl',
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
    i {
        font-size: 0.7rem;
    }

    #status-massage {
        padding-top: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>