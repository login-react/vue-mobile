import Vue from "vue";
import Router from "vue-router";
import Header from "@/components/Header.vue";
import Flower from "@/components/Flower.vue";
import newYear from "@/components/newYear.vue";
import MissYour from "@/components/MissYour";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "header",
      component: Header
    },
    {
      path: "/flower",
      name: "flower",
      component: Flower
    },
    {
      path: "/newYear",
      name: "newYear",
      component: newYear
    },
    {
      path: "/miss",
      name: "miss",
      component: MissYour
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("@/views/chat/index.vue")
    }
  ]
});
