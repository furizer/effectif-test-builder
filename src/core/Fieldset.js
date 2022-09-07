/**
 * Валидатор набора полей.
 * @author Egor Vasyakin egor@evas-php.com
 * @license CC-BY-4.0
 */
import Field from './Field.js'

export default class Fieldset {
    /** @var array поля */
    fields = []
    /** @var object значения полей */
    values = {}
    /** @var object/null ошибки полей */
    errors = null

    /**
     * Конструктор.
     * @param array|null поля
     */
    constructor(fields) {
        if (Array.isArray(fields)) fields.forEach(field => {
            if (!(field instanceof Field)) {
                field = new Field(field)
            }
            this.fields.push(field)
        })
    }

    /**
     * Устновка ошибки поля.
     * @param Field поле
     */
    setFieldError(field) {
        if (!this.errors) this.errors = {}
        this.errors[field.name] = field.error
    }

    /**
     * Универсальная проверка значений полей.
     * @param string функция проверки
     * @param array данные для проверки
     * @param bool|null множественные ошибки
     * @return bool
     */
    _isValid(func, data, multiple = false) {
        this.errors = null
        this.values = []
        for (let field of this.fields) {
            let value = data[field.name]
            this.values[field.name] = value
            try {
                field[func](value)
            } catch (e) {
                this.setFieldError(field)
                throw e
            }
            if (field.error) {
                this.setFieldError(field)
                if (!multiple) return false  
            }
        }
        return this.errors ? false : true
    }

    /**
     * Проверка значений полей.
     * @param array данные для проверки
     * @param bool|null множественные ошибки
     * @return bool
     */
    isValid(data, multiple = false) {
        return this._isValid('isValid', data, multiple)
    }

    /**
     * Проверка значений полей с выбросом исключения.
     * @param array данные для проверки
     * @param bool|null множественные ошибки
     * @throws Error
     */
    throwIfNotValid(data) {
        return this._isValid('throwIfNotValid', data)
    }

    /**
     * Геттер получения первой ошибки валидации значений.
     */
    get error() {
        if (this.errors) for (let key of Object.keys(this.errors)) {
            return this.errors[key]
        }
        return null
    }
}
