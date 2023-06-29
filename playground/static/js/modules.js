export default function createError(obj,msg) {
    const htmlElement = document.createElement('div')
    htmlElement.className = 'input-error error-msg'
    htmlElement.innerHTML = msg
    obj.insertBefore(htmlElement,inserter)

    // Disppears alert after 2 sec
    setTimeout(() => {
        obj.removeChild(htmlElement)
    },sec(2))
}