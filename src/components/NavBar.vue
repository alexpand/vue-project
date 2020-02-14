<template>
    <div class="main--nav">
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/favorites">Favorites</router-link>
        <p @click="showLogin" class="nav--login">Log in</p>  
    </div>
    <Login v-if="isLoginActive" />
    </div>
</template>

<script>

import Login from '@/components/Login.vue'

    export default {
        name: 'navbar',
        components: {
            Login
        },

        methods: {
            showLogin(){
                this.isLoginActive = !this.isLoginActive
            }
        },

        data(){
            return {
                isLoginActive: false
            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../styles/styles';

.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    height: 2em;
    font-size: 1.2em;
    border-bottom: .2em solid black;

    a {
        text-decoration: none;
        color: $font-color;

        &:hover {
            color: white;
        }
    }
}

.nav--login {
    margin: 0;
    color: $font-color;
    cursor: pointer;
}



</style>