import {makeRequest} from "./lib/http.js";

Promise.all([
    makeRequest('GET', '/config/config.json', 3000),
    makeRequest('GET', '/index.html', 5000),
])
.then(([configResponse, indexResponse]) => {
    console.log(JSON.parse(configResponse));
    console.log('indexResponse', indexResponse);
});
