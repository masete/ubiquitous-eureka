import { writable } from "svelte/store";

export const todos = writable([]);

// @ts-ignore
export const addTodo = (text) => {
    // @ts-ignore
    todos.update((cur) => {
        const newTodos = [...cur, {text, completed: false, id: Date.now()}];
        return newTodos;
    })
}

// @ts-ignore
export const deleteTodo = (id) => {
    // @ts-ignore
    todos.update(todos=>todos.filter(todos => todos.id !== id))
}

export const toggleTodoCompleted = () =>{
    // @ts-ignore
    todos.update(todos => {
        let index = -1
        for(let i=0; i < todos.length; i++ ){
            // @ts-ignore
            if(todos[i].id == id){
                index =i;
                break
            }
        }
        if(index !==){
            todos[index].completed =!todos[index].completed;
        }
        return todos
    })
}