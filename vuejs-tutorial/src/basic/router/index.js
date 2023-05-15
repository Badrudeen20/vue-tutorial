import { createRouter, createWebHistory } from "vue-router";
//import Home from "../option/view/Home";
//import About from "../option/view/About";

/* composition */
import Home from "../composition/view/Home"
// import About from "../composition/view/About"
//  import Product from "../composition/view/Product"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../composition/view/About")
   // component: () => import("../option/view/About")
  },
  {
    path: "/directive",
    name: "Directive",
    component: () => import("../composition/view/Directive")
   // component: () => import("../option/view/About")
  },
  {
    path: "/project/:task",
    name: "Project",
    component: () => import("../composition/view/About")
   // component: () => import("../option/view/components/Todos")
  },
  {
    path: "/create",
    name: "Form",
    //component: () => import("../composition/view/About")
   // component: () => import("../option/view/components/Create")
  },
  {
    path: "/product",
    name: "Product",
    //component: () => import("../composition/view/Product")
  },
  {
    path: "/mixin",
    name: "Mixin",
    //component: () => import("../option/view/components/Mixin")
  },
  {
    path: "/param/:id",
    name: "Param",
    component: () => import("../option/view/components/Param")
  },  
  {
    path: "/query",
    name: "Query",
    component: () => import("../option/view/components/Param")
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;