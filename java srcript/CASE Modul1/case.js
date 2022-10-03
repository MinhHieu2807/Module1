var idRow;
class Player{
    constructor(id, name, photo, number, status){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.number = number;
        this.status = status; 
    }
    
}

let players = [];
function renderlistplayer() {
    let htmls = players.map(function (player) {
        return `
        <tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>
        <img style="width:100px; height:100px; border-radius: 50px;" src="${player.photo}" alt="">
        </td>
        <td>${player.number}</td>
        <td>${player.status}</td>
        <td> 
        <button class="td-tbcass" id="buttonedit" onclick="edit(${player.id})">EDIT</button>
        <button class="td-tbcase" id="buttondelete" onclick="deletelist(${player.id})">DELETE</button>
        </td>
        </tr>
        `
    });
    document.querySelector('.tbcase>tbody').innerHTML = htmls.join("");

}
function getMaxId(){
    maxId = players[0].value;
    for (let i =1; i<players.length; i++){
        if (players[i].id > maxId){
            maxId = players[i].id;
        }
    }
    return maxId;
}

function add() {
    let index = Number(getMaxId());
    let name = document.querySelector(".name").value;
    if (name.trim() == "" || name == null) {
        alert("Please re-enter your name");
        return;
    }
    let photo = document.querySelector(".photo").value;
    if (photo.trim() == "" || photo == null) {
        alert("Please re-enter your name");
        return;
    }
    if (!isURL(photo)) {
        alert('Photo must url');
        return;
    }
    let number = document.querySelector(".birthday").value;
    if (number.trim() == "" || number == null) {
        alert("Please re-enter your Photo");
        return;
    }
    let status = document.querySelector(".status").value;
    if (status.trim() == "" || status == null) {
        alert("Please re-enter your Nation");
        return;
    }
    players.push(new Player(index+1, name, photo, birthday, status));
    setdata(keydata, players);
    renderlistplayer();
    cancel();
}

function deletelist(id) {
    let position = getPosition(id);
    confirmed = window.confirm(`Bạn có chắc chắn muốn xóa ${players[position].name} không?`);
    if (confirmed) {
        players.splice(position, 1);
        setdata(keydata, players);
        renderlistplayer(players);
        cancel();
    }
}

function getPosition(id){
    for(let i = 0; i <players.length; i++){
        if (id == players[i].id){
            return i;
        }
    }
}
function edit(id) {
    let position = getPosition(id);
    let part = players[position];
    document.getElementById('inputId').value = part.id;
    document.getElementById('inputName').value = part.name;
    document.getElementById('inputPhoto').value = part.photo;
    document.getElementById('inputBirthday').value = part.birthday;
    document.getElementById('inputNation').value = part.nation;
}
function cancel() {
    document.querySelector("#inputId").value = "";
    document.querySelector(".name").value = "";
    document.querySelector(".photo").value = "";
    document.querySelector(".birthday").value = "";
    document.querySelector(".status").value = "";
}
function save(){
    let id = document.getElementById("inputId").value;
    let position = getPosition(id);
    let name = document.getElementById('inputName').value;
    if (name.trim() == "" || name == null) {
        alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN !");
        return;
    }
    let photo = document.getElementById('inputPhoto').value;
    if (photo.trim() == "" || photo == null) {
        alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN !");
        return;
    }
    let birthday = document.getElementById('inputBirthday').value;
    if (birthday.trim() == "" || birthday == null) {
        alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN !");
        return;
    }
    let nation = document.getElementById('inputNation').value;
    if (nation.trim() == "" || nation == null) {
        alert("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN !");
        return;
    }
    players[position] = new Player(id, name, photo, birthday, nation);
    setdata(keydata, players);
    renderlistplayer();
    cancel();
}

let keydata = 'keydata';
function getdata(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setdata(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function dataplayer() {
    if (localStorage.getItem(keydata) == null) {
        players = [
            new Player(1, "Pioneer XDJ-RX3", "https://media.loveitopcdn.com/3035/xdj-rx3-prm-frontangle-210830-pc.png", "56.000.000VNĐ", "MỚI 100%"),
            new Player(2, "Pioneer CDJ-3000", "https://hoangphucaudio.com/uploads/hoangphucaudio/images/logo/timthumb_6_2.png", "66.500.000VNĐ", "MỚI 100%"),
            new Player(3, "Pioneer DJM-V10", "https://product.hstatic.net/200000465219/product/upload_03e651a20fdb45849d199d4c949af43d_large.jpg", "90.000.000VNĐ", "MỚI 100%")
        ];
        setdata(keydata, players);
    }
    else {
        players = getdata(keydata)
    }
}

function isURL(urlString) {
    try {
        new URL(urlString);
        return true;
    }
    catch {
        return false;
    }
}
function main() {
    dataplayer();
    renderlistplayer();
}
main();
