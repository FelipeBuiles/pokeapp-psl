export default function state($stateProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            name: 'list',
            component: 'list',
        })
}