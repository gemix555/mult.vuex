<template>
  <div class="row">
     <div class="card col-3 m-2"   
      >
      {{characterId}}
          <img class="card-img-top" :src="character.image" alt="Card image cap">
      
        <div class="card-body">
            <h5 class="card-title">{{character.name}}</h5>      
        </div>
        <ul class="list-group list-group-flush"> 
          <li class="list-group-item d-flex justify-content-between">
            STATUS
            <span>{{character.status}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            SPECIES
            <span>{{character.species}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            GENDER
            <span>{{character.gender}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <div>ORIGIN</div>
            <span>{{character.origin.name}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <div>LAST LOCATION</div>
            <span>{{character.location.name}}</span>
          </li>
          
        </ul>
        <div class="card-body">
          <router-link  class="card-link"
          tag="a" to="/"
          >All Characters</router-link>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'character',
  data() {
    return {
      character: {
          id: 1,
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          location: {name: "Earth (Replacement Dimension)"},
          name: "Rick Sanchez",
          origin: {name: "Earth (C-137)"},
          species: "Human",
          status: "Alive",
    }
    }
  },
computed: {
  characterId() {
    return this.$store.getters.getCharacterById(this.$route.params.id);
  }
}
}

</script>
<style scoped>
ul>div{
   font-size: 0.8rem;
}
span {
  margin-left: 50px;
}
</style>

