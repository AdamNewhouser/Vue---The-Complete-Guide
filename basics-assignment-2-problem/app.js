const app = Vue.createApp({
    data() {
      return {
        output: '',
        output2: '',
        confirmedOutput: ''
      };
    },
    methods: {
      showAlert() {
        alert('Alert!');
      },
      updateOutput(e) {
        this.output = e.target.value;
      },
      updateOutput2(e) {
        this.output2 = e.target.value;
      },
      updateConfirmedOutput(e) {
        this.confirmedOutput = this.output2;
      }
    }
  });
  
  app.mount('#assignment');