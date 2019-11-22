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
      $('.confirm-symptom').text(`Sorry to hear that you're experiencing ${inputtedSymptom}. These medical practitioners have the skills to help you with that.`);
      console.log(response);
    }

  });
});


// doctorList.data[0].profile.first_name
// doctorList.data[0].profile.last_name
// doctorList.data[0].practices[0].accepts_new_patients //for true/false of accepting new accepts_new_patients
// doctorList.data[0].practices[0].name //for name of practice, not doctor
// doctorList.data[0].practices[0].visit_address.street
// doctorList.data[0].practices[0].visit_address.city
// doctorList.data[0].practices[0].visit_address.state
// doctorList.data[0].practices[0].visit_address.zip
// doctorList.data[0].practices[0].phones[0].number
// doctorList.data[0].practices[1].website
