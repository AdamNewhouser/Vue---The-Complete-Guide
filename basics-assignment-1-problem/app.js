const app = Vue.createApp({
  data() {
    return {
      myName: 'Adam Newhouser',
      myAge: 37,
      imageUrl: 'https://media.istockphoto.com/id/1496108471/photo/the-matterhorn-mountain-peaks-are-reflected-in-the-lake.jpg?s=1024x1024&w=is&k=20&c=TDQ5exWMGmsio9s-QdYXyHTbLoJ7A8IFjrCJcX1b_7M='
    };
  },
  methods: {
    favoriteNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    }
  }
});

app.mount('#assignment');