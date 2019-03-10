<template>
    <div class="card">
        <div class="card-header">{{ title }}</div>
        <div class="card-body">{{ body }}</div>
        <div class="card-footer">{{ footer }}</div>
    </div>
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                title: 'About Page',
                body: 'I try hard to learn Vue with laravel.',
                footer: '®'
            }
        }
    }
</script>

<style scoped>

</style>
