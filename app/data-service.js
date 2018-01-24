
angular.module('bmc').service('dataService', function() {
  
  this.saveItems = function(id, items) {
    var key = 'bmc.' + id;
    var value = angular.toJson(items);

    localStorage.setItem(key, value);
  };

  this.findItemsById = function(id) {
    var key = 'bmc.' + id;
    var items = localStorage.getItem(key);
    
    if (items) {
      return angular.fromJson(items);
    }
    return [];
  };
});
