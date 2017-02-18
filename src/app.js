import bootstrapStyles from 'bootstrap/less/bootstrap.less'
import bootstrapScripts from 'bootstrap/dist/js/bootstrap.js'
import loadingBarCss from 'angular-loading-bar/build/loading-bar.css'
import css from './less/main.less'

import angular from 'angular'
import ngAnimate from 'angular-animate'
import uirouter from 'angular-ui-router'
import loadingBar from 'angular-loading-bar'

import routing from './app.config.js'

import navigation from './components/nav'
import list from './components/list'
import details from './components/details'
import pokecard from './components/pokecard'

angular.module('pokeapp', [ngAnimate, uirouter, loadingBar, navigation, list, pokecard, details])
    .config(routing)
