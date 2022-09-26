var product = new Array();
function ban() {
    var loai = document.getElementById("loai");
    var gia = document.getElementById("gia");
    var anh = document.getElementById("anh");
    var data = {
        "loai": loai.value,
        "gia": gia.value,
        "anh": anh.value,
    };
    product.push(data);
    resetValue();
    printProduct();
}
function deleteProduct(id) {
    product.splice(id, 1);
    printProduct();
}

function printProduct() {
    var listProduct = document.getElementById("showProduct");
    var html = "";
    for (i = 0; i < product.length; i++) {
        html += "<tr> " +
            "<td>" + product[i].loai + "</td>" +
            "<td>" + product[i].gia + "</td>" +
            "<td><img width='30%' class='zoom' src='" + product[i].anh + "' /></td>" +
            "<td> <button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "</tr>";

    }
    listProduct.innerHTML = html;
}

function resetValue() {
    loai.value = "";
    gia.value = "";
    anh.value = "";
}