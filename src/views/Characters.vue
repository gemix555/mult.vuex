<template>
  <div class="row">
    <div class="col-12 text-center m-2">
      <h1>Characters</h1>
    </div>
    
     <div class="card col-4 m-2"   
          v-for="character in allCharacters" :key="character.id"
      >
      <router-link tag="a" :to="'/characters/'+ character.id">
          <img class="card-img-top" :src="character.image" alt="Card image cap">
      </router-link>
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
          tag="a" :to="'/characters/'+ character.id"
          >Show Character</router-link>
        </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'characters',
  data() {
    return {
      allCharacters:[
        { id: 1,name: "Rick Sanchez",status: "Alive",species: "Human",type: "",gender: "Male",
          origin: {name: "Earth (C-137)",url: "https://rickandmortyapi.com/api/location/1"},
          location: {name: "Earth (Replacement Dimension)",url: "https://rickandmortyapi.com/api/location/20"},
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      { id: 2,name: "Rick Sanchez",status: "Alive",species: "Human",type: "",gender: "Male",
          origin: {name: "Earth (C-137)",url: "https://rickandmortyapi.com/api/location/1"},
          location: {name: "Earth (Replacement Dimension)",url: "https://rickandmortyapi.com/api/location/20"},
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      
      ]
        
       
    }
  },
  created() {
    this.$store.dispatch('fetchCharacters');
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

