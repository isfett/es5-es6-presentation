import {makeRequest} from "./lib/http.js";
import {delaySeconds} from "./lib/wait.js";

makeRequest('GET','/index.html')
    .then(response => {
        console.log('Contents: ' , response);
        return response.substr(response.length-50);
    })
    .then(response => {
        return delaySeconds(5,response);
    })
    .then(response_short => {
        console.log('short response', response_short);
    })
    .catch((error) => {
        console.log('Error: ', error);
    });

makeRequest('GET','/index2.html')
    .then(response => {
        console.log('Contents: ' , response);
    }).catch((error) => {
        console.log('Error: ', error);
    });