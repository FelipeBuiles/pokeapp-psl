import angular from 'angular'
import * as Vibrant from 'node-vibrant'
import templateString from './pokecard.html'

class PokecardDirective {
    constructor() {
        this.restrict = 'E'
        this.template = templateString
        this.scope = {
            pokemon: '='
        }
    }

    link(scope, element, attributes) {
        // I use Vibrant to give me a dominant color on each sprite, so I can style the name of a pokemon 
        Vibrant.from(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${scope.pokemon.id}.png`)
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

export default angular.module('pokeapp.pokecard', [])
    .directive('pokeCard',() => new PokecardDirective)
    .name