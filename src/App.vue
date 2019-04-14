<template>
	<div id="app">
		<h1>Tarefas</h1>
		<barra-progresso></barra-progresso>
		<new-task></new-task>
		<task-grid></task-grid>
	</div>
</template>

<script>
import barraProgresso from './Components/Progress.vue'
import newTask from './Components/NewTask.vue'
import taskGrid from './Components/TaskGrid.vue'

export default {
	components: {
		barraProgresso, newTask, taskGrid
	}
}
</script>

<style>
	body {
		margin: 0;
		padding: 0;
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
