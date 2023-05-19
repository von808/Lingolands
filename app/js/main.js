
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

$(function () {
  var mixer = mixitup('.lesson__progress', {
    animation: {
      duration: 700,
      effects: 'fade scale(0.41)',
      easing: 'ease'
    },
    load: {
      filter: '.week'
    }
  });

})

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__button--active');
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});

$(function () {
  var mixer = mixitup('.lesson__progress , .pay__tabs-item, .curs__tabs-item, .club__tabs-item', {
    animation: {
      duration: 700,
      effects: 'fade scale(0.41)',
      easing: 'ease-in-out',
    },
    load: {
      filter: '.week , .pay-1 , .curs-1, .club-1',
    }
  });
  var mixer = mixitup('.grafik__right', {
    animation: {
      duration: 700,
      effects: 'fade scale(0.41)',
      easing: 'ease-in-out',
    },
    load: {
      filter: '.grafik-1',
    }
  });

})