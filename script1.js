let count = 0;
function changedColor() {
    let el = document.getElementById('el1');
    console.log(el);
    if (count%2==0) el.classList.add('ice');
    else
    el.classList.remove('ice');
    count++;
    
}
let btn1 = document.getElementById('btn1');
    console.log(btn1);
btn1.addEventListener('click', changedColor)