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

})
