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
        <div v-for = 'todo, index in todos'>
           <div class = 'todoEntry'> 
             <div v-if = 'edit && index === indexOne'>
              <input type = 'text' v-model = 'editText'>
              <button v-on:click = 'submitEdit(todo["todo"])'>Done</button>
             </div>
             <div v-else>
               {{todo['todo']}}
               <button v-on:click = 'editTask(todo["todo"], index)'>Edit</button>
             </div>
             <button v-on:click = 'deleteTask(todo["todo"])'>Delete</button>
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
          
      ],
      edit : false, 
      oldText : '',
      editText : '', 
      indexOne : '', 
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
    deleteTask(task){
      axios.delete('/deleteTodo', 
      {
        data:  {todo : task}
      })
      .then(() => {this.getTasks()})
      .catch((err) => {console.log(err)})
    },
    editTask(text, index){
      this.edit = !this.edit;
      this.oldText =  text;
      this.indexOne = index;
    },
    submitEdit(){
      axios.put('/updateTodo', 
      {
        data : {todo: this.oldText, newTodo : this.editText}
      })
      .then(() => {this.getTasks(); this.edit = !this.edit})
      .catch((err) => {console.log(err)})
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

.todoEntry{
  background-color: white; 
  display: flex; 
  flex-direction: row;
  width: 300px;
  border: 1px solid black;
  justify-content: space-evenly;
}
</style>
