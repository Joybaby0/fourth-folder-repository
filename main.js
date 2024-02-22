


let zeroEl = document.querySelector(".zero-el")
let minusEl = document.querySelector(".minus-el")
let resetEl = document.querySelector(".reset-el")
let plusEl = document.querySelector(".plus-el")


plusEl.addEventListener("click", function(){
    zeroEl.textContent ++
    allCount()
})

resetEl.addEventListener("click", function(){
    zeroEl.textContent = 0
    allCount()
})

minusEl.addEventListener("click", function(){
    zeroEl.textContent --
    allCount()
})

function allCount(){
    if(zeroEl.textContent > 0){
        zeroEl.style.color = "white"
    }else if(zeroEl.textContent < 0){
        zeroEl.style.color = "red"
    }else{
        zeroEl.style.color = "black"
    }
}


// let seroEl = document.querySelector(".sero-el")
// let incrementBtn = document.querySelector(".increment-btn")
// let saveBtn = document.querySelector(".save-btn")
// let messageEl = document.querySelector(".message-el")

// let count = 0

// incrementBtn.addEventListener("click", function(){
//     count = count + 1
//     seroEl.textContent = count
// })

// saveBtn.addEventListener("click", function(){
//     let countStrings = count + " - "
//     messageEl.textContent += countStrings
//     seroEl.textContent = 0
//     count = 0
// })


// let oneBtn = 8
// let twoBtn = 2
// let addEl = document.querySelector(".add-el")
// let subtractEl = document.querySelector(".subtract-el")
// let divideEl = document.querySelector(".divide-el")
// let sumEl = document.querySelector(".sum-el")

// document.getElementById("one-el").textContent = oneBtn
// document.getElementById("two-el").textContent = twoBtn



// addEl.addEventListener("click", function(){
    
//     let counter = oneBtn + twoBtn
//     sumEl.textContent = "Sum: " + counter
// })

// subtractEl.addEventListener("click", function(){

//     let counter = oneBtn - twoBtn
//     sumEl.textContent = "Sum: " + counter
// })

// divideEl.addEventListener("click", function(){

//     let counter = oneBtn / twoBtn
//     sumEl.textContent = "Sum: " + counter
// })