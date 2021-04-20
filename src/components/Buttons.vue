<template>
  <input type="button" value="{{val}}">
  <button type="button" class="btn">{{val}}</button>
</template>

<script>
  export default{
    name: "Buttons",
    data(){
      return{
        val:this.value
      }
    },
    props:["value"],
    methods:{
      enviar(){
        //prevent default
        
      }
    }
  }
</script>

<style scoped>
  .btn{
    width: 40%;
    height: 3rem;
    background-color: #008afc;
  }
</style>