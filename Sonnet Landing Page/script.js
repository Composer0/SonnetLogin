const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const boxes = document.querySelectorAll('.box')
const btn = document.querySelectorAll('.btn')
const toggle = document.querySelectorAll('.btn')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))


window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
            // returns DOM rect object. Provides information regarding size and locaitons within the element.
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')

        }
    })
}

btn.addEventListener = ('click', () => {
    document.getElementsByClassName("btn").scrollIntoView({behavior: 'smooth'})
});

$(".btn").click(function(){   //id of the link which is being clicked
    $('html, body').animate({
           scrollTop: $("#information-pastel").offset().top   //id of div to be scrolled
    }, 1000);
});

// toggle.addEventListener('click', (e) => {
//     const html = document.querySelector('html')
//     if (body.classList.contains('dark')) {
//         body.classList.remove('dark')
//         e.target.innerHTML = 'Dark mode'
//     } else {
//         body.classList.add('dark')
//         e.target.innerHTML = "Light mode"
//     }
// })