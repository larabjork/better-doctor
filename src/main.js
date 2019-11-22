import { Symptoms } from './project.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//
$(document).ready(function() {
  $('.symptom-form').submit(function(event) {
    event.preventDefault();
    const inputtedSymptom = $("#symptom").val();
    $('#symptom').val("");

    (async () => {
         let mySymptoms = new Symptoms(inputtedSymptom);
         let response = await mySymptoms.apiSymptoms(name);
         // if (response.error) {
         //   showError(response)
         //   console.log(response);
         // } else {
         //   console.log(response);
         getElements(response);
       })();

      function getElements(response) {
         $('.confirm-symptom').text(`Sorry to hear that you're experiencing this symptom: ${response.data.name}`);
         // $('.showTotal').text(`The total number of nonstolen bikes in your area is ${response.non}`);
       }

       // function showError(response) {
       // $('.showErrors').text(`I'm sorry, Dave, I don't think I can do that because:  ${response.error}`);
       // };
  });
});
