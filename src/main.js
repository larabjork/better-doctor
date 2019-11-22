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
      let response = await mySymptoms.apiSymptoms(inputtedSymptom);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      $('.confirm-symptom').text(`Sorry to hear that you're experiencing this symptom: ${response.data[0].name}`);
      console.log(response);
    }

  });
});
