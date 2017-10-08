import {delayMilliseconds} from "./wait.js";

export function makeRequest (method, url, timeout = 0) {
    return new Promise((resolve, reject) => {
        delayMilliseconds(timeout).then(() => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    });
}