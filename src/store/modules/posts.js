export default {
    state: {
        characters:[]
    },
    actions: {
        async fetchCharacters(ctx){
            const res = await fetch(
                "https://rickandmortyapi.com/api/character"
            )
            const chars = await res.json()
            const characters = chars.results
            ctx.commit('Characters', characters)
        }
    },
    mutations: {
        Characters(state, characters) {
            state.characters = characters
        },
    },
    getters: {
        allCharacters(state){
            return state.characters
        },
        getCharacterById: state => id => {
            console.log('character-id', id)
            const wtf = state.characters.find(Obj => Obj.id === id)
            console.log('character-wtf', wtf)
            return wtf
            
          }
    }
}