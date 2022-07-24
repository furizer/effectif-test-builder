<template>
    <div class="test-constructor__question">

        <div class="question__header">

            <span class="question-mark"></span>
            

            <input class="question-input" v-model="newQuestion.questionText" placeholder="Вопрос" @change="trueAnswerAndSave">

            <div class="question__controller">

                <div class="btn add-answer" @click="addAnswer"> Добавить ответ </div>

                <div class="btn save-question" @click="showAnswerList"> Ответы </div>

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

                    <input type="radio" :name=" 'answer' + question.id " class="answer-checkbox-hidden" :radioId="index">

                    <div class="answer-checkbox">
                        <span></span>
                    </div>

                </div>
                <div>
                    <textarea class="answer__text"  v-model="answer.answerText" ></textarea>
                </div>
                <div class="btn delete-question" @click="deleteAnswer"> Удалить ответ</div>

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

            answerList : false,
        }
    },

    methods: {
        addAnswer() {
            let answer = Object.assign({}, this.newQuestion.answers[0])
            
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
            // let labels = document.querySelectorAll('.answer-label')
            // labels.forEach( (element, index) => {
            //     element = element.querySelector('input[type="radio"]')
            //     if(element.checked){
            //         this.newQuestion.trueAnswer = index
            //         this.saveQuestion()
            //         return
            //     }
            // });
            // let container = e.target.parentElement.parentElement.parentElement
            // container = container.querySelectorAll('label')
            // console.log(container);
            // container.forEach(element => {
            //     if(element){
            //         return 1
            //     }
            // });
            // this.$emit('saveQuestion', this.newQuestion)
        },
        

        showAnswerList() {
            if(this.answerList === false){
                this.answerList = true
            }else {
                this.answerList = false
            }
            
        },


        deleteAnswer() {
            return 0
        },

        deleteQuestion() {
            this.$emit('deleteQuestion', this.newQuestion)
        },        

    },

}
</script>