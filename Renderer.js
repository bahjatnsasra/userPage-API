const container = $(".user-container")

class Renderer {

    renderPage(){
        let userContainer = $(".user-container")
        let quoteContainer = $(".quote-container")
        let pokemonContainer = $(".pokemon-container")
        let meatContainer = $(".meat-container")
        let friendsCntainer = $(".friends-container")

        userContainer.empty()
        quoteContainer.empty()
        pokemonContainer.empty()
        meatContainer.empty()
        friendsCntainer.empty()
    }

    renderImage(userObject){
        userObject.then((user) => {
            let image = user.results[0].picture.large
            let userImage = $(`<img id="profile-pic" src="${image}">`)
            container.append($(userImage))
        })
    }

    renderUserInfo(userObject){
        userObject.then(user => {
            let nameObject = user.results[0].name
            let userName = `${nameObject.title}. ${nameObject.first} ${nameObject.last}`
    
            let location = user.results[0].location
            let userLocation = `${location.city}, ${location.state}`
    
            let userInfo = $(`<div class="user-info"></div>`)
            userInfo.append(`<div>${userName}</div>`)
            userInfo.append(`<div>${userLocation}</div>`)
            container.append(userInfo)
        })
    }

    renderUserFriend(allFriends){
        if (allFriends.length == 6) {
            const source = $('#friends-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({allFriends});
            $(".friends-container").append(newHTML)
        }
    }

    renderQuote(quoteObject){
        quoteObject.then((Quote) => {
            let quoteText = Quote.quote
            const source = $('#quote-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({"quoteText":quoteText});
            $(".quote-container").append(newHTML)
        })
    }

    renderPokemon(pokemonObject){
        pokemonObject.then((pokemon) => {
            let pokemonName = pokemon.name
            let pokemonImage = pokemon.sprites.front_shiny
            const source = $('#pokemon-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({"pokemonName":pokemonName ,"pokemonImage" : pokemonImage});
            $(".pokemon-container").append(newHTML)
        })
        
    }

    renderMeat(meatObject){
        meatObject.then((meat) => {
            let meatInfo = meat[0]
            const source = $('#meat-template').html();
            const template = Handlebars.compile(source);
            const newHTML = template({"meatInfo":meatInfo});
            $(".meat-container").append(newHTML)
        })
        
    }

}
