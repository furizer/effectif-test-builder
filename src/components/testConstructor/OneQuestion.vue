<template>
    <div class="test-constructor__question">

        <div class="question__header">

            <span class="question-mark">{{ question.questionPosition }}</span>
            

            <input class="question-input" 
                v-model="newQuestion.questionText" 
                placeholder="Вопрос" 
                @change="trueAnswerAndSave" 
                nameForCheck="questionText">

 

            <div class="question__controller">

                <div class="btn add-answer" @click="addAnswer"> Добавить ответ </div>

                <div :class=" { 'btn show-question' : true, active : answerList }" @click="showAnswerList"> Ответы </div>

                <div class="btn delete-question" @click="deleteQuestion"> Удалить </div>


            </div>

        </div>

        <div class="answers__container" v-if="answerList">

            <label class="answer-label" 
                v-for="(answer, index) in newQuestion.answers" 
                :key="answer.id" 
                @change="trueAnswerAndSave" 
                :name=" 'answer' + question.id ">

                <div class="answer-label-header">
                    <div class="answer-label-title">Верный ответ</div>
                    
                    <input 
                        type="radio" 
                        :name=" 'answer' + question.id " 
                        class="answer-checkbox-hidden" 
                        :radioId="index"
                        nameForCheck="trueAnswer"
                    >

                    <div class="answer-checkbox">
                        
                    </div>

                </div>
                <textarea class="answer__text"  v-model="answer.answerText" nameForCheck="answerText"></textarea>

                <div class="btn delete-question" @click="deleteAnswer(answer.id)"> Удалить ответ</div>


            </label>
        
        </div>

    </div>
</template>

<script>
export default {
    props : {
        question : { type:Object },

    },

    data() {
        return {
            newQuestion: {
                'id' : this.question.id,
                'questionText' : '',
                'trueAnswer' : null,
                'questionPosition' : this.question.questionPosition,
                'answers' : [ 
                    // {
                    //     'id' : 0,
                    //     'answerText' : '',
                    // },  
                ]                    
            },



            answerList : false,
        }
    },

    methods: {
        addAnswer() {
            let answer = Object.assign({}, this.newQuestion.answers[0])
            answer.id = Date.now()
            answer.answerText = ''
            this.newQuestion.answers.push(answer)

            if(this.answerList == false){
                this.answerList = true
            }
            
        },

        trueAnswerAndSave(e) {
            let index = e.target.getAttribute('radioid')
            if(index != null && index != undefined){
                this.newQuestion.trueAnswer = index
            }
            this.$emit('saveQuestion', this.newQuestion)
        },

        showAnswerList() {
            if(this.answerList === false){
                this.answerList = true
            }else {
                this.answerList = false
            }
            
        },

        deleteAnswer(answerId) {
            console.log(answerId);
            this.newQuestion.answers = this.newQuestion.answers.filter((item) => item.id !== answerId)
           
        },
        deleteQuestion() {
            this.$emit('deleteQuestion', this.newQuestion)
        },        
    },

}
</script>