<template>
  <div class = 'wholeApp'>
    <div class = 'listBody'>  
        <div class = 'title'>
            To-Do List
        </div>      
        <div class = 'enterBar'>
          <input type = 'text' v-model= 'tasks'>
          <input type = 'submit' value = 'Add task' v-on:click = 'addToDo'> 
        </div>
        <div v-for = 'todo in todos'>
           <div> {{todo.task}} </div>
        </div>
    </div>    
  </div>
</template>


<script>
export default{
  data(){
    return {   
      tasks : '',  
      todos : [   
          
      ]
    }  
  },
  methods : {
    addToDo(){
        var task = {task : this.tasks};
        this.todos.push(task);
        this.tasks = '';
    }
  }
}
</script>

<style>
.wholeApp{
    background-color: lightblue;
    height: 100vw;
}

.listBody{
    position: relative; 
    left: 45%;
}
.title{
    font-size: 30px;
    color: white;
}
</style>
