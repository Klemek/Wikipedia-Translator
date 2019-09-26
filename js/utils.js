/* exported utils */

const utils = {
  get: (url, proxy = false) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (proxy) {
        const http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        url = http + '//cors-anywhere.herokuapp.com/' + url;
      }
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
};