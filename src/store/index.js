import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sujets:[
      {title:"Developpement web",
      auteur:"leo",
    publication:"L'utilite du developpement Web",
    date:"05-06-2020",
  commentaires:[{auteur:"leo",message:"pas mal",heure:"14:00:00",like:0,dislike:0,liked:["zzz"],disliked:["eer"]}]},
  {
    title:"Java",
    auteur:"lan",
    publication:"Est ce le meilleur",
    date:"01-04-2014",
    commentaires:[{auteur:"dam",message:"bien",heure:"10:00:00",like:0,dislike:0,liked:["eeez"],disliked:["rfefe"]}]
  }
    ],
    courant:null,
    comm:"",
    users:[{pseudo:String,email:String,sexe:String,age:Number,nb_sujet:Number,nb_comm:Number,id:String}],
    user:null,
    connect:null,
  },
  mutations: {
    SET_COURANT(state,index){
      
      state.courant=index
    },
    COMMENTER(state,val){
      state.courant.commentaires.push({auteur:state.user.pseudo,message:val,heure:(new Date()).toLocaleString(),like:0,dislike:0,liked:[],disliked:[]});
      state.comm=""
    },
    LIKE(state,i){
      state.courant.commentaires[i].like++
      if(state.courant.commentaires[i].disliked.findIndex(elem=>elem==state.user.id)!==-1){
        state.courant.commentaires[i].dislike--
        let a=state.courant.commentaires[i].disliked.findIndex(elem=>elem==state.user.id)
        state.courant.commentaires[i].disliked.splice(a,1)
      }
      state.courant.commentaires[i].liked.push(state.user.id)
      console.log(state.courant.commentaires[i].liked)
    },
    DISLIKE(state,i){
      state.courant.commentaires[i].dislike++
      if(state.courant.commentaires[i].liked.findIndex(elem=>elem==state.user.id)!==-1){
        state.courant.commentaires[i].like--
        let a=state.courant.commentaires[i].liked.findIndex(elem=>elem==state.user.id)
        state.courant.commentaires[i].liked.splice(a,1)
      }
      state.courant.commentaires[i].disliked.push(state.user.id)
      console.log(state.courant.commentaires[i].disliked)
    },
    AJOUT_SUJET(state,sujet){
      sujet.auteur=state.user.pseudo
      sujet.date=new Date().toLocaleString()
      sujet.commentaires=[]
      state.sujets.push(sujet)
    },
    USER(state,user){
      state.user=state.users.find(elem=>elem.email==user.login)
      state.connect=user.state
      console.log(state.users)
    },
    DISCONNECT(state){
      state.connect=false
    },
    CHARGER(state,users){
      state.users=users
    },
    CHARGER2(state,sujets){
      state.sujets=sujets
      console.log(state.sujets)
    }
  },
  actions: {
    modifier({commit},i){
      commit('SET_COURANT',i)
    },
    authentifier({commit},user){
      commit('USER',user)
    },
    charger({commit},users){
      commit('CHARGER',users)
    }
  },
  modules: {
  }
})
