<template lang="html">

  <section class="components-new-pass">
    <div class="d-flex" style="height:800px">
      <div class="align-self-center p-4 rounded mx-auto" style="background-color:#77B5FE; min-width:55%">
        <h3 class="text-center">Creer un mot de passe</h3>
        <form  @submit.prevent="submit">
          <div class="form-group">
            <label for="code">Code de vérification</label>
            <input type="text" id="code" v-model="code" name="code" class="form-control">
          </div>
          <div class="form-group">
            <label for="pass">Mot de passe</label>
            <input type="password" id="pass" v-model="pass" name="pass" class="form-control">
          </div>
            <div class="form-group">
            <label for="confirm">Confirmation</label>
            <input type="password" id="confirm" v-model="confirm" name="confirm" class="form-control">
          </div>
          <div class="mr-auto"><button type="submit" class="btn btn-primary" :disable="!identique">Connexion</button></div>
        <div v-if="err" class="text-danger">
          {{err}}
        </div>
        <div v-if="identique" class="text-danger">
          <small>Les mots de passe ne sont pas identiques</small>
        </div>
        </form>
      </div>
    </div>
  </section>

</template>

<script lang="js">
import firebase from 'firebase'
  export default  {
    name: 'Newpass',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        pass:"",
        confirm:"",
        code:"",
        err:null
      }
    },
    methods: {
      submit(){
        firebase.confirmPasswordReset(this.code,this.pass).then(()=>{
          this.$router.push('/profil')
        }).catch(err=>{
          this.err=err.message
        })
      }
    },
    computed: {
      identique(){
        return  this.pass==this.confirm
      }
    }
}


</script>

<style scoped lang="scss">
  .components-new-pass {

  }
</style>
