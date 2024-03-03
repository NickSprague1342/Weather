// console.log('Test Vue')

const app = Vue.createApp({
    data() {
        return {
            showWeather: false,
            weather1: 'Test String',
            weather2: 'Second Test',
            weather3: 3,
        }
    },
    methods: {
        toggleShowWeather() {
            this.showWeather = !this.showWeather
        }
    }

    // mount () {
    //     axios
    //     .get('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={f7068d50d7fedd829ed816ac4feb6cbe}')
    //     .then(response => (this.info = response))
    //     console.log('testing')
    // }
})

app.mount('#app')