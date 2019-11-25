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

    $('.intro').hide();
    $('.afterSubmit').show();

    $("#confirmSymptom").html(inputtedSymptom);

    (async () => {
      let mySymptoms = new Symptoms(inputtedSymptom);
      let response = await mySymptoms.apiSymptoms(inputtedSymptom);
        if (typeof response.data != "undefined" && response.data != null && response.data.length != null && response.data.length > 0) {
          let cleanResponse = cleanUpJSON(response);
          getElements(cleanResponse);
        } else {
          $('.afterSubmit').hide();
          $('.noResults').show();
      };
    })();




    function cleanUpJSON(response) {
      let cleanResponse = response;
      for (let m = 0; m < cleanResponse.data.length; m++) {
        if (response.data[m].practices[0].accepts_new_patients === true) {
          cleanResponse.data[m].practices[0].accepts_new_patients = "Yes"
        } else if (response.data[m].practices[0].accepts_new_patients === false) {
        cleanResponse.data[m].practices[0].accepts_new_patients = "No"
        } else {};
        if (response.data[m].practices[0].website === undefined) {
          cleanResponse.data[m].practices[0].website = ""
        }
        let phone = response.data[m].practices[0].phones[0].number;
        let cleanPhone = formatPhoneNumber(phone);
        cleanResponse.data[m].practices[0].phones[0].number = cleanPhone
      };
      return cleanResponse;
    }


    function formatPhoneNumber(phoneNumberString) {
      let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      }
      return phoneNumberString
    }


    function getElements(response) {
      let table = document.createElement("table");
      let tr = table.insertRow(-1);

      let headerLabels = ["First Name", "Last Name", "Website", "Accepts New Patients?", "Practice Name", "Street", "City", "State", "Zip", "Phone Number"];

      for (let j = 0; j < headerLabels.length; j++) {
        let theader = document.createElement("th");
        theader.innerHTML = headerLabels[j];
        tr.appendChild(theader);
      }

      let headers = ["first_name", "last_name", "website", "accepts_new_patients", "name", "street", "city", "state", "zip", "number"];

      for (let i = 0; i < response.data.length; i++) {
        let trow = table.insertRow(-1);
        for (var j = 0; j < 2; j++) {
            var cell = trow.insertCell(-1);
            cell.innerHTML = response.data[i].profile[headers[j]];
          }
          for (var k = 2; k < 5; k++) {
              var cell = trow.insertCell(-1);
              cell.innerHTML = response.data[i].practices[0][headers[k]];
            }
          for (var l = 5; l < 9; l++) {
              var cell = trow.insertCell(-1);
              cell.innerHTML = response.data[i].practices[0].visit_address[headers[l]];
            }
          for (var m = 9; m < 10; m++) {
              var cell = trow.insertCell(-1);
              cell.innerHTML = response.data[i].practices[0].phones[0][headers[l]];
            }
      }

      let resultsTable = document.getElementById("results");
      resultsTable.innerHTML = "";
      resultsTable.appendChild(table);
      };

    });
  });
