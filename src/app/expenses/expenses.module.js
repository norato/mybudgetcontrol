import { expensesRouter } from './expenses.routes';
import { expensesController} from './expenses.controller';

angular.module('mybudgetcontrol')
  .config(expensesRoutes)
  .controller('ExpensesController', expensesController);
