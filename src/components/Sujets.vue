<template lang="html">
<div id="sujets"> 
  <header class="container-fluid" style="height:50px; background-color:green"></header>
<b-container fluid="md" class="mt-5">
  <div class="text-right mb-5"><router-link to="/nouveau-sujet" >Créer un nouveau sujet</router-link></div>
  <section class="sujets">
      <b-list-group>
  <b-list-group-item v-for="ind in this.sujets" v-bind:key="ind.title" @click="modifier(ind)"><router-link to="/sujet" >{{ind.title}}</router-link></b-list-group-item>
</b-list-group>
  </section>
  
</b-container>
</div>

</template>

<script lang="js">
import{ mapState } from 'vuex'
import{ mapActions } from 'vuex'
  export default  {
    name: 'Sujets',
    props: [],
    mounted () {

    },
    data () {
      return {
        
      }
    },
    methods: {
      ...mapActions(['modifier']),
      verif(){
        if(this.courant!=null)
        console.log(this.courant.title, this.sujets)
      }
    },
    computed: {
      ...mapState(['sujets','courant'])
    }
}


</script>

<style scoped lang="scss">
#sujets{
  height:1800px;
  background: url('../assets/font-ecran.png') fixed no-repeat;
  background-size: cover;
}
</style>
