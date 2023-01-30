/* Scrimba Lesson 1 */

// document.getElementById("count-el").innerText = 0

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let counStr = count + " - "
    saveEl.textContent += counStr
    countEl.textContent= 0
    count = 0
}

