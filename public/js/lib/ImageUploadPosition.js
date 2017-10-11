import {ImageUpload} from "./ImageUpload.js";

export class ImageUploadPosition extends ImageUpload {
    constructor(id) {
        super(id);
        this.showPlusMinus();
    }

    showPlusMinus() {
        let plusMinusContainer = document.getElementById(this.id+'plusminuscontainer');
        if(plusMinusContainer === null){
            plusMinusContainer = document.createElement('span');
            plusMinusContainer.id = this.id+'plusminuscontainer';
            let plus = document.createElement('button');
            plus.textContent = '+';
            plus.classList.add('plusminusbutton');
            plusMinusContainer.appendChild(plus);
            let minus = document.createElement('button');
            minus.textContent = '-';
            minus.classList.add('plusminusbutton');
            plusMinusContainer.appendChild(minus);
            document.body.appendChild(plusMinusContainer);
        }
        let plus = plusMinusContainer.childNodes[0];
        let minus = plusMinusContainer.childNodes[1];
        let imageUploadPosition = this;
        [plus, minus].forEach((element) => {
            element.addEventListener('click', (e) => {
                if(e.target.textContent === '+') {
                    imageUploadPosition.position.x += 10;
                } else {
                    imageUploadPosition.position.x -= 10;
                }
                imageUploadPosition.reRenderEvent();
                return false;
            })
        })
    }
}