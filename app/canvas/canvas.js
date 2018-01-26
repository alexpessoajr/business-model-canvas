
angular.module('bmc').component('bmcCanvas', {
  templateUrl: 'app/canvas/canvas.html',
  controller: ['dataService', function(dataService) {
    var vm = this;

    vm.editProjectName = editProjectName;
    vm.saveProjectName = saveProjectName;

    vm.$onInit = function() {
      vm.projectName = dataService.getProjectName();
    };
    
    function editProjectName() {
      vm.editing = true;
    }

    function saveProjectName() {
      dataService.saveProjectName(vm.projectName);
      vm.projectName = dataService.getProjectName();
      vm.editing = false;
    }
  }]
});
