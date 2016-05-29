describe('Expenses Controller:', () => {
  let vm;

  beforeEach(angular.mock.module('mybudgetcontrol'));

  beforeEach(inject(($controller) => {
    vm = $controller('ExpensesController');
  }));

  it('should have a title', () => {
    expect(vm.title).toEqual('foo');
  });

  it('should have a amount', () => {
    expect(vm.amount).toEqual('bar');
  });

});