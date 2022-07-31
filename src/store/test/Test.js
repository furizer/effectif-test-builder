import Model from '@/core/Model'

export default class Test extends Model {
    static entity = 'tests'
    static routes = {
        fetch: ['builderIndex', 'tests'],
    }
    static fields () {
        return {
            id: this.number(0),
            name: this.string(''),
            text: this.string(''),
            
            questions: this.attr({
                id: this.number(0),
                questionText: this.string(''),
                trueAnswer: this.number(0),
                questionPosition: this.number(0),
                answers: this.attr({
                    answersText: this.string('')
                })
            }),

        
         
        }
    }


}