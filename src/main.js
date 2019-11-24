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


    (async () => {
      let mySymptoms = new Symptoms(inputtedSymptom);
      let response = await mySymptoms.apiSymptoms(inputtedSymptom);
      console.log(response);
      getElements(response);
    })();

    function getElements(response) {
      for (let i = 0; i < response.data.length; i++) {
        let table = document.getElementById("results");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);
        cell1.innerHTML = response.data[i].profile.first_name;
        cell2.innerHTML = response.data[i].profile.last_name;
        cell3.innerHTML = response.data[i].practices[0].accepts_new_patients;
        cell4.innerHTML = response.data[i].practices[0].name;
        cell5.innerHTML = response.data[i].practices[0].visit_address.street;
        cell6.innerHTML = response.data[i].practices[0].visit_address.city;
        cell7.innerHTML = response.data[i].practices[0].visit_address.state;
        cell8.innerHTML = response.data[i].practices[0].visit_address.zip;
        cell9.innerHTML = response.data[i].practices[0].phones[0].number;
        cell10.innerHTML = response.data[i].practices[0].website;
      };
      let table = document.getElementById("results");
      let row = table.insertRow(0);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      let cell6 = row.insertCell(5);
      let cell7 = row.insertCell(6);
      let cell8 = row.insertCell(7);
      let cell9 = row.insertCell(8);
      let cell10 = row.insertCell(9);
      cell1.innerHTML = "First Name";
      cell2.innerHTML = "Last Name";
      cell3.innerHTML = "Accepting New Patients?";
      cell4.innerHTML = "Practice Name";
      cell5.innerHTML = "Street Address"
      cell6.innerHTML = "City";
      cell7.innerHTML = "State";
      cell8.innerHTML = "Zip";
      cell9.innerHTML = "Phone";
      cell10.innerHTML = "Website";
    };
  });
});
