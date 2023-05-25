document.addEventListener('DOMContentLoaded', function(){
    "use strict"


//ТАБЫ
//     let infoHeader = document.querySelector('.info-header'),
//         tabHeader = document.querySelectorAll('.info-header-tab'),
//         tabContent = document.querySelectorAll('.info-tabcontent')

// //Функция скрытия всех элементов кроме одного
//         function tabContentHide (visible){
//             for (let i = visible; i < tabContent.length; i++){
//                 tabContent[i].classList.remove('show')
//                 tabContent[i].classList.add('hide')
//             }
//         }
//         tabContentHide (1)

// //Открываем элемент если он скрыт
//         function tabContentVisible(b){
//             if(tabContent[b].classList.contains('hide')){
//                 tabContent[b].classList.add('show')
//                 tabContent[b].classList.remove('hide')
//             }
//         }

// /*Событие клик, с помощю объекта event.target определяем на каом элементе произошло событие убираем
// видимый элемент и включаем элемент по индексу
// */
//         infoHeader.addEventListener('click', (e) => {
//             let target = e.target
//             if(target && target.classList.contains('info-header-tab')){
//                 for(let i = 0; i < tabHeader.length; i++){
//                     if(target == tabHeader[i]){
//                         tabContentHide(0)
//                         tabContentVisible(i)  
//                     }
//                 }
//             }
//         })


function tabVisible(blockTabWrap, elemTab, contentTab) {
    function tabContentHide(visible) {
        for (let i = visible; i < contentTab.length; i++) {
            contentTab[i].classList.remove('show')
            contentTab[i].classList.add('hide')
        }
    }
    tabContentHide(1)


    function tabContentVisible(b) {
        if (contentTab[b].classList.contains('hide')) {
            contentTab[b].classList.add('show')
            contentTab[b].classList.remove('hide')
        }
    }


    blockTabWrap.addEventListener('click', (e) => {
        let target = e.target
        if (target && target.classList.contains('info-header-tab'/*Класс активного элемента*/)) {
            for (let i = 0; i < elemTab.length; i++) {
                if (target == elemTab[i]) {
                    tabContentHide(0)
                    tabContentVisible(i)
                }
            }
        }
    })
}

let infoHeader = document.querySelector('.info-header'),
    tabHeader = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent')

tabVisible(infoHeader, tabHeader, tabContent)
//         // End ТАБЫ
})






