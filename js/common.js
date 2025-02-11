
let cursor = document.querySelector('.cursor-item')
const cursorWidth = cursor.offsetWidth
const cursorHeight = cursor.offsetHeight

document.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY)
    const width = cursorWidth / 2
    const height = cursorHeight / 2
    
    cursor.style.transform = `translate(${e.clientX - width}px, ${e.clientY - height}px) scale(${cursor.classList.contains('hover') ? 2 : 1})`

    callback()
})

function callback() {
    window.requestAnimationFrame(callback)
}
// 새로고침 시
window.onload = function() {
    setTimeout(function() {
        scrollTo(0, 0)
    }, 100)
}


//버튼 이벤트    
const buttons = document.querySelectorAll('button , a, span, p, h1, h2')

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        cursor.classList.remove("hover")
    })

    if(button) {
        button.addEventListener('mouseover', () => {
           cursor.classList.add("hover")
        })
    }
})

//헤더 메뉴 이벤트
const headerButton = document.querySelectorAll('header .menu li button')

headerButton.forEach(button => {
    const parentLi = button.closest('li')
    const span = parentLi.querySelector('span')

    button.addEventListener('mouseout', () =>{
        span.style.width = "0"
    })

    button.addEventListener('mouseover', () =>{
        span.style.width = "calc(100% - 1rem)"
    })

})