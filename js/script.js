const hour = document.querySelector('.h')
const min = document.querySelector('.m')
const sec = document.querySelector('.s')
const hoursNumber = document.querySelector('.hours')
const minutesNumber = document.querySelector('.minutes')



/* function clock(){
    let time = new Date()
    let second = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()

    sec.style.transform = `rotate(${second  * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`
    sec.style.transition = `1000ms`
    
    hoursNumber.innerHTML = hours
    minutesNumber.innerHTML = minutes

    // console.log(`Данное время часы равняются ${hours}а минуты у нас сейчас ${minutes} ну и секунды у на в Узбекистане ${second}`)
    
    setTimeout(function(){clock()},1000)
} */


let iSecond = 0,
    iMinutes = 0,
    iHours = 0;



function clock() {
    let time = new Date()
    second = time.getSeconds(),
        minutes = time.getMinutes(),
        hours = time.getHours();

    hoursNumber.innerHTML = hours
    minutesNumber.innerHTML = minutes


    if (iMinutes == 0 && iSecond == 0) {
        iMinutes = time.getMinutes() * 6
    } else if (time.getSeconds() == 0) {
        iMinutes += 6
    }

    if (iSecond == 0 && iHours == 0) {
        iHours = time.getHours() * 30
    } else if (time.getMinutes() == 0) {
        iHours += 30
    }

    if (iSecond == 0) {
        iSecond = time.getSeconds() * 6
    } else {
        iSecond += 6
    }

    sec.style.transform = `rotate(${iSecond}deg)`
    min.style.transform = `rotate(${iMinutes}deg) `
    hour.style.transform = `rotate(${iHours}deg)`

    sec.style.transition = `1s`
    min.style.transition = `1s`
    hour.style.transition = `1s`



    setTimeout(() => clock(), 1000)


}
clock()






const links = document.querySelectorAll('.tabsItem')
const tabs = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < links.length; i++) {
    const link = links[i];

    link.addEventListener('click', function (e) {
        e.preventDefault()
        for (let x = 0; x < links.length; x++) {
            tabs[x].classList.remove('active')
            links[x].classList.remove('active')
        }
        // console.log(this)
        swichTab(this, tabs[i])
    })
}

function swichTab(el, tab) {
    el.classList.add('active')
    tab.classList.add('active')
}


const stopWatchSec = document.querySelector('.stopwatch__seconds')
const stopWatchMin = document.querySelector('.stopwatch__minutes')
const stopWatchHour = document.querySelector('.stopwatch__hours')
const stopWatchInfo = document.querySelector('.tabsLink__span')
const stopWatchBtn = document.querySelector('.stopwatch__btn')

stopWatchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        iteratorSec()
        this.innerHTML = 'stop'
        stopWatchInfo.classList.add('active')
    } else if (this.innerHTML == 'stop') {
        stopWatchInfo.classList.add('active_clear')
        stopWatchInfo.classList.remove('active')
        this.innerHTML = 'clear'
    }
    else {
        stopWatchInfo.classList.remove('active_clear')
        this.innerHTML = 'start'
        stopWatchSec.innerHTML = 0
        stopWatchMin.innerHTML = 0
        stopWatchHour.innerHTML = 0
    }

})

function iteratorSec(s = 0, m = 0, h = 0) {
    s++
    if (s === 59) {
        s = 0
        m++
    }
    if (m == 59) {
        m = 0
        h++
    }
    stopWatchSec.innerHTML = s
    stopWatchMin.innerHTML = m
    stopWatchHour.innerHTML = h
    let intervalTime = setTimeout(function () {
        if (stopWatchBtn.innerHTML == 'clear') {
            clearTimeout(intervalTime)
        } else {
            iteratorSec(s, m, h)
        }

    }, 1000)
}


