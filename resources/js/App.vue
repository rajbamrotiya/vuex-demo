<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <side-bar></side-bar>
        </div>
        <!--<content-section :todo_lists="todo_lists"></content-section>-->
        <div class="col-md-8">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
