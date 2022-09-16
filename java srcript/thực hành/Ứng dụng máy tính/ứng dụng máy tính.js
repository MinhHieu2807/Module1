
function z(){
    let a = Number(document.getElementById("a").value);
    let q = Number(document.getElementById("q").value);
    let Result;

    Result = 'Kết Quả:  ' + (a + q);
    document.getElementById("result").innerHTML = Result;
}
function x(){
    let a = Number(document.getElementById("a").value);
    let q = Number(document.getElementById("q").value);
    let Result;

    Result = 'Kết Quả:  ' + (a - q);
    document.getElementById("result").innerHTML = Result;
}
function c(){
    let a = Number(document.getElementById("a").value);
    let q = Number(document.getElementById("q").value);
    let Result;

    Result = 'Kết Quả:  ' + (a * q);
    document.getElementById("result").innerHTML = Result;
}
function v(){
    let a = Number(document.getElementById("a").value);
    let q = Number(document.getElementById("q").value);
    let Result;

    Result = 'Kết Quả:  ' + (a / q);
    document.getElementById("result").innerHTML = Result;
}