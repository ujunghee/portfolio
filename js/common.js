// 마우스 커스텀
let cursor = document.querySelector('.cursor-item')
const cursorWidth = cursor.offsetWidth
const cursorHeight = cursor.offsetHeight
cursor.style.transition = ".1s"

let x = 0
let y = 0
let mouseX = 0
let mouseY = 0
let speed = 0.4

document.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY)
    x = e.clientX - cursorWidth / 2
    y = e.clientY - cursorHeight / 2
})

//버튼 이벤트    
const buttons = document.querySelectorAll('button , a, span, p, h1, h2')

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        cursor.classList.remove("hover")

    })

    if (button) {
        button.addEventListener('mouseover', () => {
            cursor.classList.add("hover")
        })
    }
})
// 버튼 스피드 및 스케일
function loop() {
    mouseX += (x - mouseX) * speed
    mouseY += (y - mouseY) * speed
    
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${cursor.classList.contains('hover') ? 2 : 1})`
    window.requestAnimationFrame(loop)
}

loop()


// 로고 마우스무브시 확대 효과
const logos = document.querySelectorAll(".logo span")
logos.forEach((li, index) => {
    li.addEventListener("mousemove", () => {
        setTimeout(() => {
            li.style.transform = "scale(1.2)"
            li.style.transition = ".1s"
        }, index * 0)
    })
    li.addEventListener("mouseout", () => {
        setTimeout(() => {
            li.style.transform = "scale(1)"
            li.style.transition = ".1s"
        }, index * 0)

    })
})


// 새로고침 시
window.onload = function () {
    setTimeout(function () {
        scrollTo(0, 0)
    }, 100)
}

//헤더 메뉴 이벤트
const headerButton = document.querySelectorAll('header .menu li button')

headerButton.forEach(button => {
    const parentLi = button.closest('li')
    const span = parentLi.querySelector('span')

    button.addEventListener('mouseout', () => {
        span.style.width = "0"
        span.style.backgroundColor = "#000"
    })

    button.addEventListener('mouseover', () => {
        span.style.width = "calc(100% - 1rem)"
        span.style.backgroundColor = "#fff"
    })

})