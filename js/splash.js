const splashBox = document.querySelector('.splash-wrap')
const logoTxtBox = document.querySelector('.logo')
const body = document.querySelector('body')
const cursorbox = document.querySelector("cursor-item")


//  로딩시 커서 숨기기 
const style = document.createElement('style');
style.textContent = `
    * {
        cursor: none !important;
    }
`;
document.head.appendChild(style);

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
        fontSize: '2vw',
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
      bar.path.setAttribute('stroke', state.color);
      var value = Math.round(bar.value() * 100);
      if (value === 0) {
        bar.setText('');
      } else {
        bar.setText(value + '%');
        setTimeout(() => {
          splashBox.style.opacity = "0";
          splashBox.style.visibility ="hidden";
        }, 2000)
      }
      bar.text.style.color = state.color;
    }
  });
  bar.animate(1.0);


  const logoSpans = document.querySelectorAll('.logo span');
  const menuLis = document.querySelectorAll('.menu li button')

  // 슬라이드 업 클래스 추가
  setTimeout(() => {
    logoTxtBox.classList.add('slide-up');
    
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('slide-up');
        span.style.transform = 'translate3d(0, 0, 0)'
      }, 80 * index);
    });
  }, 2500);

  // span태그 
  setTimeout(() => {
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.style.transform = 'translate3d(0, -30vh, 0)'
      }, 80 * index); 
    });
  }, 4000);

  // span 사이즈 줄이기
  setTimeout(() => {
    logoSpans.forEach(span => {
        span.style.fontSize = 'clamp(1.2rem, 3vw, 1.2vw)'
    });
  }, 5000);

  // 헤더로 이동
  setTimeout(() => {
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.style.transform = 'initial'
        logoTxtBox.style.position = 'initial'
        logoTxtBox.style.transform = 'initial'
        body.style.overflow = "auto"
      }, 30 * index); 
    });
  }, 5500);

  // 헤더로 이동
  setTimeout(() => {
    menuLis.forEach((buttons, index) => {
      setTimeout(() => {
        buttons.style.opacity = '1'
        buttons.style.visibility = 'visible'
        buttons.style.transform = 'translate3D(0, 0, 0)'
      }, 100 * index); 
    });
  }, 6500);
