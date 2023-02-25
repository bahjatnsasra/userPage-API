const render = new Renderer();
const apiManager = new APIManager()




function loadUserData() {
    
    apiManager.getUser()
    apiManager.getFriends()
    apiManager.getQuote()
    apiManager.getPokemon()
    apiManager.getMeat()
}


const data = apiManager.data

function displayUser() {
    render.renderPage()
    
    render.renderImage(data.userObject)
    render.renderUserInfo(data.userObject)
    getFriendsName(data.allFriends)
    render.renderQuote(data.quoteObject)
    render.renderPokemon(data.pokemonObject)
    render.renderMeat(data.meatObject)
}







function getFriendsName(allFriendsObjects) {
    let allFriends = []
    for (const friendObject of allFriendsObjects) {
        friendObject.then(friend => {
            let friendFirstName = friend.results[0].name.first
            let friendLastName = friend.results[0].name.last
            let friendFullName = {"fName" : friendFirstName , "lName" : friendLastName}
            allFriends.push(friendFullName)
            
        }).finally(() => {
            render.renderUserFriend(allFriends)
        }) 
    }
}




