<template>
    <div class="card">
        <article class="card-group-item">
            <header class="card-header"><h6 class="title">{{ title }}</h6></header>
            <div class="filter-content">
                <div class="list-group list-group-flush">
                    <router-link :to="{ name: 'home' }" class="list-group-item">Home</router-link>
                    <router-link :to="{ name: 'todo_list' }" class="list-group-item">Todo List <span class="float-right badge">{{ countTodos }}</span></router-link>
                    <router-link :to="{ name: 'about' }" class="list-group-item">About</router-link>
                </div>  <!-- list-group .// -->
            </div>
        </article> <!-- card-group-item.// -->
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "SideBar",
        data: () => {
            return {
                title: 'Navigation'
            }
        },
        computed: {
            ...mapGetters([
                'countTodos'
            ])
        }
    }
</script>

<style scoped>

</style>
