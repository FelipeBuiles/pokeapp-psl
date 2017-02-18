export default function state($stateProvider) {
    $stateProvider
        .state('details', {
            url: '/details/:id',
            controller: function($scope, pokemon) {
                this.pokemon = pokemon;
            },
            controllerAs: 'detailsState',
            template: '<pokedetails pkmn="detailsState.pokemon"></pokedetails>',
            resolve: {
                pokemon: (PokemonService, $stateParams) => PokemonService.pokemon($stateParams.id)
            }
        })
}