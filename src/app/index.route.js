export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('expenses', {
      url: '/expenses',
      templateUrl: 'app/expenses/expenses.html',
      controller: 'ExpensesController',
      controllerAs: 'expenses'
    });
  $urlRouterProvider.otherwise('/');
}
