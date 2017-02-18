import template from './list.html'

class controller {
    constructor(PokemonService) {
        let ctrl = this
        ctrl.PokemonService = PokemonService
        PokemonService.all()
            .then(data => {
                this.pokemons = this.processData(data)
                this.paging = {
                    number: 1,
                    count: 678 // data.count
                } 
                /* pokeapi actually lists 800+ pokemons, but from 679 and later they don't have complete info about them,
                    so I'll just list the others */
            })
    }

    processData(data) {
        return data.results.map( p => {
                    let id = p.url.split('/').reverse()[1]
                    return {
                        id,
                        ...p
                    }
                })
    }

    gotoPage(page) {
        this.PokemonService.getPage(page)
            .then(data => {
                this.pokemons = this.processData(data)
            })
    }
}

export const ListComponent = {
    template,
    controller
}