const labels = document.querySelectorAll(".btn");
const tables = document.querySelectorAll(".table");
const headCell = document.getElementsByClassName('table_head_cell');


function hideAllTables() {
  for (let i = 0; i < tables.length; i++) {
    tables[i].style.display = "none";
  }
};

function hideAllBtns() {
  for (let i = 0; i < labels.length; i++) {
    labels[i].classList.remove("active_btn");
  }
};

function hideCollors() {
  for (let i = 0; i < labels.length; i++) {
    labels[i].style.background = "rgba(128,128,128,0)";
  }
};


for (let i = 0; i < tables.length; i++) {
  labels[i].addEventListener(`click`, function(e) {
    hideAllTables();
    tables[i].style.display = "block";
    hideAllBtns();
    this.classList.add("active_btn");
  });
  labels[i].addEventListener(`mousedown`, function(e) {
    this.style.background = "rgba(128,128,128,.5)";
  })
  labels[i].addEventListener(`mouseup`, function(e) {
    hideCollors();
    this.style.background = "rgba(128,128,128,1)";
  })
};

for (var j = 0; j < headCell.length; j++) {
  headCell[j].addEventListener(`click`, function headerActivity() {
    this.style.background = "red";
  })
};