<template lang="html">
<div id="sujets">
  <section class="nouveau-sujet container">
    <div class="d-flex " style="height:900px">
      <div style="background-color:#77B5FE; min-width:55%" class="p-5 rounded align-self-center mx-auto">
        <h3 class="text-center">Creation d'un nouveau sujet</h3>
        <form>
          <div class="form-group">
            <label for="titre">Titre</label>
            <input type="text" id="titre" v-model="title" class="form-control" name="titre">
           </div>
           <div class="form-group">
             <label for="contenu">Publication</label>
             <textarea name="contenu" class="form-control" v-model="publication" id="contenu" rows="10" cols="50"></textarea>
           </div>
           <div class="form-group mt-2">
             <button class="btn btn-primary" v-on:click="valider">Valider</button>
           </div>
        </form>
      </div>
    </div>
      <div> {{title}}</div>
  </section>
</div>
  

  

</template>

<script lang="js">
  export default  {
    name: 'NouveauSujet',
    props: [],
    mounted () {

    },
    data () {
      return {
        title:null,
        publication:null
      }
    },
    methods: {
      valider(){
       this.$store.commit('AJOUT_SUJET',{title:this.title,publication:this.publication})
        this.$router.replace({
          path:'/sujets'
        })
      }
    },
    computed: {
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
