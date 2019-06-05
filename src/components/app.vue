<template>
  <div>
    <div class = 'enterBar'>
      <input type = 'text'>
    </div>
    <div v-for = 'todo in todos'>
       <div> {{todo.task}} </div>
    </div>
  </div>
</template>


<script>
export default{
  data(){
    return {   
      todos : [   
          
      ]
    }  
  }
}
</script>


