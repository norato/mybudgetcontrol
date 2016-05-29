export function expensesRoutes ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('expenses', {
      url: '/expenses',
      templateUrl: 'expenses.html',
      controller: 'ExpensesController',
      controllerAs: 'expenses'
    });
}
