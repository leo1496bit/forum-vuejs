<template>
<div>
<header class="container-fuid d-flex ">
<h1 id="logo" class="align-self-center mr-auto text-break"> Forum de <br>discussion</h1>
<div id="cit" class="align-self-center">"Parlons de tout et de rien"</div>
</header>
<div id="font">
<section class="d-flex flex-wrap justify-content-center" >
<h1 style="font-family: 'Piedra', cursive; color:white;font-size:50px">WELCOME </h1>
<div>
  <img src="../assets/Discussion.png" alt="discussion" width="100px" height="auto">
</div>
</section>
<div class="text-center">
  <img src="../assets/equipe.png" alt="" class="img-fluid">
</div>
<div class="text-white text-center font-weight-bold" style="font-size:1.3rem">
Réagissez sur des sujets qui vous interessent ou créez vos sujets de discussion
</div>
</div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Hanalei&family=Piedra&family=Playball&display=swap');
@media screen and (min-width:765px) {
  header{
    height:200px;
    background-color: green;
  }
  
}
@media screen and (max-width:764px){
    header{
    height:100px;
    background-color: green;
  }
  #cit{
    display:none;
  }
}
#logo{
    font-family: 'Hanalei', cursive;
    font-weight: bold;
  }
#cit{
  font-family: 'Playball', cursive;
  font-size: 1.9rem;
  color:white;
}
#font{
  height:1800px;
  background: url('../assets/font-ecran.png') fixed no-repeat;
  background-size: cover;
}
</style>