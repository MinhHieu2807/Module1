function yes()
{
    alert("<3 I Love You");
}
function no()
{
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
                document.getElementById('ok').style.left = x + 'px';
                document.getElementById('ok').style.top = y + 'px';
}