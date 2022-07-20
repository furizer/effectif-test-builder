import Model from '@/core/Model'

export default class Test extends Model {
    static entity = 'tests'
    static routes = {
        fetch: ['index', 'test']
    }
    static fields () {
        return {
            id: this.number(0),
            text: this.string(''),

         
        }
    }
}