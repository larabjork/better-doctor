export class Symptoms {

  async apiSymptoms(inputtedSymptom) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&query=${inputtedSymptom}&location=45.5051,-122.6750,15&user_location=45.5051,-122.6750`);
      if(response.ok) {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } else {
        throw new Error(`error communicating with BetterDoctor API: ${response.status} ${response.statusText}`)
      }
  }
}
