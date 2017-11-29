import $ from 'jquery';

class Testimonials {
    constructor() {
        this.testimonialsWrapper = $('.row--testimonials');
        this.testimonials = $('.testimonials--client');
        this._testimonialIndex = 0;
        this.events();
    }

    events() {
        // this.testimonials.click(this.GotoTestimonial.bind(this));

        setInterval(this.NextTestimonial.bind(this), 5000);
    }

    NextTestimonial() {
        this.testimonialsWrapper.find('.active').removeClass('active');

        if (this._testimonialIndex == this.testimonials.length - 1) {
            this._testimonialIndex = -1;
        }

        this._testimonialIndex += 1;

        this.testimonialsWrapper.find('#testimonial-' + this._testimonialIndex).addClass('active');
    }

    // GotoTestimonial() {
    //     this.testimonials.removeClass('active');
    //     console.log(this)
    // }

}

export default Testimonials;