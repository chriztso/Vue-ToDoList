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
           <div> {{todo['todo']}} </div>
        </div>
    </div>    
  </div>
</template>


<script>
import axios from 'axios';

export default{
  data(){
    return {   
      tasks : '',  
      todos : [   
          
      ]
    }  
  },
  mounted(){
    this.getTasks();
  },
  methods : {
    addToDo(){
        var task = {task : this.tasks};
        this.todos.push(task);
        this.tasks = '';
    },
    getTasks(){
      axios.get('/todos')
      .then((data) => {
        console.log(data.data);
        this.todos = data.data;
      })
      .catch((err) => {
        console.log(err);
      })
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
