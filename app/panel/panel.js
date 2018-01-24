
angular.module('bmc').directive('bmcPanel', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/panel/panel.html',
    scope: {
      title: '@'
    },
    controller: ['$scope', 'dataService', function(vm, dataService) {
      vm.items = [];
      vm.item = '';

      vm.saveItem = saveItem;
      vm.removeItem = removeItem;

      activate();

      function activate() {
        vm.items = dataService.findItemsById(vm.title);
      }

      function save_() {
        dataService.saveItems(vm.title, vm.items);
      }

      function saveItem() {
        var isNotEmpty = vm.item && vm.item.trim();
        
        if (isNotEmpty) {
          vm.items.push(vm.item);
          vm.item = '';
          save_();
        }
      }

      function removeItem(index) {
        vm.items = vm.items.slice(0, index).concat(
          vm.items.slice(index + 1)
        );
        save_();
      }
    }]
  }
});
