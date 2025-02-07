// 메인 포트폴리오 텍스트 부분 수정
const titleText = document.querySelector('.main .left h2')
const rightText = document.querySelectorAll('.right p')

setTimeout(() => { 
  titleText.style.transform = 'translate3d(0, 0, 0)'
}, 6900)

setTimeout(() => {
  rightText.forEach((item, index) => {
    setTimeout(() => {
      item.style.transform = 'translate3d(0, 0, 0)'
    }, 100 * index)
  })
}, 7100)

// 가로스크롤
// 페이지 로드 시와 리사이즈 시 높이 계산

function setParentHeight() {
  const dimCount = document.querySelectorAll('.dim').length;
  const stickyParent = document.querySelector('.sticky-parent');
  stickyParent.style.height = `${dimCount * 100}vh`;
}

// 이벤트 리스너 등록
window.addEventListener('load', setParentHeight);
window.addEventListener('resize', horizontalScroll, setParentHeight)

// 기존의 가로 스크롤 함수
function horizontalScroll() {
  let sticky = document.querySelector('.sticky')
  let stickyParent = document.querySelector('.sticky-parent')
  
  let scrollWidth = sticky.scrollWidth;
  let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height
  let stickyPosition = sticky.getBoundingClientRect().top
  
  if(stickyPosition > 1) {
    return
  } else {
    let scrolled = stickyParent.getBoundingClientRect().top;
    sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85
  }
}

document.addEventListener('scroll', horizontalScroll)