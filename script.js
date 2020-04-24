'use strict'

function DomElement (selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};


DomElement.prototype.createElem = function () {
    let select = this.selector;
    switch (select.charAt(0)) {
        case '.':
            //console.log('Это точка');
            let div = document.createElement('div');
            div.textContent = 'Это блочный тэг';
            div.style.backgroundColor = this.bg;
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.fontSize = this.fontSize;
            document.body.append(div);
            break;
        case '#':
            //console.log('Это параграф'); 
            let p = document.createElement('p');
            p.textContent = 'Это параграф';
            p.style.height = this.height;
            p.style.width = this.width;
            p.style.backgroundColor = this.bg;
            p.style.fontSize = this.fontSize;
            document.body.append(p);
            break;   
    }
 };

let domElementObj = new DomElement ('.block', '30px', '200px', 'blue', '20px');
domElementObj.createElem();