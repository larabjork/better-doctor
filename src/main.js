import { Symptoms } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('.symptom-form').submit(function(event) {
    event.preventDefault();
    const inputtedSymptom = $("#symptom").val();
    $('#symptom').val("");


    (async () => {
      let mySymptoms = new Symptoms(inputtedSymptom);
      let response = await mySymptoms.apiSymptoms(inputtedSymptom);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      let myArray = response;
      console.log(myArray);//this displays, but not the next console log, so focus here.
      for (let i = 0; i < myArray.length; i++) {
        let doctorName = myArray.data[i].profile.first_name;
        console.log(doctorName);
        return doctorName
        $('#first-name').html(doctorName);
      }
    };
    $('.confirm-symptom').text(`Sounds like you're looking for help with ${inputtedSymptom}. These medical practitioners have the skills to help you with that.`);
  });
});


// response.data[0].profile.first_name
// response.data[0].profile.last_name
// response.data[0].practices[0].accepts_new_patients
// response.data[0].practices[0].name
// response.data[0].practices[0].visit_address.street
// response.data[0].practices[0].visit_address.city
// response.data[0].practices[0].visit_address.state
// response.data[0].practices[0].visit_address.zip
// response.data[0].practices[0].phones[0].number
// response.data[0].practices[1].website
