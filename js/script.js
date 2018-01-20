document.addEventListener('DOMContentLoaded',function () {
// console.log('działa');

  function removeBar() {
    var pictures = document.querySelectorAll('.images');

    pictures.forEach(function(element) {
      element.addEventListener('mouseover', function() {

        var pictureBars = this.querySelectorAll('.opacity-area');

        pictureBars.forEach(function(bar) {
          bar.style.display ='none';
        })
      })

      element.addEventListener('mouseout', function() {

        var pictureBars = this.querySelectorAll('.opacity-area');

        pictureBars.forEach(function(bar) {
          bar.style.display ='table-cell';
        })
      })
    })
  }
  removeBar();

  function slider() {
    var body = document.querySelector('body');

    var prev = body.querySelector('.lt-sign');
    var next = body.querySelector('.gt-sign');

    var listImg = body.querySelectorAll('.main-slide');

    var index = 0;

    listImg[index].classList.add('visible');

    next.addEventListener('click', function() {

      listImg[index].classList.remove('visible');
      index += 1;

      if (index > listImg.length-1) {
        index = 0;
      }

      listImg[index].classList.add('visible');
    })

    prev.addEventListener('click', function() {

      listImg[index].classList.remove('visible');
      index -= 1;

      if (index < 0) {
        index = listImg.length-1;
      }

      listImg[index].classList.add('visible');
    })
  }
  slider();

  function dropDown() {
    var body = document.querySelector('body');
    var triangles = body.querySelectorAll('.triangle');

    triangles.forEach(function(element) {
      element.addEventListener('click', function(){

        var dropDownList = this.previousElementSibling;

        dropDownList.classList.toggle('hidden');
      })
    })
  }
  dropDown();

  function order() {

    var body = document.querySelector('body');

    var productList = body.querySelector('.sum-area-left');
    var nameProduct =  body.querySelector('.sum-area-left span');
    var option1 = body.querySelector('.sum-area-left p:first-of-type');
    var option2 = body.querySelector('.sum-area-left p:nth-of-type(2)');
    var option3 = body.querySelector('.sum-area-left p:last-of-type');
    var priceList = body.querySelector('.sum-area-right');
    var typeListLi = body.querySelectorAll('.type-list li');
    var colorListLi = body.querySelectorAll('.color-list li');
    var materialListLi = body.querySelectorAll('.material-list li');
    var transportPrice = body.querySelector('label');
    var sum = body.querySelector('.sum-area-bottom p');


    function addElement(price, idElement) {
      var newP = document.createElement('p');
      newP.innerText = price;
      newP.id = idElement;
      priceList.appendChild(newP);
    }


    function addPrice(){
        var array = document.querySelectorAll('.sum-area-right p');
        var amount = 0;

        for (var i = 0; i < array.length; i++) {
          amount += parseInt(array[i].innerText);
        }
        sum.innerText = amount + " zl";
    }


    typeListLi.forEach(function(element) {
      element.addEventListener('click', function() {

        var name = this.innerText;
        var price = this.dataset.price;

        var idChair = 'chair-price';
        var idElementPrice = document.getElementById('chair-price');

        if (idElementPrice) {
          nameProduct.innerText = name;
          idElementPrice.parentElement.removeChild(idElementPrice);
          addElement(price, idChair);
        } else {
          nameProduct.innerText = name;
          addElement(price, idChair);
        }
        addPrice();
      })
    })


    colorListLi.forEach(function(element) {
      element.addEventListener('click', function() {

        var name = this.innerText;
        var price = this.dataset.price;

        var idColor = 'color-price';
        var idElementPrice = document.getElementById('color-price');

        if (idElementPrice) {
          option1.innerText = name;
          idElementPrice.parentElement.removeChild(idElementPrice);
          addElement(price, idColor);
        } else {
          option1.innerText = name;
          addElement(price, idColor);
        }
        addPrice();
      })
    })


    materialListLi.forEach(function(element) {
      element.addEventListener('click', function() {

        var name = this.innerText;
        var price = this.dataset.price;

        var idMaterial = 'material-price';
        var idElementPrice = document.getElementById('material-price');

        if (idElementPrice) {
          option2.innerText = name;
          idElementPrice.parentElement.removeChild(idElementPrice);
          addElement(price, idMaterial);
        } else {
          option2.innerText = name;
          addElement(price, idMaterial);
        }
        addPrice();
      })
    })


    transportPrice.addEventListener('click', function() {

      var name = this.innerText;
      var price = this.lastElementChild.dataset.price;

      var idTransport = 'transport-price';
      var idElementPrice = document.getElementById('transport-price');

      if (idElementPrice) {
        option3.innerText = '';
        idElementPrice.parentElement.removeChild(idElementPrice);
      } else {
        option3.innerText = name;
        addElement(price, idTransport);
      }
      addPrice();
    })
  }
  order();
  
})
