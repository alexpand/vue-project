<template>
    <div >
        <div v-for="(comment, idx) in comments" :key="idx">
            <p class="comment--text" v-if="comment.teamId === teamId">{{comment.comment}}</p>
        </div>
        <input class="comment--input" maxlength="100" @input="getTheComments($event.target.value)" type="text" ref="comment" name="comment" placeholder="Add a comment">
        <TeamButton class="comment--button" :title="buttonTitles.addComment" :method="addComment" :value="index" />
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'

import TeamButton from '@/components/TeamButton.vue'

    export default {
        name: 'comments',
        props: ['teamId', 'index'],

        components: {
            TeamButton
        },

        computed: {
            ...mapState('comments', ['comments', 'singleComment']),

            isAComment() {
               return this.comments.find( comment => {
                  return  comment.teamId === this.teamId
                })
            }
        },

        methods: {
            ...mapActions('comments', ['getComment', 'getSingleComment']),

            getTheComments(value){
                const commentToSave = {
                    comment: value,
                    teamId: this.teamId
                }
                 this.getSingleComment(commentToSave)
               
            },

            addComment(){
                this.getComment(this.index)
                this.clearInput()
            },

            clearInput(){
                this.$refs.comment.value = ''
            }
        },

        data(){
            return {
                buttonTitles: {
                    addComment: 'Add comment'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

.comment--input {
    margin: 1em;
    width: 60%;
    font-size: 1em;
}

.comment--text {
    margin: 1em;
    white-space: pre-line;
    color: white;
}

.comment--button {
    @media(min-width: 768px){
        font-size: 1.2em;
    }
}

</style>