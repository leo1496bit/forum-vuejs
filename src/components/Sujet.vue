<template lang="html">
<div id="sujets">
    <header class="container-fluid" style="height:50px; background-color:green"></header>
<b-container fluid="md" class="mt-5" v-if="courant!=null">
  <div>
  <b-card :title="courant.title" :sub-title="'écrit par : '+courant.auteur">
    <b-card-text>
    <span class="font-italic">publié le {{courant.date}}</span><br>
     <span class="sujet">Sujet</span> : <span class="font-weight-bold">{{courant.publication}}</span>
    </b-card-text>
  </b-card>
     <b-card
        border-variant="secondary"
        align="center"
        class="mt-2"
        v-for="commentaire of courant.commentaires" v-bind:key="commentaire.heure"
      >
        <b-card-text class="text-left">{{commentaire.message}}</b-card-text>
         <b-card-text class="text-right">De: <span class="sujet font-weight-bold">{{commentaire.auteur}}</span>
         <br>
         {{commentaire.heure}}</b-card-text>
         <b-card-text class="text-left">
           <b-button :variant="commentaire.liked.findIndex(elem=>elem==$store.state.user.id)!==-1?'primary':'outline-primary'" style="margin:2px" @click="like(courant.commentaires.indexOf(commentaire))">{{commentaire.like}}<b-icon-hand-thumbs-up  style="width:1rem; height:1.3rem;"></b-icon-hand-thumbs-up></b-button>
          <b-button :variant="commentaire.disliked.findIndex(elem=>elem==$store.state.user.id)!==-1?'danger':'outline-danger'" @click="dislike(courant.commentaires.indexOf(commentaire))">{{commentaire.dislike}}<b-icon-hand-thumbs-down  style="width:1rem; height:1.3rem;"></b-icon-hand-thumbs-down></b-button>
         </b-card-text>
      </b-card>
  <div class="mt-2 mb-2 ">
    <b-form-textarea
      id="textarea"
      placeholder="Commenter la publication..."
      rows="3"
      max-rows="6"
      v-model="message"
    ></b-form-textarea>
  </div>
    <b-button @click="commenter(message)">répondre</b-button>
</div>
</b-container>
</div>

  

</template>

<script lang="js">
import{ mapState} from 'vuex'
  export default  {
    name: 'Sujet',
    props: [],
    mounted () {

    },
    data () {
      return {
        message:"",
        liked:0,
        index:-1
      }
    },
    methods: {
      commenter(mess){
       this.$store.commit('COMMENTER',mess)
        this.message=""
        this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires.json',this.courant.commentaires).then(function(data){
          console.log(data)
        }).catch(function(error){
          console.error(error.message)
        })
      },
      like(index){
        if(this.courant.commentaires[index].liked.findIndex(elem=>elem==this.$store.state.user.id)==-1){
              this.$store.commit('LIKE',index)
              this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/liked.json',this.courant.commentaires[index].liked).catch(error=>console.log(error.message))
              this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/disliked.json',this.courant.commentaires[index].disliked).catch(error=>console.log(error.message))
              console.log(this.courant.id)
          this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/like.json',this.courant.commentaires[index].like).then(function(data){
            console.log(data)
            this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/dislike.json',this.courant.commentaires[index].dislike).catch(error=>console.error(error.message))
          }).catch(function(error){
            console.error(error.message)
          })
 
        }
   
      },
      dislike(index){
        if(this.courant.commentaires[index].disliked.findIndex(elem=>elem==this.$store.state.user.id)==-1){
           this.$store.commit('DISLIKE',index) 
           this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/liked.json',this.courant.commentaires[index].liked).catch(error=>console.log(error.message))
              this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/disliked.json',this.courant.commentaires[index].disliked).catch(error=>console.log(error.message))
           this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/dislike.json',this.courant.commentaires[index].dislike).then(function(data){
             console.log(data)
              this.$http.put('https://forum-echange.firebaseio.com/sujets/'+this.courant.id+'/commentaires/'+index+'/like.json',this.courant.commentaires[index].like).catch(error=>console.error(error.message))
           }).catch(function(error){
             console.error(error.message)
           })     
        }
   
      }
     

    },
    computed: {
      ...mapState(['sujets','courant','comm']),
      color1:function(){
        if(this.liked==1){
        return "primary"
        }else{
          return "outline-primary"
        }

      },
        color2:function(){
        if(this.liked==-1){
        return "danger"
        }else{
          return "outline-danger"
        }

      }

    }
}


</script>

<style scoped lang="scss">
.sujet{
  text-decoration: underline;
}
#sujets{
  height:1800px;
  background: url('../assets/font-ecran.png') fixed no-repeat;
  background-size: cover;
}
</style>
