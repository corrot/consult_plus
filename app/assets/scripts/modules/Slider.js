import $ from 'jquery';

class Slider {
    constructor() {
        this.leftButton = $('.slider-nav--left');
        this.rightButton = $('.slider-nav--right');
        this.sliderContent = $('.slider-content');
    }

    events() {
        this.leftButton.click(this.goLeft.bind(this));
        this.rightButton.click(this.goRight.bind(this));
    }

    goLeft() {
        if (this._imageIndex == 0) {
            this._imageIndex = this._images.length;
        }
        this._imageIndex -= 1;
    }

    goRight() {
        if (this._imageIndex == this._images.length - 1) {
            this._imageIndex = -1;
        }
        this._imageIndex += 1;
    }
}

export default Slider;