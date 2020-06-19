<template lang="html">

  <section class="creer-compte"  style="height:1200px">
    <div class="container">
    <div class="d-flex" style="height:900px">
      <div class="align-self-center p-5 rounded mx-auto" style="background-color:#77B5FE; min-width:55%">
        <h3 class="text-center">Creer un compte</h3>
        <form  action="#" @submit.prevent="submit">
          <div class="form-group">
            <label for="login">Email</label>
            <input type="email" id="login" name="login" v-model="form.login" class="form-control">
          </div>
          <div class="form-group">
            <label for="pseudo">Pseudo</label>
            <input type="text" id="pseudo" v-model="form.pseudo" class="form-control">
          </div>
          <div class="form-group">
            <label for="pass">Mot de Passe</label>
            <input type="password" id="pass" name="pass" v-model="form.pass" class="form-control">
          </div>
          <div class="form-group">
             <label for="confirm">Confirmation</label>
            <input type="password" id="confirm" name="confirm" v-model="form.confirm" class="form-control">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="form.age" class="form-control">
          </div>
          Sexe<br>
          <div class="form-check form-check-inline">
              <input type="radio"  class="form-check-input" id="feminin" value="feminin" v-model="form.sexe">
              <label class="form-check-label" for="feminin">F</label>
          </div>
          <div class="form-check form-check-inline">
            <input type="radio"  class="form-check-input" value="masculin" v-model="form.sexe">
              <label class="form-check-label" for="masculin">M</label>
          </div>
          <div class="text-danger" v-if="form.pass!==form.confirm"> <small>Les mots de passe doivent être identiques</small></div>
          <div class="form-group">
            <button type="submit" :disabled="form.pass!==form.confirm||form.pass==''" class="btn btn-primary">Creer</button>
          </div>
          <div v-if="err" class="text-danger">
            {{err}}
          </div>

        </form>
      </div>
      {{form.login}}
    </div>
    </div>
  </section>

</template>

<script lang="js">
import firebase from "firebase"
  export default  {
    name: 'CreerCompte',
    props: [],
    mounted () {

    },
    data () {
      return {
        form:{
          login:"",
          pass:"",
          confirm:"",
          pseudo:"",
          sexe:"",
          age:null
        }
        ,err:null
      }
    },
    methods: {
      submit(){
        firebase.auth().createUserWithEmailAndPassword(this.form.login,this.form.pass).then(() =>{
          this.$http.post("https://forum-echange.firebaseio.com/users.json",{email:this.form.login,pseudo:this.form.pseudo,sexe:this.form.sexe,age:this.form.age,nb_comm:0,nb_sujet:0}).then(function(response){
            console.log(response)
             this.$http.get('https://forum-echange.firebaseio.com/users.json').then(function(data){
        return data.json()
      }).then(function(data){
        var users=[]
        for(let key in data){
          data[key].id=key
          users.push(data[key])
        }
         this.$store.dispatch('charger',users)
          this.$store.dispatch('authentifier',{login:this.form.login,state:true})
        this.$router.push('/')
      }).catch(function(error){
        this.err=error.message
      })
        
          })
          
        }).catch(function(erreur){
          this.err=erreur.message
        })
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
.creer-compte{
  background: url('../assets/font-ecran.png') fixed no-repeat;
  background-size: cover;
}
</style>
