<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto"> 
                        <option value="Selecione">--Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">{{ projeto.nome }}</option>
                    </select>
                </div>
            </div>
            <div class="column">
                <!-- Ouvindo o evento que foi emitido no TemporizadorVue e chamando o método finalizarTarefa-->
                <TemporizadorVue @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TemporizadorVue from './Temporizador.vue';
import { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
    name: 'FormularioVue',
    // Emitindo um evento
    emits: ['aoSalvarTarefa'],
    components: {
        TemporizadorVue
    },
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) : void {
            // Quando alguém finalizar uma o nosso formulário vai emitir o evento "aoSalvarTarefa" 
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''
        }
    },
    // Preparando a montagem do nosso componente
    setup() {
        // Temos que importar o "useStore" e passa a chave de acesso
        const store = useStore(key)
        // Retornando a lista de projetos. tudo que retornamos no setup fica disponível para nosso componente
        return {
            // As lista de projetos é dinâmica, então temos que encapsular os projetos dentro de uma função do Vue chamada "computed" que representa nossas propriedades computadas.
            // Esse cara recebe por parâmetro uma função e essa função vai retornar o que precisamos
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>
<style>
.formulario{
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>