import angular from 'angular'

import state from './list.state.js'
import PokemonService from '../../services/pokemon.service.js'
import { ListComponent } from './list.component.js'

require('script-loader!angular-paging/dist/paging.js')

export default angular.module('pokeapp.list', [PokemonService, 'bw.paging'])
    .component('list', ListComponent)
    .config(state)
    .name