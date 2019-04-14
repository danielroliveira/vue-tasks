<template>
    <div class="tarefa-titulo">
        <div class="new-tarefa">
            <input class="input-tarefa" id="inputTarefa"
                @keyup="novaTarefa.texto = $event.target.value"
                @keydown.enter="addTask($event.target.value)"
                type="text" 
                placeholder="Nova Tarefa?">
        </div>
        <button class="btn-add" @click="addTask(novaTarefa.texto)">+</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    data(){
        return {
            novaTarefa: { texto: '', concluida: false }
        }
    },
    methods: {
        clearInput(){
            document.getElementById('inputTarefa').value = ''
            this.novaTarefa = { texto: '', concluida: false }
        },
        addTask(e){
            if (!e || e === '') {
                alert('Insira um valor...')
                return
            }
            barramento.addTask(this.novaTarefa)
            this.clearInput()
        }
    }
}
</script>

<style scoped>
    .tarefa-titulo {
        display: flex;
        margin-top: 15px;
        width: 30%;
        height: 30px;
        border: 1px solid white;
        border-radius: 5px;
    }

    .new-tarefa {
        width: 90%;
    }

    .input-tarefa {
        width: 100%;
        font-size: 1.3rem;
        color: white;
        background-color: transparent;
        border-color: transparent;
    }

    .input-tarefa:focus {outline: 0;}

    .btn-add {
        width: 10%;
        background-color: #7b7bb6f5;
        border-radius: 0 5px 5px 0;
        border-color: transparent;
        color: white;
        font-size: 1.3rem;
    }

    .btn-add:focus {outline:0;}
    .btn-add:hover {cursor: pointer;}

</style>
