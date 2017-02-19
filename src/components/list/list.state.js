export default function state($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            name: 'pokeList',
            component: 'pokeList',
        })
}