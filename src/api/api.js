import mock from "./mock"


/** 
 * Функция добавления/изменения записи из мока.
 * @param string имя сущности мока
 * @param object данные записи (если есть id, то будет изменение)
 * @return object запись
 */
function save(entityName, data) {
    if (!data) throw Error('400. Bad Request (without args)')
    let entity = null
    if (data.id) {
        entity = mock[entityName].find(_entity => _entity.id === data.id)
        if (!entity) throw Error(entityName + ' not found')
        for (let key of Object.keys(data)) {
            entity[key] = data[key]
        }
    } else {
        data.id = mock[entityName].length + 1
        mock[entityName].push(data)
        entity = data
    }
    return entity
}

const delay = 500

const api = {

    builderIndex: {
        tests (args, cb) {
            setTimeout(() => cb(mock.tests), delay)
        }, 
     

        
        save(args, cb) {
            setTimeout(() => cb(save('tests', args)), delay)
        },

    },
}

export default api;
