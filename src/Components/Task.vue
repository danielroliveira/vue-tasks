<template>
    <div class="tarefa" :class="{tarefaConcluida : tarefa.concluida}">
        <div class="tarefa-texto" @click="tarefaConcluida()">
            <span :class="{tarefaConcluidaTexto : tarefa.concluida}">{{ tarefa.texto }}</span>
        </div>
        <span class="btn-delete-tarefa" 
            :class="{btnDeleteTarefaConcluida : tarefa.concluida}"
            @click="deleteTarefa()">x</span>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: {
        tarefa: { texto : String, concluida: Boolean }
    },
    methods: {
        deleteTarefa(){
            this.$emit('deleteTarefa', this.tarefa.texto)
        },
        tarefaConcluida(){
            this.tarefa.concluida = !this.tarefa.concluida
            barramento.tarefaConcluida(this.tarefa)
        }
    }
}
</script>

<style scoped>
.tarefa {
    position: relative;
    width: 150px;
    height: 80px;
    border-left: 10px solid brown ;
    border-radius: 5px;
    background-color: rgb(175, 115, 115);
}

.tarefaConcluida {
    background-color: rgb(115, 175, 123);
    border-left: 10px solid rgb(12, 119, 75) ;
}

.tarefa-texto {
    position: relative;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.2em;
}

.tarefaConcluidaTexto {
    text-decoration: line-through;
}

.tarefa-texto span {
    display: block;
    width: 100%;
    text-align: center;
    align-items: center;
}

.btn-delete-tarefa {
    position: absolute;
    left: 125px;
    top: 5px;
    font-size: 0.9rem;
    font-weight: 600;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    background-color: #B73229;
}

.btnDeleteTarefaConcluida {
    background-color: rgb(12, 119, 75);
}

.btn-delete-tarefa:hover {cursor: pointer;}

</style>
