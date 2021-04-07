<template>
    <div class="app">
        <Navbar />
        <router-view></router-view>
    </div>
</template>

<script>
import Register from './views/Register';
import Navbar from './components/Navbar';

    export default {
        name: 'app',
        components: {
            Register,
            Navbar
        }
    }

</script>
