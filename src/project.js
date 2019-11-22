export class Symptoms {
  // constructor () {
  //   this.symptom = inputtedSymptom;
  // }

  async apiSymptoms(inputtedSymptom) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&query={inputtedSymptom}&location=45.5051,-122.6750,15`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }

}
