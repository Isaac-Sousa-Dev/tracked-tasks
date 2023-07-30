<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
      <div class="column is-one-quarter">
          <!-- Escutando o evento "aoTemaAlterado" que foi emitido pelo componente filho (BarraLateral)-->
          <barra-lateral @aoTemaAlterado="trocarTema"/>
      </div>
      <div class="column is-three-quarter conteudo">
          <!-- Ouvindo o evento "aoSalvarTarefa" que foi emitido pelo FormularioVue-->
          <FormularioVue @aoSalvarTarefa="salvarTarefa"/>
          <div class="lista">
            
            <TarefaVue v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
            <BoxVue v-if="listaEstaVazia">
              Você não está muito produtivo hoje :(
            </BoxVue>
          </div>
          
      </div>  
      
  </main>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioVue from './components/Formulario.vue';
import TarefaVue from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefas'
import BoxVue from './components/Box.vue';


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioVue,
    TarefaVue,
    BoxVue
},
  data() {
    return {
      // lista de tarefas que esta vindo da interface ITarefa
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    // Adicionando na lista de tarefas
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarTema (modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }
});
</script>

<style>
.lista {
  padding: 1.5rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo{
  background-color: var(--bg-primario);
}
</style>

