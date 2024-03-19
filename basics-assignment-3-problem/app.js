const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      const that = this;
      setTimeout(function() {
        that.counter = 0;
      }, 5000);
    }
  },
  computed: {
    result() {
      if (this.counter > 37) {
        return 'Too Much!';
      } else if (this.counter === 37) {
        return this.counter;
      }
      return 'Not there yet';
    }
  },
  methods: {
    addNumber(num) {
      this.counter += num;
    },
  },
});

app.mount('#assignment');