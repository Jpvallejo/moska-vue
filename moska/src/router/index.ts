import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Transactions from "../views/Transactions.vue";
import Accounts from "../views/Accounts.vue";
import Dashboard from "../views/Dashboard.vue";
import CreditCards from "../views/CreditCards.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/credit-cards",
    name: "Credit Cards",
    component: CreditCards
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
