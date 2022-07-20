export function tabTitles() {
  const electrosamocatTitle = document.querySelectorAll('[data-title-electrosamocat]');
  const electrosamocatList = document.querySelectorAll('[data-controlers-electrosamocat]');

  const electrovelosipedTitle = document.querySelectorAll('[data-title-electrovelosiped]');
  const electrovelosipedList = document.querySelectorAll('[data-controlers-electrovelosiped]');

  const robotTitle = document.querySelectorAll('[data-title-robot]');
  const robotList = document.querySelectorAll('[data-controlers-robot]');
//активный класс удаляется у всех тайтлов , можно потом пофиксить или вообще оптимизировать этот код
  const electrosamocatParentWrapTitles = document.querySelectorAll('.titles-goods__item');
  
  electrosamocatTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      const currentTab = title.dataset.titleElectrosamocat;
      const parentCurrentTab = title.closest('.titles-goods__item');
      const currentController = document.querySelector(`[data-controlers-electrosamocat="${currentTab}"]`)
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active')
      });
      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }
      electrosamocatList.forEach(function(item){
        item.classList.add('js-hidden')
      });
      currentController.classList.remove('js-hidden')
    });
  });
  electrovelosipedTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      const currentTab = title.dataset.titleElectrovelosiped;
      const parentCurrentTab = title.closest('.titles-goods__item');
      const currentController = document.querySelector(`[data-controlers-electrovelosiped="${currentTab}"]`)
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active')
      });
      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }
      electrovelosipedList.forEach(function(item){
        item.classList.add('js-hidden')
      });
      currentController.classList.remove('js-hidden')
    });
  });
  robotTitle.forEach(function (title) {
    title.addEventListener('click', function () {
      const currentTab = title.dataset.titleRobot;
      const parentCurrentTab = title.closest('.titles-goods__item');
      const currentController = document.querySelector(`[data-controlers-robot="${currentTab}"]`)
      electrosamocatParentWrapTitles.forEach(function (li) {
        li.classList.remove('active')
      });
      if (parentCurrentTab.classList.contains('active')) {
        parentCurrentTab.classList.remove('active');
      } else {
        parentCurrentTab.classList.add('active');
      }
      robotList.forEach(function(item){
        item.classList.add('js-hidden')
      });
      currentController.classList.remove('js-hidden')
    });
  });
};