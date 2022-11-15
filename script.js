function setTime() {
    const date = new Date()

    let hours = formatNumber(date.getHours())
    let minutes = formatNumber(date.getMinutes())
    // let seconds = formatNumber(date.getSeconds())

    document.getElementById("clock").innerHTML = hours + ":" + minutes

    return hours
}

function formatNumber(n) {
    if (n < 10) {
        return "0" + n
    } else {
        return n
    }
}

function setHeader() {
    hour = setTime()
    setGreeting(hour)
}

function setGreeting(hour) {
    greeting = document.getElementById("greeting")

    if (hour >= 0 && hour < 6) {
        greeting.innerHTML = "Buona nottata, " + name
    } else if (hour < 12) {
        greeting.innerHTML = "Buona mattinata, " + name
    } else if (hour < 20) {
        greeting.innerHTML = "Buon pomeriggio, " + name
    } else {
        greeting.innerHTML = "Buona serata, " + name
    }
}

function setLinks() {
    let rows = document.getElementById("elements").children
    for (let i = 0; i < 4; i++) {
        let l = document.createElement('a')
        l.innerHTML = links[i][0]
        l.href = links[i][1]
        l.className = "button"
        rows[0].appendChild(l)
    }

    for (let i = 4; i < 8; i++) {
        let l = document.createElement('a')
        l.innerHTML = links[i][0]
        l.href = links[i][1]
        l.className = "button"
        rows[1].appendChild(l)
    }
}
