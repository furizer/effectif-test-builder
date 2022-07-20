
const DateHelp = new function () {
    // приведение текстовой даты/времени к объекту даты
    this.prepareDatetime = (datetime) => {
        return new Date(`${datetime.date} ${datetime.start_time}:00`)
    }
    // проверка объекта даты на просроченность
    this.isOutdated = (date) => {
        let n = new Date()
        return n.getTime() > date.getTime()
    }
    // проверка текстовой даты/времени на просроченность
    this.isOutdatedDatetime = (datetime) => {
        return this.isOutdated(this.prepareDatetime(datetime))
    }
    // сравнение двух объектов даты/времени
    this.compare = (date1, date2) => {
        let t1 = date1.getTime(), t2 = date2.getTime()
        return t1 > t2 ? 1 : (t1 < t2 ? -1 : 0)
    }
    // сравнение двух текстовых даты/времени
    this.compareDatetime = (datetime1, datetime2) => {
        return this.compare(this.prepareDatetime(datetime1), this.prepareDatetime(datetime2))
    }
    // получение текущей даты в формате YY-MM-DD
    this.nowDate = () => {
        let n = new Date()
        let y = n.getFullYear(), m = n.getMonth() + 1, d = n.getDate()
        if (m < 10) m = `0${m}`
        if (d < 10) d = `0${d}`
        return `${y}-${m}-${d}`
    }
    // получение текущего времени в формате HH-II
    this.nowTime = () => {
        let n = new Date()
        let h = n.getHours(), i = n.getMinutes()
        if (h < 10) h = `0${h}`
        if (i < 10) i = `0${i}`
        return `${h}:${i}`
    }
}

export default DateHelp;
