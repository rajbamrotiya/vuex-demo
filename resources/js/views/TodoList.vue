<template>
    <div class="card" v-bind:class="{ 'ajax-loader': is_loading }">
        <loading :active.sync="is_loading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="false"></loading>
        <div class="card-header"> Todo Lists</div>
        <todo-items :todos="todos" v-on:del-todo="deleteTodo"></todo-items>
        <todo-add v-on:add-todo="addTodo"></todo-add>
    </div>
</template>

<script>
    import TodoItems from "../components/TodoItems";
    import TodoAdd from "../components/TodoAdd";
    import {mapState, mapMutations} from 'vuex';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    
    export default {
        name: "TodoList",
        components: {TodoAdd, TodoItems, Loading},
        data() {
            return {
                //is_loading: false,
            }
        },
        methods: {
            ...mapMutations([
                'ADD_TODO',
                'DELETE_TODO',
                'INIT_TODOS'
            ]),
            deleteTodo(id) {
                this.DELETE_TODO(id)
            },
            addTodo(newTodo) {
                this.ADD_TODO(newTodo);
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        },
        created() {
            this.INIT_TODOS();
        },
        computed: {
            ...mapState([
                'todos',
                'is_loading'
            ])
        }
    }
</script>

<style scoped>

</style>
