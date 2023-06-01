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
    
    
let dedline = '2023-06-02'
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
    // overlay.addEventListener('click', () => {
    //     overlay.style.display = 'none'
    //     more.classList.remove('more-splash')
    //     document.body.style.overflow = ''
    // })



    //FORM

    let massage = {
        loading: 'Загрузка...',
        success: 'Спасибо, скоро мы вам перезвоним!',
        failure: 'Что-то пошло не так'
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMassage = document.createElement('div')

        statusMassage.classList.add('status')

        form.addEventListener('submit', (event) => {
            event.preventDefault()
            form.appendChild(statusMassage)

            //создать запрос
            let request = new XMLHttpRequest
                request.open('POST', 'http://localhost:80')
               
                //заголовок Http запроса
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8')//для JSON формата
                // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                //собираем данные которые ввел пользователь
                let formData = new FormData(form)

                let obj = {} // отправка в JSON формате
                formData.forEach(function(key, value){ // отправка в JSON формате
                    obj[key] = value // отправка в JSON формате
                })
                let jeson = JSON.stringify(obj) // отправка в JSON формате
                    //отправить на сервер
                    request.send(jeson)
                    // request.send(formData)
            //отслеживаем отправку запроса
                request.addEventListener('readystatechange', () => {
                    if(request.readyState < 4){
                        statusMassage.innerHTML = massage.loading
                    }else if(request.readyState == 4 && request.status == 200){
                        statusMassage.innerHTML = massage.success
                    }else{
                        statusMassage.innerHTML = massage.failure
                    }
                })
                //очистить все инпуты
                for(let i = 0; i < input.length; i++){
                    input[i].value = ''
                }
                overlay.style.display = 'none'
                more.classList.remove('more-splash')
                document.body.style.overflow = ''
               
        })
})






