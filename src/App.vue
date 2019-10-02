<template>
  <div id="app" class="container">     
    <router-view/>
  </div>
</template>
<script>
import Characters from '@/views/Characters'
import Character from '@/views/Character'
export default {
  name: 'app',
  components:
    [Characters, Character]
  
}
</script>