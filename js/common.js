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
    // let sticky = document.querySelectorAll('sticky')
    // if(sticky) {
    //     sticky.scrollLeft = 0
    // }
    //스크롤 복원
    history.scrollRestoration = 'manual'
}

//헤더 메뉴 이벤트
const headerButton = document.querySelectorAll('header .menu li a')
const auto = document.querySelectorAll("header .menu li .auto")
const hidden = document.querySelectorAll("header .menu li .hidden")

headerButton.forEach(button => {
    const parentLi = button.closest('li')
    const auto = parentLi.querySelector('.auto')
    const hidden = parentLi.querySelector('.hidden')
    const span = parentLi.querySelectorAll('span')

    button.addEventListener('mouseout', () => {
//        auto.style.transform = "translate3d(0, 0, 0)"
 //       hidden.style.transform = "translate3d(0, 0, 0)"
        span.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = "translate3d(0, 0, 0)"
            }, index  * 10)
        }, 100)
        // span.style.backgroundColor = "#000"
    })

    button.addEventListener('mouseover', () => {
//        auto.style.transform = "translate3d(0, -100%, 0)"
 //       hidden.style.transform = "translate3d(0, -100%, 0)"
        span.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = "translate3d(0, -100%, 0)"
            }, index  * 10)
        }, 100)
        // span.style.backgroundColor = "#fff"
    })

})