import angular from 'angular'

import { NavComponent } from './nav.component.js'

export default angular.module('pokeapp.nav', [])
    .component('navigation', NavComponent)
    .name