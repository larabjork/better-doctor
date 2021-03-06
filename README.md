# Better Doctor Lookup
## Created by Lara Bjork on November 22, 2019
### Project Description

This project was completed as an independent project for the Intermediate JavaScript class at Epicodus, at the conclusion of a week focused on asynchrony and APIs. The task description was as follows:

_You have been asked to create a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in your city (Portland or Seattle depending on where you are) who can treat their medical issue. Cool!_

_To provide the data you need for this application, Epicodus has partnered with one of the leading providers of medical data - the BetterDoctor API. You'll use the BetterDoctor API to retrieve this information. This is a live API by a Series A funded startup currently under active development, and used by industry heavy-hitters such as HealthNet to provide accurate medical data._

_Here are the following things your application must do. Read through the list carefully to make sure you add all needed functionality!_

* A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
* A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query.
* If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
* If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
* If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)

_Setup Instructions_
* Place your token in an .env file at the top level of your directory. (For grading purposes, name your API key variable API_KEY in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
* Include .env in .gitignore.
* Use at least two JavaScript files: One to receive form input and another to make an API request and display results.
* This example assumes your API Key is stored in an API_KEY variable. In order to make your applications quick to grade, please follow the example exactly and do not rename your API_KEY variable to something different.

### Specifications
The assignment presented all relevant specs.


### Technologies Used
HTML, CSS, JavaScript, Node.js, Chrome Node dev tools, babel 7.6.4, babel plugin 7.6.0,,clean-webpack-plugin 3.0.0, css-loader 3.2.0, eslint 6.3.0, dotenv-webpack 1.7.0, eslint-loader 3.0.0, html-webpack-plugin 3.2.0, jest 24.9.0, style-loader 1.0.0, uglifyjs-webpack-plugin 2.2.0, webpack 4.39.3, webpack-cli 3.3.8, webpack-dev-server 3.8.0, bootstrap 4.3.1, jquery 3.4.1, and popper.js 1.16.0.

Project was written using Google Chrome; no other browsers were tested for compatibility.

### Project Setup instructions
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **npm** (v.3.6.x or higher) are in place.
2. After cloning the project locally, you can run **npm install -y** to download the necessary dependencies. You can then run **npm run build** to bundle your version of this project. If something doesn't display correctly or goes wrong somehow, please contact me at <lara.m.bjork@gmail.com> and I will do my best to troubleshoot for you.
3. You will need to generate your own API key:
  * Visit the BetterDoctor API site (https://developer.betterdoctor.com/) and click "Sign up" to get a free API key.
  * Place your token in an .env file at the top level of your directory. Name your API key variable API_KEY in .env. Keep spelling and capitalization identical, as it considerably speeds up the grading process.)
  * Include .env in .gitignore.
4. You will need an extension or plug-in in your browser that can handle CORS issues. For Google Chrome, search for **Allow CORS: Access-Control-Allow-Origin**. After installing it, you will need to click on the gray "C" icon at the right of the toolbar and then, in the pop-up window, click on the "C" logo. When the "C" is orange, it is working.

### Known Issues and Limitations
* There are no known bugs.
* For browsers other than Chrome, users will need to determine which CORS-related plug-in is most viable.
* The application currently has several default values incorporated. With further modifications, these could become options for a user to select desired output.
  * Number of doctors returned will be <= 10.
  * Geographic range of search is set to within 15 miles of Portland's coordinates (45.5051 N ,-122.6750 W).

### License
This software is licensed under the MIT license.

Copyright (c) 2019 Lara Bjork
