app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      controller: "DoctorCtrl",
      templateUrl: "app/partials/doctorPartial.html",
    })
    .when("/patients/:docID", {
      controller: "PatientCtrl",
      templateUrl: "app/partials/patientPartial.html",
    })
    .otherwise({
      redirectTo: "/"
    });
});