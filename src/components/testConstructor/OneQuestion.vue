<template>
    <div class="test-constructor__question">

        <div class="question__header">

            <input class="question-input" v-model="newQuestion.questionText" placeholder="Вопрос" @change="saveQuestion">

            <div class="question__controller">

                <div class="btn add-answer" @click="addAnswer"> Добавить ответ </div>

                <div class="btn save-question" @click="showAnswerList"> Показать </div>

            </div>

        </div>

        <div class="answers__container" v-if="answerList">

            <label class="answer-label"  for="answer" v-for="answer in newQuestion.answers" :key="answer.id"  >
                
                <input type="radio" name="answer" @input="trueAnswer">

                <input class="answer__text"  v-model="answer.answerText" @change="saveQuestion">
            </label>
        
        </div>

    </div>
</template>

<script>
export default {
    props : {
        question : { type:Object }
    },


    data() {
        return {
            newQuestion: {
                'id' : this.question.id,
                'questionText' : '',
                'trueAnswer' : null,
                'answers' : [ 
                    {
                        'answerText' : '',
                    },  
                ]                    
            },

            answerList : true,
        }
    },

    methods: {
        addAnswer() {
            let answer = Object.assign({}, this.question.answers[0])
            console.log(this.newQuestion.answers);
            this.newQuestion.answers.push(answer)

        },

        trueAnswer() {
            let labels = document.querySelectorAll('.answer-label')
            labels.forEach( (element, index) => {
                element = element.querySelector('input[type="radio"]')
                if(element.checked){
                    this.newQuestion.trueAnswer = index
                    return
                }
            });
            this.saveQuestion()
        },

        showAnswerList() {
            if(this.answerList === false){
                this.answerList = true
            }else {
                this.answerList = false
            }
            
        },

        saveQuestion() {
            this.$emit('saveQuestion', this.newQuestion)
        }
    },

}
</script>