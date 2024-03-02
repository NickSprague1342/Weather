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
})

app.mount('#app')