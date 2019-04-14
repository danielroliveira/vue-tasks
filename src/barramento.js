import Vue from 'vue'

export default new Vue({    
    methods: {
        addTask(novaTarefa){
            this.$emit('addTask', novaTarefa)
        },
        onAddTask(callback){
            this.$on('addTask', callback)
        },
        tarefaConcluida(tarefa){
            this.$emit('tarefaConcluida', tarefa)
        },
        onTarefaConcluida(callback){
            this.$on('tarefaConcluida', callback)
        },
        updateProgress(qTotal, qConcluidas){
            this.$emit('updateProgress', qTotal, qConcluidas)
        },
        onUpdateProgress(callback){
            this.$on('updateProgress', callback)
        }
    }
}
)