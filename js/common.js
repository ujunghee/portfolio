
let cursor = document.querySelector('.cursor-item')
const cursorWidth = cursor.offsetWidth
const cursorHeight = cursor.offsetHeight

document.addEventListener('mousemove', (e) => {
    // console.log(e.clientX, e.clientY);
    const width = cursorWidth / 2
    const height = cursorHeight / 2
    
    cursor.style.transform = `translate(${e.clientX - width}px, ${e.clientY - height}px) scale(${cursor.classList.contains('hover') ? 2 : 1})`

    callback();
})

function callback() {
    window.requestAnimationFrame(callback);
}
    
const buttons = document.querySelectorAll('button , a, span')

buttons.forEach(button => {
    button.addEventListener('mouseout', () => {
        cursor.classList.remove("hover")
    })

    if(button) {
        button.addEventListener('mouseover', () => {
           cursor.classList.add("hover")
        })
    }
});
