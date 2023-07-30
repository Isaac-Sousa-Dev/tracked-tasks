<template>
    <header>
        <h1>
            <img src="../assets/tracker-logo.jpg" alt="" style="border-radius: 10px;">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoDoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    // Atravé da emissão de eventos um componente filho se comunica com um componente pai
    emits: ['aoTemaAlterado'],

    // Estado Local. é criado através do método chamado data()
    data() {
        return {
            // Nesse componente esse estado está controlando o texto do botão
            modoEscuroAtivo: false
        }
    },
    // Quando o modo estiver ativo temos que alterar o nome do botão, para isso criamos uma propriedade computada
    computed: {
        textoDoBotao (){
            if (this.modoEscuroAtivo) {
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },
    methods: {

        // método que está sendo chamado quando o usuário clica no botão
        alterarTema() {
            // Pegando o estado do componente e invertendo ele
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            // Quando alguém clicar em alterarTema, vai emitir esse evento para que o componente pai possa escutar
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
        }
    }
})
</script>

<style scoped>
header {
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    text-align: center;
}
@media only screen and (max-width: 768px){
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>