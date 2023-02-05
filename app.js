const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondsHand = document.querySelector('.second-hand')


const getTime = () => {
    const date = new Date()

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}

setInterval(() => {
    const { seconds, minutes, hours } = getTime()

    const fracaoHour = (hours + (minutes / 60))


    secondsHand.style.transform = `translate(0,-50%) rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `translate(0,-50%) rotate(${minutes * 6}deg)`
    hourHand.style.transform = `translate(0,-50%) rotate(${fracaoHour * 30}deg)`


}, 1000)

