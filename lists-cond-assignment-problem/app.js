const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: '',
      showList: false,
    };
  },
  computed: {
    buttonCaption() {
      return this.showList ? 'Hide List' : 'Show List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.showList = true;
    },
    toggleHideList() {
      this.showList = !this.showList;
    }
  }
});

app.mount('#assignment');