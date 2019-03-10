<template>
    <div class="card-footer">
        <form class="" @submit="mySubmit">
            <div class="row">
                <input type="text" class="form-control my_text" v-model="title" placeholder="Add todo title and enter">
                <!--<button type="submit" class="btn btn-primary col-4">Add</button>-->
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "TodoAdd",
        data() {
            return {
                title: ''
            };
        },
        methods: {
            mySubmit(e) {
                e.preventDefault();
                const title = this.title;
                const completed = false;
                let newTodo = {
                    title,
                    completed
                };
                this.$emit('add-todo', newTodo);
                this.title = '';
            },
        }
    }
</script>

<style scoped>

</style>
