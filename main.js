const container = document.querySelector('.container')

async function init() {
    const data = await fetchData();

    const dates = Object.keys(data).sort();

    for (let column = 0; column < 51; column++) {
        const col = document.createElement('div');
        col.classList.add('week');

        for (let row = 0; row < 7; row++) {
            const dayIndex = column * 7 + row;
            const day = document.createElement('div');
            day.classList.add('days');

            const dateStr = dates[dayIndex];
            if (dateStr) {
                const value = data[dateStr];


                day.setAttribute('data-date', dateStr);
                day.setAttribute('title', `Дата: ${dateStr}\nЗначение: ${value}`);

                if (value === 0) {
                    day.style.backgroundColor = '#EDEDED';
                } else if (value >= 1 && value <= 9) {
                    day.style.backgroundColor = '#ACD5F2';
                } else if (value >= 10 && value <= 19) {
                    day.style.backgroundColor = '#7FA8C9';
                } else if (value >= 20 && value <= 29) {
                    day.style.backgroundColor = '#527BA0';
                } else if (value >= 30) {
                    day.style.backgroundColor = '#254E77';
                }


            }
            col.appendChild(day);
        }
        container.appendChild(col);
    }
}

init();

async function fetchData() {
    const res = await fetch('https://dpg.gg/test/calendar.json');
    return await res.json();
}
