import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [],
        is_loading: false
    },
    mutations: {
        ADD_TODO: (state, newTodo) => {
            state.is_loading = true;
            const {title, completed} = newTodo;
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed
            }).then(res => {
                state.is_loading = false;

                //s.todos = [...this.todos, res.data];
                state.todos.push(res.data);
            }).catch(err => console.log(err));
        },
        INIT_TODOS(state) {
            if (state.todos.length === 0) {
                state.is_loading = true;
                axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                    .then((res) => {
                        state.is_loading = false;
                        state.todos = res.data;
                    })
                    .catch(err => console.log(err));
            }
        },
        DELETE_TODO(state, id) {
            state.is_loading = true;
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(res => {
                    state.is_loading = false;
                    state.todos = state.todos.filter(todo => todo.id !== id);
                })
                .catch(err => console.log(err));
        }
    },
    getters: {
        countTodos(state) {
            return state.todos.length;
        }
    },
    actions: {},
});
