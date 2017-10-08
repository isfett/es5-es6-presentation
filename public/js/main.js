import {makeRequest} from "./lib/http.js";
import {delaySeconds} from "./lib/wait.js";

makeRequest('GET','/config/config.json', 3000)
    .then(response => {
        return JSON.parse(response);
    })
    .then(json => {
        console.log(json);
        return true;
    })
    .then(() => {
        return makeRequest('GET', '/index.html', 5000);
    })
    .then(response => {
        console.log('response', response);
        alert('loaded');
    })
    .catch((error) => {
        console.log('Error: ', error);
    });