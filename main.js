const container = document.querySelector('.container')

for (let column = 0; column < 51; column++) {
    const col = document.createElement('div')
    col.classList.add('week')


    for (let row = 0; row < 7; row++){
        const day = document.createElement('div')
        day.classList.add('days')
        col.appendChild(day)
    }
    container.appendChild(col)
}

const dates = []

const today = new Date()

const WeekDay = today.getDay()
const Sunday = new Date(today)
Sunday.setDate(today.getDate() - WeekDay)

const startDate = new Date(Sunday)
startDate.setDate(Sunday.getDate() - (51 * 7 -1))

for (let i = 0; i < 357; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    dates.push(date)
}