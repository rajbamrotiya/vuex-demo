<template>
    <div class="card-body">
        <div class="row justify-content-center" v-bind:key="todo.id" v-for="todo in todos" v-bind:class="{'is-complete':todo.completed}">
            <div class="form-group form-check col-10">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" v-model="todo.completed">
                    {{ todo.title }}
                </label>
                <button class="btn badge-light text-danger float-right" @click="$emit('del-todo', todo.id)">&times;</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        name: "TodoItems"
    }
</script>

<style scoped>
    .is-complete label{
        text-decoration: line-through;
        color: red;
    }
</style>
