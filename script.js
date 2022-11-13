const toggleMenuOpen = () => document.body.classList.toggle('open');
const toggleNavBar = () => navHolder.classList.toggle("navActive");
const buttons = document.querySelectorAll('.buttons');
const navHolder = document.getElementById("navholder");
const a = document.querySelectorAll('.nav-menuLink');
const list = document.querySelectorAll('.nav-menuList');
const cursor = document.querySelector('.cursor');
const cursorinner = document.querySelector('.cursor2');
const navbarMenu = document.querySelector('.navbar-menu');
console.log(list)
navHolder.addEventListener("click", toggleNavBar);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttons[0]?.classList.remove('active');
        buttons[1]?.classList.remove('active');
        buttons[2]?.classList.remove('active');
        buttons[i].classList.toggle('active');
    })
}

document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});
document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});
a.forEach(link => {
    link.addEventListener('mouseover', function () {
        cursor.classList.add('cursor-hoverd');
        link.classList.add('list-hoverd');
    });
    link.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursor-hoverd');
        link.classList.remove('list-hoverd');

    });
});
navbarMenu.addEventListener('mouseover', function () {
    cursor.classList.add('invertedCursor');

});
navbarMenu.addEventListener('mouseleave', function () {
    cursor.classList.remove('invertedCursor');
});