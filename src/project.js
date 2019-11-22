export class Symptoms {

  async apiSymptoms(inputtedSymptom) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?&user_key=${process.env.API_KEY}&fields=name=${inputtedSymptom}`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }

}
