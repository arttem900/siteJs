class Options{
    constructor( height, width, bg, color, fontSize, textAlign){
        this.height = height
        this.width = width
        this.bg = bg
        this.fontSize = fontSize
        this.textAlign = textAlign
        this.color = color
    }
    createElem(){
        let promptAdd = prompt('Введите текст', ' '),
            elementStyle = document.createElement('div')
            elementStyle.innerHTML = promptAdd
            elementStyle.style.cssText = `height:${this.height}; width:${this.width}; color:${this.color}; background:${this.bg}; font-size:${this.fontSize}; text-align:${this.textAlign}`
            document.body.appendChild(elementStyle)
    }
}
    let elemCreateStyle = new Options('100px', '400px', '#313131', 'green', '28px', 'center')
        elemCreateStyle.createElem()