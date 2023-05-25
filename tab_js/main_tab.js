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