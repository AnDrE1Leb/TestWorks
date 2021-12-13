var boards = document.getElementById('boards');
var leftBoard = document.getElementById('leftBoard');
var rightBoard = document.getElementById('rightBoard');
var caseRight = document.querySelectorAll(".case");
var cloneReady = document.getElementsByClassName('clone');
var counter = document.getElementById('counter')
var rightArr = [];
var leftArr = [];
var select = document.getElementById('select');
var delete_all = document.getElementById('delete');



for (let i = 0; i < caseRight.length; i++) {
  caseRight[i].addEventListener('click', function clone(r) {
    var caseClone = this.cloneNode(true);
    rightArr.push(this);
    leftBoard.appendChild(caseClone);
    caseClone.classList.add("clone");
    this.dataset.parent = "enable";
    leftArr.push(caseClone);
    counter.innerHTML = cloneReady.length;
    leftArr.forEach((element, index) => {
      element.onclick = () => {
        rightArr[index].dataset.parent = "not"
        leftArr[index].parentNode.removeChild(leftArr[index]);
        counter.innerHTML = cloneReady.length
      }
    });
  })
}

select.onclick = () => {
  leftBoard.dataset.parent = "not_done";
  for (var i = 0; i < caseRight.length; i++) {
    var caseClone = caseRight[i].cloneNode(true);
    rightArr.push(caseRight[i]);
    if (caseRight[i].dataset.parent != "enable") {
      leftBoard.appendChild(caseClone);
    }
    caseClone.classList.add("clone");
    caseRight[i].dataset.parent = "enable";
    leftArr.push(caseClone);
    counter.innerHTML = cloneReady.length;
    leftArr.forEach((element, index) => {
      element.onclick = () => {
        rightArr[index].dataset.parent = "not"
        leftArr[index].parentNode.removeChild(leftArr[index]);
        counter.innerHTML = cloneReady.length
      }
    });
  }
}

delete_all.addEventListener('click', function someFunc() {
    leftArr.forEach((element, index) => {
        rightArr[index].dataset.parent = "not"
        leftBoard.innerHTML = "";
        counter.innerHTML = cloneReady.length;
    });
})
