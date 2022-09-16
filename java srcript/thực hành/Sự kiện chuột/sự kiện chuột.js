let traidat = null ;
console.log('Start')
traidat = document.getElementById('anh');
function left() {
    traidat = document.getElementById('anh');
    traidat.style.position = 'relative' ;
    traidat.style.left = '0px' ;
}
function right() {
    traidat.style.left = parseInt(traidat.style.left) + 10 + 'px' ;
}
window.onload = left;
console.log('fisnh')