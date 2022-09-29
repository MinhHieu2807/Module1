var product = new Array();
function ADD() {
    var nhap = document.getElementById("nhap").value;
    var data = {
        "nhap": SP.value,
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
            "<td>" + product[i].nhap + "</td>" +
            "<td> <button onclick='deleteProduct(" + i + ")'>Delete</button></td>" +
            "</tr>";

    }
    listProduct.innerHTML = html;
}

function resetValue() {
    SP.value = "";
}