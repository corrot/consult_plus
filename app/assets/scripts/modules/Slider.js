import $ from 'jquery';

class Slider {
    constructor() {
        this.leftButton = $('.slider-nav--left');
        this.rightButton = $('.slider-nav--right');
        this.sliderContent = $('.slider-content');
        this.slider = $('.slider')
        this._imageIndex = 0;
        this.events();
    }

    events() {
        this.leftButton.click(this.goLeft.bind(this));
        this.rightButton.click(this.goRight.bind(this));

        setInterval(this.goRight.bind(this), 3000);
    }

    goLeft() {
        this.slider.find('.active').removeClass('active');

        if (this._imageIndex == 0) {
            this._imageIndex = this.sliderContent.length;
        }
        this._imageIndex -= 1;

        this.slider.find('#pic-' + this._imageIndex).addClass('active');
    }

    goRight() {
        this.slider.find('.active').removeClass('active');

        if (this._imageIndex == this.sliderContent.length - 1) {
            this._imageIndex = -1;
        }
        this._imageIndex += 1;

        this.slider.find('#pic-' + this._imageIndex).addClass('active');
    }

}

export default Slider;