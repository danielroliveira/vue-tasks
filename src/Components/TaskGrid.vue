<template>
    <div class="task-grid">
        <template v-if="tarefas.length">
            <div v-for="tarefa in tarefas" :key="tarefa.texto" class="task-item">
                <task :tarefa="tarefa" @deleteTarefa="deleteTarefa($event)" ></task>
            </div>
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
    
</template>

<script>
import task from './Task.vue'
import barramento from '@/barramento'

export default {
    components: { task },
    data() {
        return { tarefas: [] }
    },
    methods: {
        deleteTarefa(e){
            const i = this.tarefas.findIndex(t => t == e)
            this.tarefas.splice(i, 1)
            this.updateProgress()
        },
        updateProgress(){
            var qTotal = this.tarefas.length
            var qConcluidas = this.tarefas.filter(t => t.concluida == true).length
            barramento.updateProgress(qTotal, qConcluidas)
        }
    },
    watch: {
        tarefas: {
            deep: true,
            handler(){
                localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
            }
        }
    },
    created(){

        barramento.onAddTask(novaTarefa => {
            const j = this.tarefas.findIndex(t => t.texto == novaTarefa.texto)
            if (j === -1){
                this.tarefas.unshift(novaTarefa)
                this.updateProgress()
            }
        })

        barramento.onTarefaConcluida(tarefa => {
            this.updateProgress()
        })

        const json = localStorage.getItem('tarefas')
        const array = JSON.parse(json)
        this.tarefas = Array.isArray(array) ? array : []
    }
}
</script>

<style>
.task-grid {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

}

.task-item {
    margin: 5px 5px;
}

.no-task {
    color: #AAA;
    font-size: 1.7rem;
}

</style>
