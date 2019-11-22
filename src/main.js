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

    let symptomList= new Array
    ("sniffles", "sneezes", "scrapes");
    console.log(symptomList);
    for (let i=0; i<symptomList.length; i++)
    {
      $('#symptom').append(symptomList[i]);
    }

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
