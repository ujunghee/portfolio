// 메인 포트폴리오 타이틀 이벤트
const titleText = document.querySelector('.main .left h2')
const rightText = document.querySelectorAll('.right p')

setTimeout(() => { 
  titleText.style.transform = 'translate3d(0, 0, 0)'
}, 6900)

setTimeout(() => {
  rightText.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = 'translate3d(0, 0, 0)'
      // 스크롤 부드러운 js 라이브러리 
      const lenis = new Lenis({
        // 추가된 부분
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }, 100 * index)
  })
}, 7100)


// 가로스크롤
window.addEventListener('load', dimBox)
window.addEventListener('resize', () => {
  horizontalScroll(),
  dimBox()
})

// 페이지 로드 시와 리사이즈 시 높이 계산
function dimBox() {
  const dims = document.querySelectorAll('.dim')
  let totalWidth = 0

  dims.forEach(dim => {
    totalWidth += dim.offsetWidth
  })
  
  const stickyParent = document.querySelector('.sticky-parent')
  stickyParent.style.height = `${totalWidth}px` 
}

// 기존의 가로 스크롤 함수
function horizontalScroll() {
  let sticky = document.querySelector('.sticky')
  let stickyParent = document.querySelector('.sticky-parent')
  let body = document.querySelector("body")
  let footer = document.querySelector("footer")
  let header = document.querySelector('header')
  let headerSpan = document.querySelectorAll("header span")
  let line = document.querySelector("header .line")
  let bg = document.querySelector(".bottom .bg")
  let top = document.querySelector(".top")
  
  let scrollWidth = sticky.scrollWidth
  let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height
  let stickyPosition = sticky.getBoundingClientRect().top

  let footerRect = footer.getBoundingClientRect()
  let footerHeight = footer.offsetHeight
  let isFooterVisible = (footerRect.top + footerHeight <= window.innerHeight + 100)

  if(stickyPosition > 1) {
    return
  }else {
    let scrolled = stickyParent.getBoundingClientRect().top
    let scrollProgress = -scrolled / verticalScrollHeight;
    sticky.scrollLeft = Math.max(0, Math.min(scrollProgress * (scrollWidth - sticky.offsetWidth), scrollWidth - sticky.offsetWidth));
    console.log('scrolled', scrolled)
    console.log('footerHeight', footerHeight)
    console.log('sticky.scrollLeft', sticky.scrollLeft)
  } 
  if(isFooterVisible) {
    body.style.background = "#F8F8FF"
    header.style.background = "#F8F8FF"
    line.style.width = "100%"
    line.style.background = "#ECEAFA"
    bg.style.opacity ="1"
    headerSpan.forEach(item => {
      item.style.color = "#232129"
    })
  } else {
    body.style.background = "#0E0E0E"
    header.style.background = "#000"
    line.style.width = "0"
    line.style.background = "#000"
    bg.style.opacity ="0"
    headerSpan.forEach(item => {
      item.style.color = "#fff"
    })
  }
}

document.addEventListener('scroll', horizontalScroll)

// loop 반복 재생 setInterval 
