<template>
<div

>
    <div class="passing-test__header">
        <div class="passing-test__question-index">
            {{ index }}
        </div>
        <div class="passing-test__question-text">
            {{ question.questionText }}
        </div>
    </div>
    <!-- @change="answerActive('answer' + question.id, index)"  -->

    <div class="passing-test__footer">
        <label
            v-for="(answer, index) in question.answers"
        
            :name=" 'answer' + question.id " 
            :key="answer.id"
            :class="['passing-test__label', {'active': activeAnswer == index}]"
        
        
            @click="activeAnswer = index"
            @change="saveAnswer(question.id, index)"
            

            
        >
            <div class="passing-test__answer">
                <input 
                    type="radio" 
                    class="passing-test__checkbox"
                    
                    :name=" 'answer' + question.id " 

                >
                <div class="passing-test__answer-text">{{ answer.answerText }}</div>
            </div>


        </label>
    </div>

    
</div>        
</template>

<script>
export default {
    props : {
        question : { type : Object },
        index : { type : Number }
    },
    data() {
        return {
            activeAnswer : null,
            
            userAnswer : {
                questionId : null,
                answerIndex : null,
            }
        }
    },

    methods: {
        saveAnswer(id, index) {
            this.userAnswer.questionId = id
            this.userAnswer.answerIndex = index
            this.$emit('saveAnswer', this.userAnswer)
        }
    },

 
}
</script>