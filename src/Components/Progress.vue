<template>
    <div class="barra-progresso">
        <span class="progresso-text"> {{ progress + '%' }} </span>
        <div class="progresso" :style="{width: progress + '%'}" ></div>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    data() {
        return {
            progress: 0
        }
    },
    created(){
        barramento.onUpdateProgress((nTotal, nConcluidas) => {
            //console.log(nTotal, nConcluidas)
            if(nTotal == 0 ||  nConcluidas == 0) {
                this.progress = 0
            } else {
                this.progress = Math.round((nConcluidas / nTotal) * 100)
            }
        })
    }
}
</script>

<style>
    .barra-progresso {
        position: relative;
        width: 80%;
        border: 1px solid #FFF;
        color: #FFF;
        border-radius: 8px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progresso {
        position: absolute;
        border-radius: 8px;
        height: 100%;
        background-color: #4CAF50;
        align-self: flex-start;
    }

    .progresso-text {
        z-index: 1;
        font-size: 1.5rem;
    }
</style>
