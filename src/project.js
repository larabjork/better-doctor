export class Symptoms {

  async apiSymptoms() {
     let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?&appid=${process.env.API_KEY}&fields=name`);
     let jsonifiedResponse = await response.json();
     console.log('back end check');
     return jsonifiedResponse;
   }

}
