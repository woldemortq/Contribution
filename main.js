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