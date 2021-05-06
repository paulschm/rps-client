<template>
    <div>
        <h1>Screen 2</h1>
        <send-message screen="2" />
        <router-link to="/screen3">Screen3</router-link>
    </div>
</template>

<script>
import SendMessage from '../components/SendMessage.vue'
export default {
    components: { SendMessage }
}
</script>
