<template>
    <section class="">
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <ion-icon name="add-outline"></ion-icon>
            </span>
            <span>Novo Projeto</span>
        </router-link>
        <table class="table is-fullwidth mt-2">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Projeto</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <ion-icon name="create-outline"></ion-icon>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <ion-icon name="trash-outline"></ion-icon>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    
</template>


<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { EXCLUIR_PROJETO } from "@/store/tipo-mutacoes";

export default defineComponent({
    name: 'ListaVue',
    methods: {
        excluir(id: string){
            this.store.commit(EXCLUIR_PROJETO, id)
        }
    },
    setup () {
        const store = useStore()
        return {
            projetos: computed(() => store.state.projetos),
            store
        }
    }
})
</script>

