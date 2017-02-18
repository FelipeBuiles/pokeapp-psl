import template from './nav.html'

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