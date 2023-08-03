<template>
    <header>
        <div class="portifolio">
            <div class="">
                <p>Developer: Isaac Sousa</p>
            </div>
             <div class="logos">
                <a href="https://www.linkedin.com/in/isaac-sousa-b45689233/" target="_blank" class="link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://github.com/Isaac-Sousa-Dev" target="_blank" class="link">
                    <ion-icon name="logo-github" style="text-decoration: none;"></ion-icon>
                </a>
                <a href="https://www.instagram.com/_isaacsousa0/" target="_blank" class="link">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>       
             </div>
        </div>
        <h1>
            <img src="../assets/tracker-logo.jpg" alt="" style="border-radius: 10px;">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoDoBotao }}
        </button>   
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/" class="link">
                        <ion-icon name="list-outline"></ion-icon>
                        tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link"> 
                        <ion-icon name="git-merge-sharp"></ion-icon>
                        Projetos
                    </router-link>
                </li>
            </ul>
        </nav> 
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
.portifolio {
    margin-top: 1%;
    display: flex;
    flex-direction: column;
    margin-bottom: 3%;
    color: antiquewhite;
}
.logos {
    color: aliceblue;
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-evenly;
}
.link{
    text-decoration: none;
    color: aliceblue;
}
nav{
    text-align: left;
    justify-content: left;
}
</style>