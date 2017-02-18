import template from './nav.html'

// Manually require the img so webpack knows to bundle it
const logo = require('../../img/logo-pokemon.png')

class controller {
    constructor() {
        this.logo = logo
    }
}

export const NavComponent = {
    template,
    controller
}