const splashBox = document.querySelector('.splash-wrap')
const logoTxtBox = document.querySelector('.logo')
const body = document.querySelector('body')
const cursorbox = document.querySelector("cursor-item")


//  로딩시 커서 숨기기 
const style = document.createElement('style')
style.textContent = `
    * {
        cursor: none !important
    }
`
document.head.appendChild(style)

// 로딩
var bar = new ProgressBar.Circle('.splash', {
    strokeWidth: 1,
    trailWidth: 1,
    trailColor: '#333333',
    easing: 'easeInOut',
    duration: 2000,
    text: {
      value: '',
      alignToBottom: false,
      style: {
        color: '#f00',
        fontFamily: 'safiroregular',
        fontSize: 'clamp(1.4rem, 3vw, 1.5vw)',
        position: 'absolute',
        fontWeight: '500',
        left: '50%',
        top: '50%',
        transform: {
            prefix: true,
            value: 'translate(-50%, -50%)'
        }
      }
    },
    from: {color: '#333'},
    to: {color: '#fff'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color)
      var value = Math.round(bar.value() * 100)
      if (value === 0) {
        bar.setText('')
      } else {
        bar.setText(value + '%')
        setTimeout(() => {
          splashBox.style.opacity = "0"
          splashBox.style.visibility ="hidden"
        }, 2000)
      }
      bar.text.style.color = state.color
    }
  })
  bar.animate(1.0)


  // 로고 이벤트
  const splashLogo = document.querySelectorAll('.splash-logo span')
  const splashBg = document.querySelector('.s-l-wrap')
  const logoSpans = document.querySelectorAll('.logo span')
  const menuLis = document.querySelectorAll('.menu li')

  function logoSpan(className, number, name, transform, ms) {
    className.forEach((item, index) => {
      setTimeout(() => {
        if(number === 1) {
          logoTxtBox.classList.add(name)
          item.classList.add(name)
          item.style.transform = transform
        }
        if(number === 2) {
          item.style.transform = transform 
        }
        if(number === 3) {
          item.style.transform = transform
          logoTxtBox.style.position = 'initial'
          logoTxtBox.style.transform = 'initial'
        }
        if(number === 4) {
          item.style.transform = transform 
          item.style.opacity = '1'
          item.style.visibility = 'visible'
          // ''
        }
      }, ms * index)
    })
  }
  // 슬라이드 업 클래스 추가
  setTimeout(() => {
    logoSpan(splashLogo, 1, 'slide-up', 'translate3d(0, 0, 0)', '50')
  }, 2500)

  // span태그 
  setTimeout(() => {
    logoSpan(splashLogo, 2, '', 'translate3d(0, -30vh, 0)', '80')
  }, 4000)

  setTimeout(() => {
    splashBg.style.opacity = '0'
    setTimeout(() => {
      splashBg.style.display = 'none'
    }, 1000)
  }, 5200)

  // 헤더 로고 이벤트
  setTimeout(() => {
    logoSpan(logoSpans, 3, '', 'initial', '30')
  }, 5500)

  setTimeout(() => {
    logoSpan(menuLis, 4, '', 'translate3D(0, 0, 0)', '50')
  }, 6500)
