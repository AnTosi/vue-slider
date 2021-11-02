let counter = 0;
Vue.config.devtools = true;

const carousel = new Vue ({
    el: "#root",
    data: {
        counter: 0,

        slides: [
            {
            image: './assets/img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
            image: './assets/img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum.',
            },
            {
            image: './assets/img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
            image: './assets/img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
            image: './assets/img/05.jpg',
            title: "Paradise",
            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        autoPlay: false,
        
    },

    methods: {
        arrowUp() {
            if (this.counter > 0) {
                --this.counter;
            } else {
                this.counter = 4;
            }
        },

        arrowDown() {
            if (this.counter < 4) {
                ++this.counter;
            } else {
                this.counter = 0;
            }
        },


        //funzionaaaaaaa
        // provo a cambiare icon

        //ora giustamente con il mounted mi si è incasinato questo
        slideShow(){
            if (this.autoPlay == false)  {
                //non riesco a clearare l'interval che ho settato in automatico
                clearInterval(autoSlide);
                this.autoPlay = setInterval(this.arrowDown, 3000);
                
            } else {
                clearInterval(this.autoPlay);
                this.autoPlay = false; 
            }

            // } else {
                // clearInterval(slideShow) 
                    
                // }
        },

        //qua volevo provare a mostrare con il click l'immagine della thumb

        // showThis(){
        //     this.counter = this.index
        // }
    },

    mounted() {
        let autoSlide = setInterval(this.arrowDown, 3000)
    } 
     
    
});