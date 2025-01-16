const box = document.querySelector('.splash-wrap')

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
        fontFamily: 'safirobold',
        fontSize: '3vw',
        position: 'absolute',
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
          box.style.opacity = "0";
          box.style.visibility ="hidden";
        }, 3000)
        setTimeout(() => {
          box.style.display = "none"
        }, 3500)
      }
      bar.text.style.color = state.color;
    }
  });
  bar.animate(1.0);