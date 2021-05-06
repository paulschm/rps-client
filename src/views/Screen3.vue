<template>
    <div>
        <h1>Screen 3</h1>
        <send-message screen="3"/>
        <router-link to="/screen1">Screen1</router-link>
    </div>
</template>

<script>
import SendMessage from '../components/SendMessage.vue'
export default {
    components: { SendMessage },
}
</script>
