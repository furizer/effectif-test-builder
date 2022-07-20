/**
 * Валидатор поля.
 * @author Egor Vasyakin egor@evas-php.com
 * @license CC-BY-4.0
 */
export default class Field {
    /** @var string имя поля */
    name
    /** @var string лейбл поля */
    label
    /** @var bool обязательность значения */
    required = true
    /** @var number минимальное значение или длина */
    min = 0
    /** @var number|null максимальное значение или длина */
    max
    /** @var string|null паттерн значения */
    pattern
    /** @var array|null опции значения */
    options
    /** @var mixed значение по умолчанию */
    default
    /** @var mixed значение */
    value
    /** @var string|null ошибка валидации */
    error

    /** @static array маппинг ошибок */
    static errorsMap = {
        required: (ctx) => `Поле "${ctx.labelOrName}" обязательно для заполнения`,
        length: (ctx) => `Длина поля "${ctx.labelOrName}" должна быть от ${ctx.min} до ${ctx.max} символов`,
        options: (ctx) => `Поле "${ctx.labelOrName}" не поадает в доступные опции`,
    }

    /**
     * Конструктор.
     * @param object|null свойства поля
     */
    constructor(props) {
        if (props) for (let key of Object.keys(props)) {
            this[key] = props[key]
        }
    }

    /**
     * Геттер лейбла или имени поля.
     */
    get labelOrName() {
        return this.label || this.name
    }

    /**
     * Установка ошибки.
     * @param string тип ошибки
     * @return bool false
     */
    setError(type) {
        this.error = Field.errorsMap[type](this)
        return false
    }

    /**
     * Валидации обязательности значения.
     * @param mixed значение
     * @return bool
     */
    validateRequired(value) {
        this.error = null
        this.value = value
        return (this.required && (!value)) 
        ? this.setError('required')
        : true
    }

    /**
     * Валидатор длины значение.
     * @param mixed значение
     * @return bool
     */
    validateLength(value) {
        return (
            this.validateRequired(value) && value &&
            ((this.min && value.length < this.min) || (this.max && value.length > this.max))
        ) 
        ? this.setError('length')
        : true
    }

    /**
     * Валидатор соответствия значения опциям.
     * @param mixed значение
     * @return bool
     */
    validateOptions(value) {
        return (this.validateRequired(value) && value && this.options && !this.options[value]) 
        ? this.setError('options')
        : true
    }

    /**
     * @todo Валидатор паттерна значения.
     */
    validatePattern(value) {
        return (this.validateRequired(value))
    }

    /**
     * @todo Валидатор числового диапазона значения.
     */
    validateRange(value) {
        return (this.validateRequired(value))
    }

    /**
     * Проверка значения.
     * @return bool
     */
    isValid(value) {
        return this.validateRequired(value) 
        && this.validateLength(value) 
        && this.validateOptions(value)
        && this.validatePattern(value)
    }

    /**
     * Проверка значения с выбросом исключения.
     * @throws new Error
     */
    throwIfNotValid(value) {
        if (!this.isValid(value)) {
            throw new Error(this.error)
        }
    }
}
