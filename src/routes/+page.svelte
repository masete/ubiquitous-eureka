<script>
	import { todos } from '../store/todoStore.js';
  import Todo from '../components/Todo.svelte';
  import TodoForm from '../components/TodoForm.svelte';
</script>

<main>
  <h1 class="text-2xl text-center text-bold text-gray-800 md:text-3xl">My ToDo </h1>
  <TodoForm/>
  {#each $todos as todo}
    <Todo todo={todo} Index={todo.id} />
  {/each}
</main>