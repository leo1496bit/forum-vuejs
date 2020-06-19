<template lang="html">

  <section class="components-renit container">
    <div class="d-flex" style="height:800px">
      <div class="align-self-center p-4 rounded mx-auto" style="background-color:#77B5FE; min-width:55%">
        <h3 class="text-center">Renitialiser le mot de passe</h3>
        <form  @submit.prevent="submit">
          <div class="form-group">
            <label for="login">Email</label>
            <input type="email" id="login" v-model="login" name="login" class="form-control">
          </div>
          <div class="mr-auto"><button type="submit" class="btn btn-primary">Connexion</button></div>
        <div v-if="err" class="text-danger">
          {{err}}
        </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import firebase from 'firebase'
  export default  {
    name: 'Renit',
    props: [],
    mounted () {

    },
    data () {
      return {
        login:"",
        err:null
      }
    },
    methods: {
      submit(){
        firebase.auth().sendPasswordResetEmail(this.login).then(()=>{
          this.$router.push('/connexion')
        }).catch(err=>
        {
          this.err=err.message
        })
      }

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .components-renit {

  }
</style>
