import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('#nav-toggler');
        this.menuContent = $('.nav-sm');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('nav-sm--visible');
        this.menuContent.slideToggle();
    }
}

export default MobileMenu;