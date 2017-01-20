app.factory("getFactory", function($http) {

  function getDoctors() {
    return $http.get(`https://test-351e3.firebaseio.com/doctors.json`)
  }

  function getPatients(docID) {
    return $http.get(`https://test-351e3.firebaseio.com/patients.json?orderBy="doctor_id"&equalTo="${docID}"`)
  }


  return {
    getDoctors,
    getPatients
  }
});