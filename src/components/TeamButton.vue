<template>
    <button class="button" @click="method(value)">{{title}}</button>
</template>

<script>
    export default {
        name: 'teamButton',
        props: ['method', 'title', 'value']
            
    }
</script>

<style lang="scss" scoped>

@import '../styles/styles';

.button {
    width: 60%;
    margin: 1em auto;
    padding: .5em;
    font-size: 1.3em;
    color: white;
    background-color: $dark-back;
    border: 1px solid $font-color;
    cursor: pointer;

     &:hover {
        color: $font-color;
        background-color: white;
    }
    &:active{
        color: $dark-back;
        background-color: $font-color;
    }
}

</style>