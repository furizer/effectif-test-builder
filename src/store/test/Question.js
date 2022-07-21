import Model from '@/core/Model'

export default class Question extends Model {
    static entity = 'Question'
    static routes = {
        fetch: ['builderIndex', 'tests'],
    }
    static fields () {
        return {
            id: this.number(0),
            test_id: this.number(0),
            questionText: this.string(''),

            answers: this.attr({
                truthful: this.boolean(),
                answerText: this.string('')
            })
         
        }
    }


}