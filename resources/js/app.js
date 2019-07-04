/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require("./bootstrap");
window.Vue = require("vue");

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

import Home from "./components/HomeComponent.vue";
import Form from "./components/FormComponent.vue";
import Edit from "./components/EditComponent.vue";
import Article from "./components/ArticleComponent.vue";

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home
    },
    {
        path: "/form",
        name: "form",
        component: Form
    },
    {
        path: "/edit",
        name: "edit",
        component: Edit
    },
    {
        path: "/article",
        name: "article",
        component: Article
    }
];

const router = new VueRouter({
    mode: "history",
    routes: routes // short for `routes: routes`
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router
}).$mount("#app");
