import * as CharacterServices from '@/services/CharacterServices'

export const fetchCharacters = ({commit}) => {
    return CharacterServices.fetchCharacters().then((response) => {
        console.log('wtf', response.data.results)
        const characters = response.data.results;
        
        commit('Characters', characters);
    })
}

/*
 export const fetchCharacters = ({commit}) => {
    const res =  fetch(
        "https://rickandmortyapi.com/api/character"
    )
    const chars = res.json()
     const characters = chars.results 
     commit('Characters', characters)
    return characters
    }
    */