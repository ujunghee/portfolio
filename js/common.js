
var bar = new ProgressBar.Circle('.splash', {
    strokeWidth: .3,
    trailColor: '#333333',
    trailWidth: .3,
    easing: 'easeInOut',
    duration: 2000,
    svgStyle: null,
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
        padding: 0,
        margin: 0,
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
      }
  
      bar.text.style.color = state.color;
    }
  });
  
  bar.animate(1.0);