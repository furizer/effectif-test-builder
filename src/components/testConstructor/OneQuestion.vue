<template>
    <div class="test-constructor__question">

        <div class="question__header">

            <span class="question-mark">{{ question.questionPosition }}</span>
            

            <input class="question-input" 
                v-model="newQuestion.questionText" 
                placeholder="Вопрос" 
                nameForCheck="questionText"

                @change="trueAnswerAndSave" 
            >
                
 

            <div class="question__controller">

                <div class="btn add-answer" @click="addAnswer"> Добавить ответ </div>

                <div :class=" { 'btn show-btn' : true, active : answerList }" @click="showAnswerList"  :disabled="answerListButton" > Ответы </div>

                <div class="btn delete-btn" @click="deleteQuestion"> Удалить </div>


            </div>

        </div>

        <div class="answers__container" v-if="answerList">

            <label 
                v-for="(answer, index) in newQuestion.answers" 
            
                @change="trueAnswerAndSave" 
                
                :class="trueAnswerActive(index)" 
                :key="answer.id" 
                :name=" 'answer' + question.id "
            >
                <input 
                    type="radio" 
                    class="answer-checkbox-hidden" 
                    nameForCheck="trueAnswer"

                    :name=" 'answer' + question.id " 
                    :radioId="index"
                    :checked="checked(index)"
                >
                <textarea class="answer__text"  v-model="answer.answerText" nameForCheck="answerText" ></textarea>

                <div class="answer__footer">
                    <div class="btn end-create-btn" > Верный ответ</div>
                    <div class="btn delete-btn" @click="deleteAnswer(answer.id, index)"> Удалить ответ</div>
                </div>

                <div class="answer__mark">Ответ № {{ index + 1 }}</div>                



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
                    
                ]                    
            },
            answerList : false,
            answerListButton : false
        }
    },

    methods: {
        addAnswer() {

            let answer = Object.assign({}, this.newQuestion.answers[0])
            answer.id = this.counter()

            answer.answerText = ''
            this.newQuestion.answers.push(answer)
            if(this.answerList == false){
                this.answerList = true
            }        
        },
        deleteAnswer(answerId, index) {
  
            this.newQuestion.answers = this.newQuestion.answers.filter((item) => item.id !== answerId)
            
            let arrayLength = this.newQuestion.answers.length
            if(arrayLength > 1 && answerId - 1 < arrayLength) {

                this.newQuestion.answers[arrayLength - 1].id = answerId
            }

            if(index < this.newQuestion.trueAnswer){
                let i = this.newQuestion.trueAnswer - 1
                this.newQuestion.trueAnswer = i
            }
        },        

        checked(index) {
            if(index == this.newQuestion.trueAnswer) return true
        },

        trueAnswerAndSave(e) {
            let index = e.target.getAttribute('radioid')
            if(index != null && index != undefined){
                this.newQuestion.trueAnswer = index
            }
            this.$emit('saveQuestion', this.newQuestion)
        },


        trueAnswerActive(index) {
            let active = ''
            if(index == this.newQuestion.trueAnswer){
                active = 'active'
            }
            return `answer-label ${active}` 
        },

        showAnswerList() {
            if(this.answerList === false){
                this.answerList = true
            }else {
                this.answerList = false
            }

            
        },

        counter() {
            let count = 0;
            this.counter = function() {
                return count++;
            };
            return count
        },


        deleteQuestion() {
            this.$emit('deleteQuestion', this.newQuestion)
        },        
    },


    updated() {
        if(this.newQuestion.answers.length < 1) {
            this.answerList = false
            this.answerListButton = false
        }else{
            this.answerListButton = true
        }
    },


    created() {
        // инициализация счетчика айдишиников
        this.counter() 
    },

}
</script>