export default function state($stateProvider) {
    $stateProvider
        .state('details', {
            url: '/details/:id',
            /*
                Here I have to do some trickery to get a directive to play nicely with ui-router and a resolve
                First I define an intermediate controller to receive the resolved data, and add it to its $scope
                then I instance the directive and pass it the resolved data through an html attribute
            */
            controller: function($scope, pokemon) {
                this.pokemon = pokemon;
            },
            controllerAs: 'detailsState',
            template: '<poke-details pkmn="detailsState.pokemon"></poke-details>',
            resolve: {
                pokemon: (PokemonService, $stateParams) => PokemonService.pokemon($stateParams.id)
            }
        })
}