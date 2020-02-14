<template>
    <div class="spinner"></div>
</template>

<script>
    export default {
        name: 'spinner'
    }
</script>

<style lang="scss" scoped>

@import '../styles/styles';

.spinner {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 8px solid lightgray; 
    border-top: 8px solid $dark-back; 
    border-radius: 50%;
    animation: spin .7s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

</style>