<template>
<div class="main--login">
    <div v-if="!isSignup" class="login">
        <h3 class="login--title">Login</h3>
        <label class="login--user" for="user">User or Email</label>
        <input class="login--input" name="user" type="text" placeholder="User or Email">
        <label class="login--password" for="password">Password</label>
        <input class="login--input" name="password" type="password" placeholder="Password">
        <p class="login--info">Don't you have an account yet? <span @click="isLogin" class="login--signup"> Register here!</span></p>
        <TeamButton :title="buttonTitles.loginButton" :method="submit" />
    </div>

    <div v-if="isSignup" class="login">
        <h3 class="login--title">Signup</h3>
        <label class="login--user" for="user">User or Email</label>
        <input class="login--input" name="user" type="text" placeholder="User or Email">
        <label class="login--password" for="password">Password</label>
        <input class="login--input" name="password" type="password" placeholder="Password">
        <TeamButton :title="buttonTitles.signupButton" :method="submit" />
        <span class="login--signup" @click="isLogin">Back to login</span>
    </div>
</div>
</template>

<script>

import TeamButton from '@/components/TeamButton.vue'

    export default {
        name: 'login',

        components: {
            TeamButton
        },

        methods: {
            isLogin(){
                this.isSignup = !this.isSignup
            },

            submit(){
                return null
            }
        },

        data(){
            return {
                isSignup: false,
                buttonTitles: {
                    loginButton: 'Login',
                    signupButton: 'Register'
                }

            }
        }
    }
</script>

<style lang="scss" scoped>

@import '../styles/styles';

.main--login {
    margin: 0 auto;

    @media(min-width: 768px){
       width: 50%
   }
}

.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em 1em;
    padding: 1em 0;
    font-size: 1.3em;
    color: $font-color;
    background-color: $dark-back;
    border: $border-selected;

    @media(min-width: 768px){
       font-size: 1.5em
   }
}

.login--input {
    font-size: 1em;
    margin: .5em;

    @media(min-width: 768px){
       font-size: 1em
   }
}

.login--info {
    margin: .5em .5em;
}

//Login items margin
.login--title, .login--user, .login--password {
    margin: 1em;
}

//Register link
.login--signup {
    color: white;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
        color: cadetblue;
    }
}

</style>