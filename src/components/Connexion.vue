<template lang="html">

  <section class="connexion" style="height:1200px" >
    <div class="container">
    <div class="d-flex" style="height:800px">
      <div class="align-self-center p-4 rounded mx-auto" style="background-color:#77B5FE; min-width:55%">
        <h3 class="text-center">Connexion</h3>
        <form  @submit.prevent="submit">
          <div class="form-group">
            <label for="login">Login</label>
            <input type="email" id="login" v-model="login" name="login" class="form-control">
          </div>
          <div class="form-group">
            <label for="pass">Mot de Passe</label>
            <input type="password" id="pass" name="pass" v-model="pass" class="form-control">
          </div>
          <div class="d-flex mb-3">
            <div class="mr-auto"><button type="submit" class="btn btn-primary">Connexion</button></div>
            <div><b-link to="/creer-compte">Creer un compte</b-link></div>
          </div>
          <div v-if="err" class="text-danger">
            {{err}}
          </div>
          <div><b-link to="/renitialiser">Mot de passe oublié ?</b-link></div>
        </form>
      </div>
    </div>
    </div>
  </section>

</template>

<script lang="js">
import firebase from 'firebase'
  export default  {
    name: 'Connexion',
    props: [],
    mounted () {

    },
    data () {
      return {
        login:"",
        pass:"",
        err:null
      }
    },
    methods: {
     submit(){
       firebase.auth().signInWithEmailAndPassword(this.login,this.pass).then(()=>{
        //  for(let sujet of  this.$store.state.sujets){
        //             this.$http.post('https://forum-echange.firebaseio.com/sujets.json',sujet)
        //  }

         this.$http.get('https://forum-echange.firebaseio.com/users.json').then(function(data){
        return data.json()
      }).then(function(data){
        var users=[]
        for(let key in data){
          data[key].id=key
          users.push(data[key])
        }
        console.log(data)
         this.$store.dispatch('charger',users)
          this.$store.dispatch('authentifier',{login:this.login,state:true})
        this.$router.push('/')
      }).catch(function(error){
        this.err=error.message
      })
        
       }).catch(erreur=>{
         this.err=erreur.message
       })
     }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
a{
  color:black;
  &:hover{
    font-weight: bold;
    text-decoration: none;
  }
}
.connexion{
  background: url('../assets/font-ecran.png') fixed no-repeat;
  background-size: cover;
}
</style>
