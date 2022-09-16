const sieuxe1 = "http://127.0.0.1:5500/images/1.1.jpghttp://127.0.0.1:5500/images/1.2.jpghttp://127.0.0.1:5500/images/1.3.jpghttp://127.0.0.1:5500/images/1.4.jpghttp://127.0.0.1:5500/images/1.5.jpg";
const sieuxe2 = "http://127.0.0.1:5500/images/2.1.jpghttp://127.0.0.1:5500/images/2.2.jpghttp://127.0.0.1:5500/images/2.3.jpghttp://127.0.0.1:5500/images/2.4.jpghttp://127.0.0.1:5500/images/2.5.jpg";
const sieuxe3 = "http://127.0.0.1:5500/images/3.1.jpghttp://127.0.0.1:5500/images/3.2.jpghttp://127.0.0.1:5500/images/3.3.jpghttp://127.0.0.1:5500/images/3.4.jpghttp://127.0.0.1:5500/images/3.5.jpg";

function changeImage(row){
    let image_1 = document.querySelector('#anh1');
    let image_2 = document.querySelector('#anh2');
    let image_3 = document.querySelector('#anh3');
    let image_4 = document.querySelector('#anh4');
    let image_5 = document.querySelector('#anh5');
    let imgageId = Math.floor(Math.random()* 3 + 1);
    let imageName = `${imgageId}.${row}.jpg`;
    document.querySelector(`#image_${row}`).src = `images/${imageName}`;
    let checkWin = anh1.src + anh2.src + anh3.src + anh4.src + anh5.src;
    if(checkWin == sieuxe1 || checkWin == sieuxe2 || checkWin == sieuxe3){
        document.getElementsByTagName("table")[0].classList.add('completed');
    }
    else{
        document.getElementsByTagName("table")[0].classList.remove('completed');
    }
}