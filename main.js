let up = document.querySelector(".up")
let down = document.querySelector(".down")
let count = document.querySelector("#counter")
let cancel = document.querySelector(".cancellation")
let random = document.querySelector(".randomNum")

up.onclick = () => {
    if (+count.innerHTML <= 14) {
        count.innerHTML++
    }
}

down.onclick = () => {
    if (+count.innerHTML >= 1) {
        count.innerHTML--;
    }
}

cancel.onclick = () => {
    count.innerHTML = 0
}

random.onclick = () => {
    count.innerHTML = Math.ceil(Math.random() * 15)
}