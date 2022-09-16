function len() {
    let element = document.getElementById("anh");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function xuong() {
    let element = document.getElementById("anh");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function trai() {
    let element = document.getElementById("anh");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function phai() {
    let element = document.getElementById("anh");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function xehoi(evt) {
    switch (evt.keyCode) {
        case 37:
            len();
            break;
        case 39:
            xuong();
            break;
        case 38:
            trai();
            break;
        case 40:
            phai();
            break;
        case 41:
    }
}
function docReady() {
    window.addEventListener('keydown', xehoi);
}