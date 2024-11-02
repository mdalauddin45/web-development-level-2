{

    //interfaces- generic
    interface Developer<T>{
        name: string,
        computer:{
            brand: string,
            model: string,
            releaseYear: number
        }
        smartWatch: T
    }

    const poorDeveloper: Developer<> = {
        name:'Alauddin',
        computer:{
            brand: 'Asus',
            model: 'x-255ur',
            releaseYear:2023
        },
        smartWatch: {
            brand:'Emilab',
            model:' kw66',
            display:'OLED'
        }
    }
    const richDeveloper: Developer<T> = {
        name:'Salauddin',
        computer:{
            brand: 'Hp',
            model: 'x-255ur',
            releaseYear:2024
        },
        smartWatch: {
            brand:'Ihpone',
            model:' kw66',
            display:'OLED'
        }
    }


}