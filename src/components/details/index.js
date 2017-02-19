import angular from 'angular'
import * as Vibrant from 'node-vibrant'

import PokemonService from '../../services/pokemon.service.js'
import templateString from './details.html'
import state from './details.state.js'

import circle from '../../less/circle.less'

class DetailsDirective {
    constructor() {
        this.restrict = 'E'
        this.template = templateString,
        this.scope = {
            pkmn: '='
        }
    }

    link(scope, element, attributes) {
        scope.pokemon =  {
            name: scope.pkmn.name,
            id: scope.pkmn.id,
            description: scope.pkmn.species['flavor_text_entries'][1]['flavor_text'],
            height: scope.pkmn.height,
            weight: scope.pkmn.weight,
            gender: scope.pkmn.species.gender_rate >= 1,
            type: scope.pkmn.species.genera[0].genus,
            abilities: [
                scope.pkmn.abilities[0].ability.name,
                (scope.pkmn.abilities[1] ? scope.pkmn.abilities[1].ability.name : '---')
            ],
            stats: {
                'Speed': scope.pkmn.stats[0].base_stat,
                'Special Defense': scope.pkmn.stats[1].base_stat,
                'Special Attack': scope.pkmn.stats[2].base_stat,
                'Defense': scope.pkmn.stats[3].base_stat,
                'Attack': scope.pkmn.stats[4].base_stat,
                'Health Points': scope.pkmn.stats[5].base_stat
            }
        }
        Vibrant.from(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${scope.pkmn.id}.png`)
            .getPalette((err, palette) => {
                if(palette) {
                    let color = palette.Vibrant.rgb
                    scope.$apply(() => {
                        scope.pokemon.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                    })
                }
            })
        
    }
}

export default angular.module('pokeapp.details', [PokemonService])
    .directive('pokeDetails', () => new DetailsDirective)
    .config(state)
    .name