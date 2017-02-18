import angular from 'angular'

class Pokemon {
    constructor($http) {
        this.$http = $http
    }

    all() {
        return this.$http.get('http://pokeapi.co/api/v2/pokemon/').then(resp => {
            return resp.data
        })
    }

    getPage(page) {
        let offset = (page - 1) * 20
        return this.$http.get(`http://pokeapi.co/api/v2/pokemon/?offset=${offset}`).then(resp => {
            return resp.data
        })
    }

    pokemon(id) {
        return this.$http.get(`http://pokeapi.co/api/v2/pokemon/${id}`).then(resp => {
            let pkmn = resp.data
            // I need more infor than what is on the base request for a pokemon, so I have to make a new call for that
            return this.$http.get(pkmn.species.url).then(speciesResp => {
                // and append it to the original response
                pkmn.species = speciesResp.data
                return pkmn
            })
        })
    }
}

export default angular.module('pokeapp.services.pokemon', [])
    .service('PokemonService', Pokemon)
    .name