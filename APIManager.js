//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getUser() {
        const userObject = $.get('https://randomuser.me/api/')
        this.data["userObject"] = userObject;
    }

    getFriends() {
        let allFriends = []
        for (let i = 0; i < 6; i++) {
            let friendObject = new Promise((resolve,reject) => {
                resolve($.get('https://randomuser.me/api/'))
            })
            allFriends.push(friendObject)
            
        }   
        this.data["allFriends"] = allFriends;
    }

    getQuote(){
        let quoteObject = new Promise((resolve,reject) => {
            resolve($.get("https://api.kanye.rest/"))
        })
        this.data["quoteObject"] = quoteObject;
    }

    getPokemon(){
        let rendomPokemonId = Math.floor(Math.random() * 949);
        let pokemonObject = new Promise((resolve,reject) => {
            resolve($.get(`https://pokeapi.co/api/v2/pokemon/${rendomPokemonId}`))
        })
        
        this.data["pokemonObject"] = pokemonObject;
    }


    getMeat() {
        let meatObject = new Promise((resolve,reject) => {
            resolve($.get(`https://baconipsum.com/api/?type=all-meat&paras=1`))
        })
        this.data["meatObject"] = meatObject;
    }
}
