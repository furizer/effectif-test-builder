import Model from '@/core/Model'

export default class Test extends Model {
    static entity = 'tests'
    static routes = {
        fetch: ['builderIndex', 'tests']
    }
    static fields () {
        return {
            id: this.number(0),
            name: this.string(''),

         
        }
    }
}