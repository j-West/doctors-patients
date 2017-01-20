app.controller("PatientCtrl", function($scope, getFactory, $routeParams) {
  console.log("PatientCtrl")


  getFactory.getPatients($routeParams.docID).then(function (data) {
    $scope.patients = data.data;
    console.log($scope.patients);
  })

})