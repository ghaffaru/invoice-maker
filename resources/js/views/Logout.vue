<template>
    <div>

    </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.dispatch('logoutUser');
            this.$router.push('/');
        }
    }
</script>       