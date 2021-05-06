<template>
    <div>
        <h1>Screen 1</h1>
        <div>
            <button @click="sendMessage('Hello from screen 1')">Send message</button>
        </div>
        <div>
            {{this.message}}
        </div>
        <router-link to="/screen2">Screen2</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: '----'
        }
    },
    methods: {
        sendMessage(arg) {
            this.$socket.emit('message', arg)
        }
    },
    sockets: {
        serverMessage (arg) {
            this.message = arg
        }
    }
}
</script>
