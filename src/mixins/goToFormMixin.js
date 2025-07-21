export default{
    methods: { 
            scrollToFormInHomePage(){
            if(this.$route.name != 'Home') {
                console.log('you are not at home page');
                return;
            }

            console.log('correct');
            let form = document.getElementById('form-section');
            if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
            } 
            else {
                console.log('Element form-section not found');
            }
        }
    }
}