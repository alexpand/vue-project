<template>
    <div class="pagination--container">
        <TeamButton class="pagination--button" :title="buttonTitle.prevButton" :method="prevPage" />
        <span class="pagination--number">{{currentPage}}</span>
        <TeamButton class="pagination--button" :title="buttonTitle.nextButton" :method="nextPage" />
    </div>
</template>

<script>

import TeamButton from '@/components/TeamButton.vue'

    export default {
        name: 'pagination',
        props: ['prevPage', 'nextPage', 'currentPage'],

        components: {
            TeamButton
        },

        data(){
            return {
                buttonTitle: {
                    nextButton: 'Next Page',
                    prevButton: 'Prev Page'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.pagination--container {
    display: flex;
    align-items: center;
}

.pagination--button {
    width: 20%;
}

.pagination--number {
    font-size: 2em;
    color: white;
}

</style>