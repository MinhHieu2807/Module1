function kiemtra() {
    let cannang = document.getElementById("cannang").value;
    let chieucao = document.getElementById("chieucao").value;
    let bmi = cannang / ( Math.pow(chieucao, 2) )
    let kiemtra = "";
    
    if (bmi < 16) 
         kiemtra = "Gầy độ 3. Ăn thật nhiều vào nhé" + "<img src = 'https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height= '100'>";
    else if (bmi < 17)
         kiemtra = "Gầy độ 2" + "<img src = 'https://i.pinimg.com/originals/1e/38/f3/1e38f368a5f76e889c00a095e7efcd55.gif' width='100' height= '100'> ";
    else if (bmi < 18.5)
         kiemtra = "Gầy độ 1" + "<img src = 'https://i.pinimg.com/originals/03/5b/cc/035bccfbeefcce413fb6041e94b514de.gif' width='100' height= '100'> ";
    else if (bmi < 25)
         kiemtra = "Bình thường" + "<img src = 'https://i.pinimg.com/originals/da/7b/e7/da7be7bbab610cf85f9e6a3c8e6496ce.gif' width='100' height= '100'> ";
    else if (bmi < 30)
         kiemtra = "Thừa cân" + "<img src = 'https://i.pinimg.com/originals/43/25/bf/4325bf00fe47fefcb349b2b1da31e869.gif' width='100' height= '100'> ";
    else if (bmi < 35)
         kiemtra = "Béo phì độ 1" + "<img src = 'https://i.pinimg.com/originals/03/5b/cc/035bccfbeefcce413fb6041e94b514de.gif' width='100' height= '100'> ";
    else if (bmi < 40)
         kiemtra = "Béo phì độ 2" + "<img src = 'https://i.pinimg.com/originals/1e/38/f3/1e38f368a5f76e889c00a095e7efcd55.gif' width='100' height= '100'> ";
    else
         kiemtra = "Béo phì độ 3" + "<img src = 'https://i.pinimg.com/originals/73/4d/11/734d11cc677595ce3c3e5e3bba02721f.gif' width='100' height= '100'>"

    document.getElementById("kiemtra").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ kiemtra + "</b>";
}