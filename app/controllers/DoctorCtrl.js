app.controller("DoctorCtrl", function($scope, getFactory) {
  console.log("DoctorCtrl")

  $scope.goToPatients = () => $location.url(`/patients/${$scope.name}`)

  getFactory.getDoctors().then(function (data) {
    $scope.doctors = data.data;
    console.log($scope.doctors);
  })

});