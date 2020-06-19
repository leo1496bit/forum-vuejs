<template lang="html">

  <section class="profil">
<div class="card mx-auto" style="width: 800px;">
  <img src="../assets/TraficAerienMondial.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text ">Nom: <span class="font-weight-bold">{{this.$store.state.user.pseudo}}</span></p>
    <p class="card-text">Adresse mail : <span class="font-weight-bold">{{this.$store.state.user.email}}</span></p>
    <p class="card-text">Sexe : <span class="font-weight-bold">{{this.$store.state.user.sexe}}</span></p>
    <p class="card-text">Age : <span class="font-weight-bold">{{this.$store.state.user.age}}</span></p>
    <p class="card-text">Nombre de sujets : <span class="font-weight-bold">{{this.$store.state.user.nb_sujet}}</span></p>
    <p class="card-text">Nombre de commentaires : <span class="font-weight-bold">{{this.$store.state.user.nb_comm}}</span></p>
  </div>
</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Profil',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">

</style>
