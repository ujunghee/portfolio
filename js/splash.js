const splashBox = document.querySelector('.splash-wrap')
const logoTxtBox = document.querySelector('.logo')

var bar = new ProgressBar.Circle('.splash', {
    strokeWidth: .3,
    trailWidth: .3,
    trailColor: '#333333',
    easing: 'easeInOut',
    duration: 2000,
    text: {
      value: '',
      alignToBottom: false,
      style: {
        color: '#f00',
        fontFamily: 'safiroregular',
        fontSize: '3vw',
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
        setTimeout(() => {
          splashBox.style.display = "none"
        }, 2500)
      }
      bar.text.style.color = state.color;
    }
  });
  bar.animate(1.0);


  const logoSpans = document.querySelectorAll('.logo span');
  
  // splash 애니메이션이 끝난 후 실행
  setTimeout(() => {
    logoTxtBox.classList.add('slide-up');
    
    // 각 span에 순차적으로 애니메이션 적용
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('slide-up');
        span.style.transform = 'translate3d(0, 0, 0)'
      }, 80 * index); // 각 글자마다 0.1초 딜레이
    });
  }, 2500);

  // splash 애니메이션이 끝난 후 실행
  setTimeout(() => {
    logoTxtBox.classList.add('slide-up');
    
    // 각 span에 순차적으로 애니메이션 적용
    logoSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('slide-up');
        span.style.transform = 'translate3d(0, -40vh, 0)'
      }, 80 * index); // 각 글자마다 0.1초 딜레이
    });
  }, 4000);

  // splash 애니메이션이 끝난 후 실행
  setTimeout(() => {
    logoTxtBox.classList.add('slide-up');
    
    // 각 span에 순차적으로 애니메이션 적용
    logoSpans.forEach((span, index) => {
      setTimeout(() => {

        span.classList.add('slide-up');
        span.style.fontSize = '1.2vw'
      }, 80 * index); // 각 글자마다 0.1초 딜레이
    });
  }, 5000);


  // splash 애니메이션이 끝난 후 실행
  setTimeout(() => {
    logoTxtBox.classList.add('slide-up');
    
    // 각 span에 순차적으로 애니메이션 적용
    logoSpans.forEach((span, index) => {
      setTimeout(() => {

        span.classList.add('slide-up');
        span.style.transform = 'initial'
        span.style.fontSize = '1.2vw'
        logoTxtBox.style.position = 'initial'
        logoTxtBox.style.transform = 'initial'
      }, 80 * index); // 각 글자마다 0.1초 딜레이
    });
  }, 5500);

