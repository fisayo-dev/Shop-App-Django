// console.log('Working')
// import { createError } from "./modules"


const ERR0R_CLASSNAME = 'inputDiv error'
const SUCCESS_CLASSNAME = 'inputDiv success'
const pwd = document.querySelector('#pwd')
const email = document.querySelector('#email')
const username = document.querySelector('#username')
const form = document.getElementById('form')
const inserter = document.getElementById('inserter')
const rpwd = document.querySelector('#rpwd')
const submitBtn = document.querySelector('#submit')
const inputs = document.querySelectorAll('.inputDiv input')

sec = (time) => {
    return time*1000
}

// handlers

function createError(obj,msg) {
    const htmlElement = document.createElement('div')
    htmlElement.className = 'input-error error-msg'
    htmlElement.innerHTML = msg
    obj.insertBefore(htmlElement,inserter)

    // Disppears alert after 2 sec
    setTimeout(() => {
        obj.removeChild(htmlElement)
    },sec(2))
}


inputs.forEach(input => {
    input.addEventListener('keyup', (e) =>  {
        parentElement = input.parentElement
        if (input.value.length > 0 ){
            parentElement.className = SUCCESS_CLASSNAME
        } else {
            parentElement.className = ERR0R_CLASSNAME
        }
    })
})

function isEmptyField(field) {
    if(field.value.trim() === '') {
        field.parentElement.className = ERR0R_CLASSNAME
    } else {
        field.parentElement.className = SUCCESS_CLASSNAME
    }
}

function pwdCheck(pwd1,pwd2) {
    if(pwd1.value !== pwd2.value) {
        createError(form,'Password don\'t match')
    } 
    if(pwd.value.length < 6 && pwd.value.length !== 0 || rpwd.value.length < 6 && rpwd.value.length) {
        console.log('Passwords too short')
        createError(form,'Password is too short')
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    isEmptyField(email)
    isEmptyField(pwd)
    pwdCheck(pwd,rpwd)
    isEmptyField(rpwd)
    isEmptyField(username)
})