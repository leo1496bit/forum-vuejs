<template>
  <div id="app">
    <div id="nav" v-show="this.$store.state.connect">
  <b-navbar toggleable="md" type="dark" variant="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-item to="/" exact-active-class="text-success font-weight-bold sel "> Accueil</b-nav-item>
        <b-nav-item to="/sujets" active-class="text-success font-weight-bold sel " @click="charger"> Sujets</b-nav-item>
      
         <b-nav-item to="/about" active-class="text-success font-weight-bold sel "> About</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto ">

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item to="/profil">Profil</b-dropdown-item>
          <b-dropdown-item href="#" @click.prevent="disconnect">Deconnexion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <router-view/>
  </div>
</template>
<script>
export default{
  name:'App',

  methods:{
    disconnect(){
      this.$store.commit('DISCONNECT')
      this.$router.push('/connexion')
    },
    charger(){
      this.$http.get('https://forum-echange.firebaseio.com/sujets.json').then(function(data){
        return data.json()
      }).then(function(data){
        var sujets=[]
        for(let key in data){
          data[key].id=key
          sujets.push(data[key])
        }
        this.$store.commit('CHARGER2',sujets)
      }).catch(function(error){
        console.error(error.message)
      })
    }
  }
}
</script>

<style>
.sel{
  font-size: 1.1rem;
}


</style>
