var tables = document.querySelectorAll(".table");
var labels = document.querySelectorAll(".btn");



class TableEntity {
  constructor(table, lable) {
    this.table = table;
    this.lable = lable;
    this.columnsArray = table.children[0].children;
    this.selected = false;


    console.log(this.columnsArray);

    for (let i = 0; i < this.columnsArray.length; i++) {
      this.columnsArray[i].addEventListener('mousedown', e => this.columnsArray[i].classList.add("mousedown"));
      this.columnsArray[i].onclick = () => this.selectColumn(this.columnsArray[i]);
    }

    this.lable.addEventListener('click', e => {
      this.hideAllTables()
      this.hideAllBtns()
      this.deselectColumn()
      this.table.style.display = "block"
      console.log(tables);
      anime({
        targets: table,
        translateX: 0,
        opacity: ['0', '1'],
        delay: 10,
        easing: 'easeInOutExpo',
      });

    });
    this.lable.addEventListener('mousedown', e => this.lable.style.background = "rgba(128,128,128,.5)");
    this.lable.addEventListener('mouseup', e => this.hideCollors());
    this.lable.addEventListener('mouseup', e => this.lable.style.background = "rgba(128,128,128,1)");

  };


  // Метод для активации одной клетки шапки и деактивации всех остальных
  selectColumn(cell) {
    for (let i = 0; i < this.columnsArray.length; i++) {
      this.columnsArray[i].classList.remove("active");
      this.columnsArray[i].classList.remove("mousedown");
    }
    cell.classList.add("active");

  }

  // Метод для  деактивации всех остальных
  deselectColumn() {
    for (let i = 0; i < this.columnsArray.length; i++) {
      this.columnsArray[i].classList.remove("active");
      this.columnsArray[i].classList.remove("mousedown");
    }
  }

  // Метод обрабатывающий нажатие на ярлык
  // [selected] : bool - аргумент, опреляющий включать или выключать итаблицу
  // onLabelSelect() {
  //   for (let i = 0; i < tables.length; i++) {
  //     labels[i].addEventListener(`click`, function(e) {
  //       hideAllTables();
  //       tables[i].style.display = "block";
  //       hideAllBtns();
  //       hideAllHeaders();
  //       this.classList.add("active_btn");
  //     });
  //     labels[i].addEventListener(`mousedown`, function(e) {
  //       this.style.background = "rgba(128,128,128,.5)";
  //     })
  //     labels[i].addEventListener(`mouseup`, function(e) {
  //       hideCollors();
  //       this.style.background = "rgba(128,128,128,1)";
  //     })
  //   };
  // }

  //Выключает все таблицы
  hideAllTables() {
    for (let i = 0; i < tables.length; i++) {
      tables[i].style.transform = "translateX(-1000px)"
    }
  };

  // Выключает активный статус у кнопки
  hideAllBtns() {
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("active_btn");
    }
  };

  // Выключает цвет у кнопок
  hideCollors() {
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.background = "rgba(128,128,128,0)";
    }
  };



};





var tablesEntities = [];

for (var i = 0; i < tables.length; i++) {
  tablesEntities.push(new TableEntity(tables[i], labels[i]));

};



console.log(tablesEntities);