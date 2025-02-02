
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

// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
    }
}