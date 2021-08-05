const app = Vue.createApp({
    // template: `
    // <h1>Hola mundo</h1>
    // <p>Desde app.js</p>
    // `
    data() {
        return {
            quote: "I'm Bat",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(event) {
            console.log('hola',event)
            this.author = 'Fernando'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')