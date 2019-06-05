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
           <div class = 'todoEntry'> 
             {{todo['todo']}} 
           </div>
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
        axios.post('/todos', 
        {
          todo: this.tasks
        })
        .then(() => {
          this.getTasks();
        })
        .catch((err) => {
          console.log(err);
        })
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
    }, 
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

.todoEntry{
  background-color: white; 
  display: flex; 
  flex-direction: row;
  width: 200px;
  border: 1px solid black;
}
</style>
