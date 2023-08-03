import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";
import FormularioVueProj from "@/views/Projetos/Formulario.vue";
import ListaVue from "@/views/Projetos/Lista.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    component: Projetos,
    children: [
      {
        path: "",
        name: "Projetos",
        component: ListaVue,
      },
      {
        path: "novo",
        name: "Novo Projeto",
        component: FormularioVueProj,
      },
      {
        path: ":id",
        name: "Editar Projeto",
        component: FormularioVueProj,
        props: true,
      },
    ],
  },
];
const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
