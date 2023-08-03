<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
      <div class="column is-one-quarter">
          <!-- Escutando o evento "aoTemaAlterado" que foi emitido pelo componente filho (BarraLateral)-->
          <barra-lateral @aoTemaAlterado="trocarTema"/>
      </div>
      <div class="column is-three-quarter conteudo">
        <NotificacoesVue />
         <!-- AQUI VAI A VIEW CORRESPONDENTE -->
         <router-view></router-view>
      </div>  
      
  </main>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import NotificacoesVue from './components/Notificacoes.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    NotificacoesVue
},
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  methods: {
    trocarTema (modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },
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

