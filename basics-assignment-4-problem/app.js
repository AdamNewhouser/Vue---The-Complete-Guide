const app = Vue.createApp({
  data() {
    return {
      inputClass: '',
      paragraphIsVisable: true,
    }
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visable: this.paragraphIsVisable,
        hidden: !this.paragraphIsVisable
      }
    }
  },
  methods: {
    toggleParagraph() {
      this.paragraphIsVisable = !this.paragraphIsVisable;
    }
  }
});

app.mount('#assignment');