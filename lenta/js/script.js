const lenta = document.getElementById('lenta');


function newCardLenta(name , img) {
  lenta.innerHTML += `            <div class="lenta_card new_card">
              <div class="image_lenta">
                <img src="${img}" alt="bitcoin">
              </div>
              <div class="name_card">
                <p>${name}</p>
              </div>
              <div class="dropdown">
                <div class="person_photo">
                  <img src="images/avatar.png" alt="">
                </div>
                <div class="person_name">
                  <p>Ivan</p>
                </div>
              </div>
            </div>`

}


newCardLenta("work" , "images/litecoin.png" );
