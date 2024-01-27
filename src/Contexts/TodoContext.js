import { useContext } from "react";
import { createContext } from "react";



//this is how we create the context
export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],

    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

})




//this is how we create the provider within which we wrap the content .....

 const  TodoProvider=TodoContext.Provider
 export default TodoProvider




// Below is hook to use the context
export const useTodo=()=>{
    return useContext(TodoContext)
}