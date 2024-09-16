const decreaseBtnEl = document.getElementById("decreaseBtn");
const resetBtnEl = document.getElementById("resetBtn");
const increaseBtnEl = document.getElementById("increaseBtn");
const countLabelEl = document.getElementById("countLabel");

let count = 0;

increaseBtnEl.onclick = function(){
    count++;
    countLabelEl.textContent = count;
}

decreaseBtnEl.onclick = function(){
    count--;
    countLabelEl.textContent = count;
}

resetBtnEl.onclick = function(){
    count = 0;
    countLabelEl.textContent = count;
}