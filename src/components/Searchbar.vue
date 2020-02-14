<template>
    <div class="searchbar">
     <input :type="type" :placeholder="placeholder" :value="vmodel" @input="updateInput($event.target.value)" >
    </div>
</template>

<script>
    export default {
        name: 'searchbar',
        props: ['type', 'placeholder', 'vmodel'],

        methods: {
            updateInput(vmodel){
                this.$emit('input', vmodel)
            }
        }
    }

</script>

<style lang="scss" scoped>

.searchbar {
    margin: 2em auto;
    input {
        font-size: 1.2em;
        @media(min-width: 768px){
        width: 70%
    }
    }

    
}

</style>