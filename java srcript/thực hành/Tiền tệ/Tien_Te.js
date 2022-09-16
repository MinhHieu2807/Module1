function DoiTien() {
    let Tien = document.getElementById("Tien").value;
    let FromC = document.getElementById("From").value;
    let To = document.getElementById("To").value;
    let Doi;
    if ( FromC =='USD' && To == 'VNĐ'){
        Doi = 'Số tiền sau khi đổi là: ' + (Tien*23000) + 'Đ';
    }
    else if( FromC == 'VNĐ' && To == 'USD'){
        Doi = 'Số tiền sau khi đổi là: ' + (Tien/23000) + '$';
    }
    else if( FromC == 'EUR' && To == 'VNĐ'){
        Doi = 'Số tiền sau khi đổi là: ' + (Tien*24000) + 'D';
    }
    else if( FromC == 'VNĐ' && To == 'EUR'){
        Doi = 'so tien sau khi doi la: ' + (Tien/24000) + '€';
    }
    else if( FromC == 'USD' && To == 'EUR'){
        Doi = 'Số tiền sau khi đổi là: ' + (Tien*1000) + '€';
    }
    else if( FromC == 'EUR' && To == 'USD'){
        Doi = 'Số tiền sau khi đổi là: ' + (Tien*1000) + '$';
    }
    else if( FromC == 'VNĐ'){
        Doi = 'Số tiền sau khi đổi là: ' + Tien + 'Đ'
    }

    else if( FromC == 'USD'){
        Doi = 'Số tiền sau khi đổi là: ' + Tien + '$'
    }
    else{
        Doi = 'Số tiền sau khi đổi là: ' + Tien + '€'
    }
    document.getElementById("Doi").innerHTML = Doi;
}