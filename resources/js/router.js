import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue'
import About from "./views/About";
import TodoList from "./views/TodoList";

Vue.use(VueRouter);

export default new VueRouter({
    /*mode: 'history',*/
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/todo_list',
            name: 'todo_list',
            component: TodoList
        }
    ]
});
