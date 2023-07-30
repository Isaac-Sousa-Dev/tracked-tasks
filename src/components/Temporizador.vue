<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroVue :tempoEmSegundos="tempoEmSegundos"/>
        <button class="button" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <ion-icon name="play-outline"></ion-icon>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <ion-icon name="stop-circle-outline"></ion-icon>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CronometroVue from './Cronometro.vue';

export default defineComponent({
    name: 'TemporizadorVue',
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },
    methods: {
        iniciar() {
            // começar a contagem
            // 1 seg = 1000 ms
            this.cronometroRodando = true,
            this.cronometro = setInterval(() => { 
                this.tempoEmSegundos += 1
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    },

    components: {
        CronometroVue,
    }
})
</script>