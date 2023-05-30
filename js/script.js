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



//TIMER
let timerNumbers = document.querySelector('.timer-numbers'),
    hours = timerNumbers.querySelector('.hours'),
    minutes = timerNumbers.querySelector('.minutes'),
    seconds = timerNumbers.querySelector('.seconds')
    
    
let dedline = '2023-05-29'
let open = getTimeRemaining(dedline)
console.log(open);
hours.textContent = open.hours
open.hours <= 9 ? hours.textContent = '0' + open.hours:open.hours
minutes.textContent = open.minutes
open.minutes <= 9 ? minutes.textContent = '0' + open.minutes:open.minutes
seconds.textContent = open.seconde
open.seconde <= 9 ? seconds.textContent = '0' + open.seconde:open.seconde

function getTimeRemaining(endtime){
    
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60)
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconde': seconds
        }
}

function setClock(id, endtimes){
let time = document.getElementById(id),
    hours = time.querySelector('.hours'),
    minutes = time.querySelector('.minutes'),
    seconds = time.querySelector('.seconds'),
    timeInterval = setInterval(updateClock, 1000)

    function updateClock(){
        let t = getTimeRemaining(endtimes)
        hours.textContent = t.hours
        t.hours <= 9 ? hours.textContent = '0' + t.hours:t.hours
        minutes.textContent = t.minutes
        t.minutes <= 9 ? minutes.textContent = '0' + t.minutes:t.minutes
        seconds.textContent = t.seconde
        t.seconde <= 9 ? seconds.textContent = '0' + t.seconde:t.seconde
        if(t.total <= 0){
            clearInterval(timeInterval)
        }
    }
}
setClock('timer', dedline)
//end TIMER

//MODAL

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close')

    more.addEventListener('click', () => {
        overlay.style.display = 'block'
        more.classList.add('more-splash')
        document.body.style.overflow = 'hidden'
    })
    close.addEventListener('click', () => {
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
        
    })
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'
        more.classList.remove('more-splash')
        document.body.style.overflow = ''
    })



    // class Options{
    //     constructor( height, width, bg, color, fontSize, textAlign){
    //         this.height = height
    //         this.width = width
    //         this.bg = bg
    //         this.fontSize = fontSize
    //         this.textAlign = textAlign
    //         this.color = color
    //     }
    //     createElem(){
    //         let promptAdd = prompt('Введите текст', ' '),
    //             elementStyle = document.createElement('div')
    //             elementStyle.innerHTML = promptAdd
    //             elementStyle.style.cssText = `height:${this.height}; width:${this.width}; color:${this.color}; background:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}`
    //             document.body.appendChild(elementStyle)
    //     }
    // }
    //     let elemCreateStyle = new Options('100px', '400px', '#313131', 'green', '28px', 'center')
    //         elemCreateStyle.createElem()
})






