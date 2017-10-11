import Shape from "./Shape.js";

export class ImageUpload extends Shape {
    constructor(id) {
        super();
        this.color = null;
        this.img = null;
        this.id = id;

        this.showUpload();
    }

    reRenderEvent() {
        let event = new Event('mytest');
        document.body.dispatchEvent(event);
    }

    setImage(image) {
        this.img = image;
        this.reRenderEvent();
    }

    draw(context) {
        if(this.img !== null) {
            context.drawImage(this.img, this.position.x, this.position.y, this.size.x, this.size.y);
        }
    }

    showUpload() {
        let upload = document.getElementById(this.id);
        if(upload === null){
            upload = document.createElement('input');
            upload.type = 'file';
            upload.id = this.id;
            upload.name='fileUpload';
            document.body.appendChild(upload);
        }
        let imageUpload = this;
        upload.addEventListener('change', (e)=>{
            let reader = new FileReader();
            reader.onload = function(event){
                let img = new Image();
                img.onload = () => {
                    imageUpload.setImage(img);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }, false);
    }
}