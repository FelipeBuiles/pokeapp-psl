import angular from 'angular'

import state from './list.state.js'
import PokemonService from '../../services/pokemon.service.js'
import { ListComponent } from './list.component.js'

//Paging isn't ES2015 import ready, so I have to let webpack do its black magic on it and import it as an IIFE
require('script-loader!angular-paging/dist/paging.js')

export default angular.module('pokeapp.list', [PokemonService, 'bw.paging'])
    .component('pokeList', ListComponent)
    .config(state)
    .name